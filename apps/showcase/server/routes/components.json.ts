import fs from 'fs';
import path from 'path';

export default defineEventHandler((event) => {
    const filePath = path.resolve('./public/llms/components.json');

    if (!fs.existsSync(filePath)) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Components JSON data not found. Run build:llmdocs to generate it.'
        });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);

    // Set cache control header
    setHeader(event, 'Cache-Control', process.env.NODE_ENV === 'production' ? 'public, max-age=300' : 'no-cache');

    return data;
});
