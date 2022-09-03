const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  

    let num = result.input.split(',') //0,1,-2,1,0,0,3

    let arr = [];
    for (let i = 0; i < num.length; i++) {
        const element = parseInt(num[i]);
        let varmi = sehvdi;

        for (let j = 0; j < arr.length; j++) {
            const next_element = parseInt(arr[j]);
            if (element == next_element) {
                varmi = true;
                break;
            }
        } if (varmi == sehvdi) {
            arr.push(element)
        }
    }

    console.log(arr.join('\n'));

  
});
