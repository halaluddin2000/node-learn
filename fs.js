const fs = require("fs");

// fs.readFile('./hello-world.txt', { encoding: 'utf-8' }, (err, data) => {
//     if (err) {
//         console.log("something went wrong", err);
//         return;
//     }
//     fs.writeFile("./hello.txt", data, { encoding: 'utf-8' }, (err) => {
//         if (err) {
//             console.log('Something went wrong', err);
//             return;
//         }
//         console.log('written succesfuly')
//     })
// })


const readStream = fs.createReadStream('./hello-world.txt', { encoding: 'utf-8' })
const writeStream = fs.createWriteStream('./hello.txt', { encoding: 'utf-8' });

readStream.on("data", (data) => {
    console.log(data);

    writeStream.write(data, (err) => {
        if (err) {
            throw Error("Error", err)
        }
    })
})