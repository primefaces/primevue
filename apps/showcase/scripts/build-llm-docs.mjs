import ComponentTokens from '@primeuix/themes/tokens';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.resolve(__dirname, '../doc');
const PAGES_DIR = path.resolve(__dirname, '../pages');
const API_DOC_PATH = path.resolve(__dirname, '../doc/common/apidoc/index.json');
const OUTPUT_DIR = path.resolve(__dirname, '../server/assets/llms');
const MCP_DATA_DIR = path.resolve(__dirname, '../../../packages/mcp/data');

// Mapping for components where route name doesn't match API interface name
const COMPONENT_NAME_MAP = {
    datepicker: 'DatePicker',
    datatable: 'DataTable',
    dataview: 'DataView'
};

/**
 * Get the correct component name for API lookups by finding the actual Props interface
 */
function getApiComponentName(apiDoc, componentName) {
    // First check the manual mapping
    const lowerName = componentName.toLowerCase();

    if (COMPONENT_NAME_MAP[lowerName]) {
        return COMPONENT_NAME_MAP[lowerName];
    }

    // If we have the API doc, find the actual Props interface name
    if (apiDoc && apiDoc.interfaces && apiDoc.interfaces.values) {
        const propsInterfaceKey = Object.keys(apiDoc.interfaces.values).find((key) => key.endsWith('Props') && !key.includes('PassThrough') && !key.includes('Event'));

        if (propsInterfaceKey) {
            // Remove 'Props' suffix to get component name
            return propsInterfaceKey.replace(/Props$/, '');
        }
    }

    // Default: capitalize first letter
    return componentName.charAt(0).toUpperCase() + componentName.slice(1);
}

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Extract text content from Vue template
 */
