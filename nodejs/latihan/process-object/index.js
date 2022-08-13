// var process = require('process'); // if you want to import module process (not needed)

const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[2]
const environment = process.env.NODE_ENV

for(let i = 0; i <= 10000; i++) {
    // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage();

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage['heapUsed']} naik ke ${currentMemoryUsage['heapUsed']}`);

// run (Windows CMD): SET NODE_ENV=development && node index.js <Nama Anda>
// run (Windows PWSH): $env:NODE_ENV='development' & node index.js <Nama Anda>