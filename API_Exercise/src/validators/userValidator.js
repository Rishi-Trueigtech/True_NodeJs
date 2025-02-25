const Ajv = require('ajv');

const ajv = new Ajv();

const userSignupSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 8 },
        passwordConfirm: { type: 'string', const: { $data: '1/password' } },
    },
    required: ['name', 'email', 'password', 'passwordConfirm'],
};

const validateUser_Signup = ajv.compile(userSignupSchema);

module.exports = { validateUser_Signup };