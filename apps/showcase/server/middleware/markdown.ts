import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
    const url = event.node.req.url || '';

    if (!url.endsWith('.md')) {
        return;
    }

    // Match both single segment (/button.md) and nested paths (/theming/styled.md)
    const match = url.match(/^\/(.+)\.md$/);

    if (!match) {
        return;
    }

    const fullPath = match[1];
    // Get the last segment for nested paths (e.g., "theming/styled" -> "styled")
    const pageName = fullPath.includes('/') ? fullPath.split('/').pop() : fullPath;

    if (!pageName) {
        return;
    }

    // Check components folder first
    let filePath = path.resolve(`./public/llms/components/${pageName}.md`);

    // If not found in components, check pages folder (for guides)
    if (!fs.existsSync(filePath)) {
        filePath = path.resolve(`./public/llms/pages/${pageName}.md`);
    }

    if (!fs.existsSync(filePath)) {
        throw createError({
            statusCode: 404,
            statusMessage: `Documentation not found for: ${pageName}`
        });
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    event.node.res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    event.node.res.setHeader('Cache-Control', process.env.NODE_ENV === 'production' ? 'public, max-age=300' : 'no-cache');
    event.node.res.end(content);
});
