const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let num=result.input.split(',');//9,5,-7,-7,5,-9,-4
  
let count=0;

for (let i = 1; i < num.length-1; i++) {

  if (num[i]>num[i-1] && num[i]>num[i+1]) {
    count++
  }

}
console.log(count);

});
