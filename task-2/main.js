const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let num=result.input.split(',');//9,5,-7,-7,5,-9,-4
  
let count=0;

for (let i = 0; i < num.length; i=i+2) {
    const element = parseInt(num[i+2]);
    const element2=parseInt(num[i+4])
    if (element>element2) {
        count++;
    }
}
console.log(count);

});
