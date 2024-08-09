const z = require("zod");
const schema = z.string().email();

const response = schema.parse("sadasyuidgbu@gmail.com");
console.log(response.errors)