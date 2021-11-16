const fs = require('fs');

const readStream = fs.createReadStream('./blog3.txt');

const readStream.on('data', (chunk) => {
    console.log('------- NRE CHUNK -------');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);

});

readStream.pipe(writeStream);