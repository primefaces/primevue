import fs from 'fs';
import path from 'path';

export default defineEventHandler(() => {
    const filePath = path.resolve('./public/llms/components.json');

    if (!fs.existsSync(filePath)) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Component JSON data not found. Run build:llmdocs to generate it.'
        });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);

    return data;
});
