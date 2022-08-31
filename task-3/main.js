const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
     let num = result.input.split(',')//3,5,-7,7,5,-9,-4

let count=2
    let max = parseInt(num[0]);
    let min = parseInt(num[0]);

    for (let i = 0; i < num.length-1; i++) {
        let element1 = parseInt(num[i]);
        if (element1 > max) {
            max = element1;
        }
        for (let j = 0; j < num.length-1; j++) {
            const element2 = parseInt(num[j]);
            if (element2 < min) {
                min = element2
            }
        }
}
[num[3],num[5]]=[num[5],num[3]]
//[num[min],num[max]]=[num[max],num[min]]
  
    console.log(num.join('\n'));
  
});
