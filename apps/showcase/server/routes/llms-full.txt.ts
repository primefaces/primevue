import fs from 'fs';
import path from 'path';

export default defineEventHandler(() => {
    const filePath = path.resolve('./public/llms/components.md');

    if (!fs.existsSync(filePath)) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Full LLM documentation not found. Run build:llmdocs to generate it.'
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
