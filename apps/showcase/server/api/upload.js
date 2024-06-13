export default defineEventHandler((event) => {
    return {
        headers: { 'Access-Control-Allow-Origin': '*' },
        statusCode: 200,
        statusMessage: 'Fake Upload Process'
    };
});
