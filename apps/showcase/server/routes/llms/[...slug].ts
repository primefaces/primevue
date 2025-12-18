import { createError, defineEventHandler, setHeader, H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    const slugParam = event.context.params?.slug;

    if (!slugParam) {
        throw createError({
            statusCode: 404,
            message: 'Not found'
        });
    }

    // slug is an array in catch-all routes, join it to get the path
    let slug = Array.isArray(slugParam) ? slugParam.join('/') : slugParam;

    // Add .md extension if no extension present (since rewrite strips it)
    // But don't add .md to .txt files which should be served as-is
    if (!slug.endsWith('.md') && !slug.endsWith('.txt')) {
        slug = slug + '.md';
    }

    // Use Nuxt's useStorage to access server assets
    const storage = useStorage('assets:server');

    try {
        const content = await storage.getItem(`llms/${slug}`);

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
    } catch (error: any) {
        throw createError({
            statusCode: 404,
            message: `File not found: ${slug}`
        });
    }
});
