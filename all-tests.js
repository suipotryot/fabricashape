/**
 * This file simplifies the use of webpack for testing.
 * It loads every test file in ./tests folder and exports its content.
 * This way, the command `make tests` finds them all.
 */
context = require.context('./tests', true, /.js$/);
context.keys().forEach(context);
module.exports = context;
