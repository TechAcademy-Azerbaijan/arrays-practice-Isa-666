const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
 
      let num = result.input.split(',') //1,6,2,6,3
    
    let sum = 0;
    let index=num.length;
    let sum_division;

for (let i = 0; i < num.length; i++) {
    const element = parseInt(num[i]);
    sum+=element
}
sum_division=parseInt(sum/index)

let sum_second=0;
  let count=0;

  for (let j = 0; j < num.length; j++) {
    const element2 = parseInt(num[j]);
    if (element2>sum_division) {
       sum_second+=element2
        count++
    }
  }
  console.log(sum_second);
  console.log(count);
});
