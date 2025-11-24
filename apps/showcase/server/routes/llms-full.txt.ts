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
            // Cache for 5 minutes in production, no cache in development
            'Cache-Control': process.env.NODE_ENV === 'production' ? 'public, max-age=300' : 'no-cache'
        }
    });
});