function extractTextFromTemplate(template) {
    let text = template.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

    text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
    text = text.replace(/<template>/gi, '');
    text = text.replace(/<\/template>/gi, '');

    const docTextMatches = text.matchAll(/<DocSectionText[^>]*>([\s\S]*?)<\/DocSectionText>/gi);
    let descriptions = [];

    for (const match of docTextMatches) {
        const content = match[1]
            .replace(/<[^>]+>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        if (content) {
            descriptions.push(content);
        }
    }

    return descriptions.join(' ');
}

/**
 * Extract code from <pre v-code> blocks in template
 * Used by guide pages that don't have code: {} objects
 */
function extractCodeFromPreBlocks(content) {
    const examples = {};
    const codeBlocks = [];

    // Match <pre v-code> or <pre v-code.script> blocks
    // The pattern captures the modifier (if any) and the code content
    const prePattern = /<pre\s+v-code(?:\.(\w+))?><code>([\s\S]*?)<\/code><\/pre>/gi;
    let match;

    while ((match = prePattern.exec(content)) !== null) {
        const modifier = match[1]; // 'script' or undefined
        let code = match[2].trim();

        // Decode HTML entities
        code = code
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#123;/g, '{')
            .replace(/&#125;/g, '}')
            .replace(/&#39;/g, "'");

        codeBlocks.push({
            modifier,
            code
        });
    }

    if (codeBlocks.length === 0) return null;

    // Combine code blocks intelligently
    // If there's a script block and a template block, combine them
    const scriptBlocks = codeBlocks.filter((b) => b.modifier === 'script');
    const templateBlocks = codeBlocks.filter((b) => !b.modifier);

    if (scriptBlocks.length > 0 && templateBlocks.length > 0) {
        // Combine script and template blocks
        let combined = '';

        for (const block of scriptBlocks) {
            combined += block.code + '\n\n';
        }

        for (const block of templateBlocks) {
            combined += block.code + '\n\n';
        }

        examples.basic = combined.trim();
    } else if (codeBlocks.length === 1) {
        // Single code block
        examples.basic = codeBlocks[0].code;
    } else {
        // Multiple blocks of same type - combine them
        examples.basic = codeBlocks.map((b) => b.code).join('\n\n');
    }

    return Object.keys(examples).length > 0 ? examples : null;
}

/**
 * Extract code examples from Vue file
 * Handles escaped backticks properly to avoid cutting off code
 */
function extractCodeExamples(content) {
    // First try to extract from code: {} object (component docs pattern)
    const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/i);

    if (scriptMatch) {
        const scriptContent = scriptMatch[1];

        // Find the code object with proper brace matching
        const codeStartMatch = scriptContent.match(/code:\s*{/);

        if (codeStartMatch) {
            const startIndex = codeStartMatch.index + codeStartMatch[0].length;
            let braceDepth = 1;
            let endIndex = -1;

            // Find the matching closing brace for the code object
            for (let i = startIndex; i < scriptContent.length; i++) {
                if (scriptContent[i] === '{') {
                    braceDepth++;
                } else if (scriptContent[i] === '}') {
                    braceDepth--;

                    if (braceDepth === 0) {
                        endIndex = i;
                        break;
                    }
                }
            }

            if (endIndex !== -1) {
                const codeContent = scriptContent.substring(startIndex, endIndex);
                const examples = {};

                // Helper function to extract content between backticks, handling escaped backticks
                function extractBetweenBackticks(text, prefix) {
                    const startPattern = prefix + '\\s*`';
                    const startMatch = text.match(new RegExp(startPattern));

                    if (!startMatch) return null;

                    const startIndex = startMatch.index + startMatch[0].length;
                    let endIndex = -1;

                    // Find the matching closing backtick, counting escaped backticks
                    for (let i = startIndex; i < text.length; i++) {
                        if (text[i] === '\\' && text[i + 1] === '`') {
                            // Skip escaped backtick
                            i++;
                            continue;
                        }

                        if (text[i] === '`') {
                            // Check if this is followed by comma, closing brace, or end of content (can be on next line)
                            const after = text.substring(i + 1).match(/^[\s\n]*([,}]|$)/);

                            if (after) {
                                endIndex = i;
                                break;
                            }
                        }
                    }

                    if (endIndex === -1) return null;

                    return text.substring(startIndex, endIndex).trim();
                }

                const basic = extractBetweenBackticks(codeContent, 'basic:');
                const options = extractBetweenBackticks(codeContent, 'options:');
                const composition = extractBetweenBackticks(codeContent, 'composition:');
                const data = extractBetweenBackticks(codeContent, 'data:');

                if (basic) examples.basic = basic;
                if (options) examples.options = options;
                if (composition) examples.composition = composition;
                if (data) examples.data = data;

                if (Object.keys(examples).length > 0) {
                    return examples;
                }
            }
        }
    }

    // Fallback: Try to extract from <pre v-code> blocks (guide pages pattern)
    return extractCodeFromPreBlocks(content);
}

/**
 * Parse a single Vue documentation file
 */
function parseVueDocFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const description = extractTextFromTemplate(content);
    const codeExamples = extractCodeExamples(content);

    return {
        description,
        codeExamples
    };
}

/**
 * Get component metadata from page file
 */
function getComponentMetadata(componentName) {
    const pagePath = path.join(PAGES_DIR, componentName, 'index.vue');

    if (!fs.existsSync(pagePath)) {
        return null;
    }

    const content = fs.readFileSync(pagePath, 'utf-8');

    const titleMatch = content.match(/title="([^"]+)"/);
    const headerMatch = content.match(/header="([^"]+)"/);
    const descriptionMatch = content.match(/description="([^"]+)"/);

    const docsMatch = content.match(/docs:\s*\[([\s\S]*?)\]/);
    let sections = [];

    if (docsMatch) {
        const docsContent = docsMatch[1];
        const sectionMatches = docsContent.matchAll(/{\s*id:\s*['"]([^'"]+)['"]\s*,\s*label:\s*['"]([^'"]+)['"]/g);

        for (const match of sectionMatches) {
            sections.push({
                id: match[1],
                label: match[2]
            });
        }
    }

    return {
        title: titleMatch ? titleMatch[1] : componentName,
        header: headerMatch ? headerMatch[1] : componentName,
        description: descriptionMatch ? descriptionMatch[1] : '',
        sections
    };
}

/**
 * Process a component directory
 */
function processComponent(componentName, componentDir) {
    const metadata = getComponentMetadata(componentName);

    if (!metadata) {
        console.warn(`No page metadata found for ${componentName}`);

        return null;
    }

    const component = {
        name: componentName,
        title: metadata.title,
        description: metadata.description,
        sections: []
    };

    const files = fs.readdirSync(componentDir);

    for (const file of files) {
        if (!file.endsWith('.vue')) continue;

        const filePath = path.join(componentDir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) continue;

        const sectionId = file.replace('Doc.vue', '').toLowerCase();
        const sectionInfo = metadata.sections.find((s) => s.id === sectionId);
        const docData = parseVueDocFile(filePath);

        if (docData.description || docData.codeExamples) {
            component.sections.push({
                id: sectionId,
                label: sectionInfo ? sectionInfo.label : file.replace('.vue', ''),
                description: docData.description,
                examples: docData.codeExamples
            });
        }
    }

    return component;
}

