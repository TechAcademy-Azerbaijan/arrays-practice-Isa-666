const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
      let num = result.input.split(',')
    let count = 0;
    let sum = 0;
    let max = parseInt(num[0]);
    let max2 = parseInt(num[0])
    for (let i = 0; i < num.length; i++) {
        let element = parseInt(num[i]);
        if (element > max) {
            max = element;


        }

    }
    for (let j = 0; j < num.length; j++) {
        const element2 = parseInt(num[j]);
        if (element2 === max) {
            count++;
        }
    }
    for (let j = 0; j < num.length; j++) {
        let element3 = parseInt(num[j]);
        if (element3 > max2 && element3 < max || element3 === max) {
            max2 = element3
        }
    }
    sum = max + max2;
    console.log(sum);
    console.log(count);
  
});
