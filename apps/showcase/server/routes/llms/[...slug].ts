import { createError } from 'h3';
import { promises as fs } from 'fs';
import { join } from 'path';

export default defineEventHandler(async (event) => {
    const slug = event.context.params?.slug;

    if (!slug) {
        throw createError({
            statusCode: 404,
            message: 'Not found'
        });
    }

    // Try multiple possible paths for the file
    const possiblePaths = [
        join(process.cwd(), 'public', 'llms', slug),
        join(process.cwd(), '.output', 'public', 'llms', slug)
    ];

    let content: string | null = null;

    for (const filePath of possiblePaths) {
        try {
            content = await fs.readFile(filePath, 'utf-8');
            break;
        } catch {
            // Try next path
        }
    }

    if (!content) {
        throw createError({
            statusCode: 404,
            message: `File not found: ${slug}`
        });
    }

    // Set Content-Type to text/plain for ChatGPT compatibility
    setHeader(event, 'Content-Type', 'text/plain; charset=utf-8');
    setHeader(event, 'Cache-Control', 'public, max-age=3600');

    return content;
});