/**
 * Get all components from the docs directory
 */
function getAllComponents() {
    const entries = fs.readdirSync(DOCS_DIR);
    const components = [];

    // Directories to exclude (non-component documentation)
    const excludeDirs = [
        'common',
        'guides',
        'theming',
        'clt',
        'forms',
        'autoimport',
        'cdn',
        'configuration',
        'contribution',
        'customicons',
        'designer',
        'icons',
        'introduction',
        'laravel',
        'llms',
        'nuxt',
        'passthrough',
        'setup',
        'tailwind',
        'uikit',
        'vite'
    ];

    for (const entry of entries) {
        const componentDir = path.join(DOCS_DIR, entry);
        const stat = fs.statSync(componentDir);

        if (!stat.isDirectory() || excludeDirs.includes(entry)) continue;

        const component = processComponent(entry, componentDir);

        if (component) {
            components.push(component);
        }
    }

    return components;
}

/**
 * Load API documentation
 */
function loadApiDocs() {
    if (!fs.existsSync(API_DOC_PATH)) {
        console.warn('API documentation not found. Run build:apidoc first.');

        return {};
    }

    return JSON.parse(fs.readFileSync(API_DOC_PATH, 'utf-8'));
}

/**
 * Get Props from API interfaces
 */
function getPropsFromApi(apiDoc, componentName) {
    if (!apiDoc || !apiDoc.interfaces || !apiDoc.interfaces.values) return null;

    const propsInterface = apiDoc.interfaces.values[`${componentName}Props`];

    if (!propsInterface || !propsInterface.props) return null;

    return propsInterface.props.map((prop) => ({
        name: prop.name,
        type: prop.type,
        default: prop.default || '-',
        description: prop.description || ''
    }));
}

/**
 * Get Slots from API interfaces
 */
function getSlotsFromApi(apiDoc, componentName) {
    if (!apiDoc || !apiDoc.interfaces || !apiDoc.interfaces.values) return null;

    const slotsInterface = apiDoc.interfaces.values[`${componentName}Slots`];

    if (!slotsInterface || !slotsInterface.props) return null;

    return slotsInterface.props.map((slot) => ({
        name: slot.name,
        parameters: slot.type,
        description: slot.description || ''
    }));
}

/**
 * Get Emits from API interfaces
 */
function getEmitsFromApi(apiDoc, componentName) {
    if (!apiDoc || !apiDoc.interfaces || !apiDoc.interfaces.values) return null;

    const emitsInterface = apiDoc.interfaces.values[`${componentName}EmitsOptions`];

    if (!emitsInterface || !emitsInterface.props) return null;

    return emitsInterface.props.map((emit) => ({
        name: emit.name,
        parameters: emit.type,
        description: emit.description || ''
    }));
}

/**
 * Get Pass Through Options from API
 */
function getPTOptionsFromApi(apiDoc, componentName) {
    if (!apiDoc || !apiDoc.interfaces || !apiDoc.interfaces.values) return null;

    const ptInterface = apiDoc.interfaces.values[`${componentName}PassThroughOptions`] || apiDoc.interfaces.values[`${componentName}DirectivePassThroughOptions`];

    if (!ptInterface || !ptInterface.props) return null;

    return ptInterface.props.map((pt) => ({
        name: pt.name,
        type: pt.type,
        description: pt.description || ''
    }));
}

/**
 * Get CSS Classes from API
 */
function getStyleOptionsFromApi(apiDocs, componentName) {
    const styleDoc = apiDocs[componentName.toLowerCase() + 'style'];

    if (!styleDoc || !styleDoc.enumerations || !styleDoc.enumerations.values) return null;

    const enumValues = styleDoc.enumerations.values;
    const classEnum = enumValues[`${componentName}Classes`];

    if (!classEnum || !classEnum.members) return null;

    return classEnum.members.map((member) => ({
        class: member.value.replaceAll('"', ''),
        description: member.description || ''
    }));
}

/**
 * Get Design Tokens from @primeuix/themes
 */
