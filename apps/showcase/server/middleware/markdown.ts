import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
    const url = event.node.req.url || '';

    if (!url.endsWith('.md')) {
        return;
    }

    const match = url.match(/^\/([^\/]+)\.md$/);

    if (!match) {
        return;
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

    event.node.res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    event.node.res.setHeader('Cache-Control', process.env.NODE_ENV === 'production' ? 'public, max-age=300' : 'no-cache');
    event.node.res.end(content);
});
