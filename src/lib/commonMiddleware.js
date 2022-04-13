import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpErrorHandler from '@middy/http-error-handler';

export default handler => middy(handler)
.use([
    httpJsonBodyParser(),//parses json body after every request
    httpEventNormalizer(),//adjusts api gateway objects, prevents non existing object in path and query parameters
    httpErrorHandler()//makes error handling easier
]);