function getTokenOptionsFromApi(componentName) {
    const tokens = [];

    if (ComponentTokens[componentName.toLowerCase()]) {
        const componentTokens = ComponentTokens[componentName.toLowerCase()].tokens;

        for (const [_, value] of Object.entries(componentTokens)) {
            tokens.push({
                token: value.token,
                variable: value.variable,
                description: value.description || ''
            });
        }
    }

    return tokens.length > 0 ? tokens : null;
}

/**
 * Generate enhanced API section for markdown (with related components)
 */
function generateApiSection(apiDocs, componentName, includeRelated = true) {
    let markdown = '';

    // Get API data for main component
    const apiDoc = apiDocs[componentName.toLowerCase()];
    const mainComponentName = getApiComponentName(apiDoc, componentName);

    // Build list of components to process
    const components = [mainComponentName];

    if (includeRelated) {
        // Try to find related components (e.g., ButtonGroup for Button)
        const relatedComponents = Object.keys(apiDocs).filter((key) => {
            // Skip the component itself and *style components
            if (key === componentName.toLowerCase() || key.endsWith('style')) {
                return false;
            }

            // Only include if it starts with component name (e.g., buttongroup for button)
            return key.startsWith(componentName.toLowerCase());
        });

        // Add related components, but avoid duplicates
        for (const rc of relatedComponents) {
            const relatedName = rc.charAt(0).toUpperCase() + rc.slice(1);

            if (!components.includes(relatedName)) {
                components.push(relatedName);
            }
        }
    }

    for (const compName of components) {
        const compApiDoc = apiDocs[compName.toLowerCase()];

        if (!compApiDoc) {
            console.warn(`⚠️  No API doc found for component: ${compName} (looking for key: ${compName.toLowerCase()})`);
            continue;
        }

        const displayName = compName.replace(/([A-Z])/g, ' $1').trim();

        markdown += `## ${displayName}\n\n`;

        // Props
        const props = getPropsFromApi(compApiDoc, compName);

        if (props && props.length > 0) {
            markdown += '### Props\n\n';
            markdown += '| Name | Type | Default | Description |\n';
            markdown += '|------|------|---------|-------------|\n';

            for (const prop of props) {
                const name = prop.name || '';
                const type = (prop.type || '').replace(/\|/g, '\\|');
                const defaultValue = prop.default || '-';
                const description = (prop.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

                markdown += `| ${name} | ${type} | ${defaultValue} | ${description} |\n`;
            }

            markdown += '\n';
        }

        // Slots
        const slots = getSlotsFromApi(compApiDoc, compName);

        if (slots && slots.length > 0) {
            markdown += '### Slots\n\n';
            markdown += '| Name | Parameters | Description |\n';
            markdown += '|------|------------|-------------|\n';

            for (const slot of slots) {
                const name = slot.name || '';
                const params = (slot.parameters || '').replace(/\|/g, '\\|');
                const description = (slot.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

                markdown += `| ${name} | ${params} | ${description} |\n`;
            }

            markdown += '\n';
        }

        // Emits
        const emits = getEmitsFromApi(compApiDoc, compName);

        if (emits && emits.length > 0) {
            markdown += '### Emits\n\n';
            markdown += '| Name | Parameters | Description |\n';
            markdown += '|------|------------|-------------|\n';

            for (const emit of emits) {
                const name = emit.name || '';
                const params = (emit.parameters || '').replace(/\|/g, '\\|');
                const description = (emit.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

                markdown += `| ${name} | ${params} | ${description} |\n`;
            }

            markdown += '\n';
        }
    }

    return markdown;
}

/**
 * Generate Pass Through section for markdown
 */
function generatePTSection(apiDocs, componentName) {
    let markdown = '';
    const apiDoc = apiDocs[componentName.toLowerCase()];
    const mainComponentName = getApiComponentName(apiDoc, componentName);

    const ptOptions = getPTOptionsFromApi(apiDoc, mainComponentName);

    if (ptOptions && ptOptions.length > 0) {
        markdown += '## Pass Through Options\n\n';
        markdown += '| Name | Type | Description |\n';
        markdown += '|------|------|-------------|\n';

        for (const pt of ptOptions) {
            const name = pt.name || '';
            const type = (pt.type || '').replace(/\|/g, '\\|');
            const description = (pt.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

            markdown += `| ${name} | ${type} | ${description} |\n`;
        }

        markdown += '\n';
    }

    return markdown;
}

/**
 * Generate Theming section for markdown
 */
function generateThemingSection(apiDocs, componentName) {
    let markdown = '';
    const apiDoc = apiDocs[componentName.toLowerCase()];
    const mainComponentName = getApiComponentName(apiDoc, componentName);

    // CSS Classes
    const styleOptions = getStyleOptionsFromApi(apiDocs, mainComponentName);

    if (styleOptions && styleOptions.length > 0) {
        markdown += '## Theming\n\n';
        markdown += '### CSS Classes\n\n';
        markdown += '| Class | Description |\n';
        markdown += '|-------|-------------|\n';

        for (const style of styleOptions) {
            const className = style.class || '';
            const description = (style.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');

            markdown += `| ${className} | ${description} |\n`;
        }

        markdown += '\n';
    }

    // Design Tokens (placeholder)
    const tokens = getTokenOptionsFromApi(mainComponentName);

    if (tokens && tokens.length > 0) {
        markdown += '### Design Tokens\n\n';
        markdown += '| Token | CSS Variable | Description |\n';
        markdown += '|-------|--------------|-------------|\n';

        for (const token of tokens) {
            markdown += `| ${token.token} | ${token.variable} | ${token.description} |\n`;
        }

        markdown += '\n';
    }

    return markdown;
}

/**
 * Generate JSON output for MCP server
 */
function generateJsonOutput(components, apiDocs, guidePages = []) {
    const output = {
        version: '1.0.0',
        generatedAt: new Date().toISOString().split('T')[0],
        components: components.map((comp) => {
            const apiDoc = apiDocs[comp.name.toLowerCase()];
            const mainComponentName = getApiComponentName(apiDoc, comp.name);

            return {
                name: comp.name,
                title: comp.title,
                description: comp.description,
                sections: comp.sections.map((section) => ({
                    id: section.id,
                    label: section.label,
                    description: section.description,
                    examples: section.examples
                })),
                api: {
                    props: getPropsFromApi(apiDoc, mainComponentName),
                    slots: getSlotsFromApi(apiDoc, mainComponentName),
                    emits: getEmitsFromApi(apiDoc, mainComponentName),
                    pt: getPTOptionsFromApi(apiDoc, mainComponentName),
                    styles: getStyleOptionsFromApi(apiDocs, mainComponentName),
                    tokens: getTokenOptionsFromApi(mainComponentName)
                }
            };
        }),
        pages: guidePages.map((page) => ({
            name: page.name,
            path: page.fullPath || page.name,
            title: page.title,
            description: page.description,
            sections: page.sections.map((section) => ({
                id: section.id,
                label: section.label,
                description: section.description,
                examples: section.examples
            }))
        }))
    };

    const outputPath = path.join(OUTPUT_DIR, 'components.json');

    fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`✓ Generated JSON output: ${outputPath}`);

    // Also write to MCP data directory
    if (!fs.existsSync(MCP_DATA_DIR)) {
        fs.mkdirSync(MCP_DATA_DIR, { recursive: true });
    }

    const mcpOutputPath = path.join(MCP_DATA_DIR, 'components.json');

    fs.writeFileSync(mcpOutputPath, JSON.stringify(output, null, 2), 'utf-8');
    console.log(`✓ Generated JSON output: ${mcpOutputPath}`);

    return output;
}

/**
 * Generate Markdown output for AI context
 */
function generateMarkdownOutput(components, apiDocs, guidePages = []) {
    let markdown = '# PrimeVue Documentation\n\n';

    markdown += `Generated: ${new Date().toISOString().split('T')[0]}\n\n`;
    markdown += '---\n\n';

    // Guide Pages Section
    if (guidePages.length > 0) {
        markdown += '# Guide Pages\n\n';

        for (const page of guidePages) {
            markdown += `# ${page.title}\n\n`;

            if (page.description) {
                markdown += `${page.description}\n\n`;
            }

            for (const section of page.sections) {
                markdown += `## ${section.label}\n\n`;

                if (section.description) {
                    markdown += `${section.description}\n\n`;
                }

                if (section.examples) {
                    if (section.examples.basic) {
                        markdown += '```vue\n';
                        markdown += section.examples.basic;
                        markdown += '\n```\n\n';
                    }
                }
            }

            markdown += '---\n\n';
        }
    }

    // Components Section
    markdown += '# Components\n\n';

    for (const comp of components) {
        markdown += `# ${comp.title}\n\n`;
        markdown += `${comp.description}\n\n`;

        // Add sections
        for (const section of comp.sections) {
            markdown += `## ${section.label}\n\n`;

            if (section.description) {
                markdown += `${section.description}\n\n`;
            }

            if (section.examples) {
                if (section.examples.basic) {
                    markdown += '**Basic Usage:**\n\n';
                    markdown += '```vue\n';
                    markdown += section.examples.basic;
                    markdown += '\n```\n\n';
                }

                if (section.examples.composition && section.id !== 'basic') {
                    markdown += '<details>\n<summary>Composition API Example</summary>\n\n';
                    markdown += '```vue\n';
                    markdown += section.examples.composition;
                    markdown += '\n```\n';
                    markdown += '</details>\n\n';
                }

                if (section.examples.data) {
                    markdown += '**Sample Data:**\n\n';
                    markdown += '```json\n';
                    markdown += section.examples.data;
                    markdown += '\n```\n\n';
                }
            }
        }

        // Add API documentation
        markdown += generateApiSection(apiDocs, comp.name);

        // Add Pass Through Options
        markdown += generatePTSection(apiDocs, comp.name);

        // Add Theming
        markdown += generateThemingSection(apiDocs, comp.name);

        markdown += '---\n\n';
    }

    const outputPath = path.join(OUTPUT_DIR, 'llms-full.txt');

    fs.writeFileSync(outputPath, markdown, 'utf-8');
    console.log(`✓ Generated Markdown output: ${outputPath}`);

    return markdown;
}

/**
 * Generate individual component markdown files
 */
function generateIndividualMarkdownFiles(components, apiDocs) {
    const componentsDir = path.join(OUTPUT_DIR, 'components');

    if (!fs.existsSync(componentsDir)) {
        fs.mkdirSync(componentsDir, { recursive: true });
    }

    for (const comp of components) {
        let markdown = `# ${comp.title}\n\n`;

        markdown += `${comp.description}\n\n`;

        const importSection = comp.sections.find((s) => s.id === 'import');

        if (importSection && importSection.examples && importSection.examples.basic) {
            markdown += '## Import\n\n';
            markdown += '```javascript\n';
            markdown += importSection.examples.basic;
            markdown += '\n```\n\n';
        }

        for (const section of comp.sections) {
            if (section.id === 'import') continue;

            markdown += `## ${section.label}\n\n`;

            if (section.description) {
                markdown += `${section.description}\n\n`;
            }

            if (section.examples) {
                if (section.examples.basic) {
                    markdown += '```vue\n';
                    markdown += section.examples.basic;
                    markdown += '\n```\n\n';
                }

                if (section.examples.composition && section.id !== 'basic') {
                    markdown += '<details>\n<summary>Composition API Example</summary>\n\n';
                    markdown += '```vue\n';
                    markdown += section.examples.composition;
                    markdown += '\n```\n';
                    markdown += '</details>\n\n';
                }
            }
        }

        // Add API documentation (without related components for individual files)
        markdown += generateApiSection(apiDocs, comp.name, false);

        // Add Pass Through Options
        markdown += generatePTSection(apiDocs, comp.name);

        // Add Theming
        markdown += generateThemingSection(apiDocs, comp.name);

        const outputPath = path.join(componentsDir, `${comp.name}.md`);

        fs.writeFileSync(outputPath, markdown, 'utf-8');
    }

    console.log(`✓ Generated ${components.length} individual markdown files`);
}

// Guide/documentation pages (non-component pages)
// Use format: 'pagename' for direct pages, or 'path/to/page' for nested pages
const GUIDE_PAGES = [
    'introduction',
    'configuration',
    'theming',
    'styled',
    'unstyled',
    'passthrough',
    'icons',
    'customicons',
    'forms',
    'autoimport',
    'cdn',
    'laravel',
    'nuxt',
    'vite',
    'designer',
    'tailwind',
    'uikit',
    'contribution',
    'setup',
    'llms',
    'mcp',
    'guides/accessibility',
    'guides/animations',
    'guides/dynamicimports',
    'guides/migration/v4',
    'guides/rtl'
];

/**
 * Get page metadata from pages directory
 */
function getPageMetadata(pageName) {
    // Handle nested paths like 'guides/accessibility' or 'guides/migration/v4'
    let pagePath = path.join(PAGES_DIR, pageName, 'index.vue');

    // Check nested pages (like theming/styled, theming/unstyled)
    if (!fs.existsSync(pagePath)) {
        // Try to find in theming subdirectory
        pagePath = path.join(PAGES_DIR, 'theming', pageName, 'index.vue');
    }

    if (!fs.existsSync(pagePath)) {
        return null;
    }

    // Get the simple name for output file (last segment of path)
    const simpleName = pageName.includes('/') ? pageName.split('/').pop() : pageName;

    const content = fs.readFileSync(pagePath, 'utf-8');

    // Extract h1 content (preferred for title) - handles plain text h1
    const h1Match = content.match(/<h1>([^<{]+)<\/h1>/i);

    // Extract title from Head as fallback
    const titleTagMatch = content.match(/<Title>([^<]+)<\/Title>/i) || content.match(/title="([^"]+)"/);

    // Extract description from Meta tag
    const metaDescMatch = content.match(/<Meta[^>]*description[^>]*content="([^"]+)"/);

    // Also try to get description from the <p> inside doc-intro (more accurate for guide pages)
    // Use a regex that captures content including nested HTML tags, then strip tags
    const introDescMatch = content.match(/<div class="doc-intro">[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i);

    // For DocComponent pages, get from props
    const descPropMatch = content.match(/description="([^"]+)"/);
    const headerPropMatch = content.match(/header="([^"]+)"/);

    // Extract docs array to find sections
    const docsMatch = content.match(/docs:\s*\[([\s\S]*?)\]\s*[,}]/);
    let sections = [];

    if (docsMatch) {
        const docsContent = docsMatch[1];
        // Match both flat sections and nested children
        const sectionMatches = docsContent.matchAll(/{\s*id:\s*['"]([^'"]+)['"]\s*,\s*label:\s*['"]([^'"]+)['"]/g);

        for (const match of sectionMatches) {
            sections.push({
                id: match[1],
                label: match[2]
            });
        }
    }

    // Prefer h1 content, then header prop, then title tag (cleaned)
    let title = pageName;

    if (h1Match && h1Match[1].trim()) {
        title = h1Match[1].trim();
    } else if (headerPropMatch) {
        title = headerPropMatch[1];
    } else if (titleTagMatch) {
        title = (titleTagMatch[1] || '').replace(' - PrimeVue', '').trim();
    }

    // Prefer intro paragraph, then meta description, then description prop
    let description = '';

    if (introDescMatch && introDescMatch[1].trim()) {
        // Strip HTML tags and normalize whitespace
        description = introDescMatch[1]
            .replace(/<[^>]+>/g, '')
            .replace(/\s+/g, ' ')
            .trim();
    } else if (metaDescMatch) {
        description = metaDescMatch[1];
    } else if (descPropMatch) {
        description = descPropMatch[1];
    }

    return {
        name: pageName,
        simpleName: simpleName,
        title: title,
        description: description,
        header: h1Match ? h1Match[1].trim() : title,
        sections
    };
}

/**
 * Process a guide/documentation page
 */
function processGuidePage(pageName) {
    const metadata = getPageMetadata(pageName);

    if (!metadata) {
        return null;
    }

    // Find doc directory - handle nested paths like 'guides/accessibility'
    let docDir = path.join(DOCS_DIR, pageName);

    // Check nested paths (like theming/styled)
    if (!fs.existsSync(docDir)) {
        docDir = path.join(DOCS_DIR, 'theming', pageName);
    }

    if (!fs.existsSync(docDir)) {
        // Some pages might not have separate doc folders
        return {
            name: metadata.simpleName, // Use simple name for output file
            fullPath: pageName, // Keep full path for reference
            title: metadata.title,
            description: metadata.description,
            sections: []
        };
    }

    const page = {
        name: metadata.simpleName, // Use simple name for output file
        fullPath: pageName, // Keep full path for reference
        title: metadata.title,
        description: metadata.description,
        sections: []
    };

    // Process doc files recursively
    function processDocDir(dir, prefix = '') {
        const entries = fs.readdirSync(dir);

        for (const entry of entries) {
            const entryPath = path.join(dir, entry);
            const stat = fs.statSync(entryPath);

            if (stat.isDirectory()) {
                // Recurse into subdirectories
                processDocDir(entryPath, entry + '/');
            } else if (entry.endsWith('.vue') && entry.includes('Doc')) {
                const sectionId = entry.replace('Doc.vue', '').toLowerCase();
                const docData = parseVueDocFile(entryPath);

                if (docData.description || docData.codeExamples) {
                    const sectionInfo = metadata.sections.find((s) => s.id === sectionId);

                    page.sections.push({
                        id: prefix + sectionId,
                        label: sectionInfo
                            ? sectionInfo.label
                            : entry
                                  .replace('Doc.vue', '')
                                  .replace(/([A-Z])/g, ' $1')
                                  .trim(),
                        description: docData.description,
                        examples: docData.codeExamples
                    });
                }
            }
        }
    }

    processDocDir(docDir);

    return page;
}

/**
 * Get all guide pages
 */
function getAllGuidePages() {
    const pages = [];

    for (const pageName of GUIDE_PAGES) {
        const page = processGuidePage(pageName);

        if (page) {
            pages.push(page);
        }
    }

    return pages;
}

/**
 * Generate individual guide page markdown files
 */
function generateGuideMarkdownFiles(pages) {
    const pagesDir = path.join(OUTPUT_DIR, 'pages');

    if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
    }

    for (const page of pages) {
        let markdown = `# ${page.title}\n\n`;

        if (page.description) {
            markdown += `${page.description}\n\n`;
        }

        for (const section of page.sections) {
            markdown += `## ${section.label}\n\n`;

            if (section.description) {
                markdown += `${section.description}\n\n`;
            }

            if (section.examples) {
                if (section.examples.basic) {
                    markdown += '```vue\n';
                    markdown += section.examples.basic;
                    markdown += '\n```\n\n';
                }

                if (section.examples.composition) {
                    markdown += '<details>\n<summary>Composition API Example</summary>\n\n';
                    markdown += '```vue\n';
                    markdown += section.examples.composition;
                    markdown += '\n```\n';
                    markdown += '</details>\n\n';
                }
            }
        }

        const outputPath = path.join(pagesDir, `${page.name}.md`);

        fs.writeFileSync(outputPath, markdown, 'utf-8');
    }

    console.log(`✓ Generated ${pages.length} guide/page markdown files`);
}

/**
 * Update llms.txt to include guide pages
 */
function generateLlmsTxtWithGuides(components, guidePages) {
    let content = '# PrimeVue\n\n';

    // Guides section
    content += '## Guides\n\n';

    for (const page of guidePages) {
        // Use fullPath for URL if available, otherwise use name
        const urlPath = page.fullPath || page.name;

        if (page.description) {
            content += `- [${page.title}](https://primevue.org/${urlPath}): ${page.description}\n`;
        } else {
            content += `- [${page.title}](https://primevue.org/${urlPath})\n`;
        }
    }

    content += '\n';

    // Components section
    content += '## Components\n\n';
    const sorted = [...components].sort((a, b) => a.title.localeCompare(b.title));

    for (const comp of sorted) {
        content += `- [${comp.title}](https://primevue.org/${comp.name}): ${comp.description}\n`;
    }

    const outputPath = path.join(OUTPUT_DIR, 'llms.txt');

    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log(`✓ Generated llms.txt: ${outputPath}`);
}

/**
 * Main execution
 */
function main() {
    console.log('🚀 Building PrimeVue LLM Documentation (Enhanced)...\n');

    console.log('📖 Parsing component documentation...');
    const components = getAllComponents();

    console.log(`   Found ${components.length} components\n`);

    console.log('📄 Parsing guide pages...');
    const guidePages = getAllGuidePages();

    console.log(`   Found ${guidePages.length} guide pages\n`);

    console.log('📚 Loading API documentation...');
    const apiDocs = loadApiDocs();

    console.log(`   Loaded API docs for ${Object.keys(apiDocs).length} components\n`);

    console.log('✨ Generating outputs...\n');
    generateJsonOutput(components, apiDocs, guidePages);
    generateMarkdownOutput(components, apiDocs, guidePages);
    generateLlmsTxtWithGuides(components, guidePages);
    generateIndividualMarkdownFiles(components, apiDocs);
    generateGuideMarkdownFiles(guidePages);

    console.log('\n✅ Enhanced LLM documentation generation complete!');
    console.log(`\nOutput directory: ${OUTPUT_DIR}`);
    console.log('   - components.json (for MCP server with full API data)');
    console.log('   - llms-full.txt (full documentation with Props, Slots, Emits, PT, Theming)');
    console.log('   - llms.txt (index file with guides and components)');
    console.log('   - components/*.md (individual component files with complete API)');
    console.log('   - pages/*.md (guide/documentation pages)');
}

main();
