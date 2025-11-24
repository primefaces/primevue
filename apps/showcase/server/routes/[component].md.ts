import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
    // Extract component name from the URL path
    // URL will be like /button.md, we need to extract 'button'
    const url = event.node.req.url || '';
    const match = url.match(/^\/([^\/]+)\.md$/);

    if (!match) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid request format. Use /{component}.md'
        });
    }

    const component = match[1];

    const filePath = path.resolve(`./public/llms/components/${component}.md`);

    if (!fs.existsSync(filePath)) {
        throw createError({
            statusCode: 404,
            statusMessage: `Component documentation not found for: ${component}`
        });
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    return new Response(content, {
        headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            // Cache for 5 minutes in production, no cache in development
            'Cache-Control': process.env.NODE_ENV === 'production' ? 'public, max-age=300' : 'no-cache'
        }
    });
});
