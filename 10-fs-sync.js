
const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);


//new file will be get created:result-sync.txt ,by writing data of First and second.txt in append mode
writeFileSync('./content/result-sync.txt',
`Here is the result : ${first} ,${second}`, //will read data from this two files
{ flag: 'a' }   //append content
)


console.log('done with this task');
console.log('starting the next one');