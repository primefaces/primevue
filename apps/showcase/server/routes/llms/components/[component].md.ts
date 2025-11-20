import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
    const component = getRouterParam(event, 'component');

    if (!component) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Component name is required'
        });
    }

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
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
});
