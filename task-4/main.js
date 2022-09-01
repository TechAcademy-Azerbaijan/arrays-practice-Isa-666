const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let num = result.input.split(',') //0,1,-2,1,0,0,3

    let res = num.filter((x, i) => num.indexOf(x) === i);

    console.log(res.join('\n'));
  
});
