import fs from 'fs'

// Init fake 'document' to simulate DOM for tests
fs.readFile('./test/example2D.html', 'utf8', (err,data) => {
    if (err) {
        console.error(err)
        process.exit()
    }
    require('jsdom-global')(data)
});
