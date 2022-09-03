const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {

    let num = result.input.split(',')//3,5,-7,7,5,-9,-4

    let max = parseInt(num[0]);
    let min = parseInt(num[0]);
let max_index=0
let min_index=0

    for (let i = 0; i < num.length-1; i++) {
        let element1 = parseInt(num[i]);
        if (element1 > max) {
            max = element1;
            max_index=i
        }
            if (element1 < min) {
                min = element1
                min_index=i
            }
        
}
[num[max_index],num[min_index]]=[num[min_index],num[max_index]]

  
    console.log(num.join(`\n`));
  
});
