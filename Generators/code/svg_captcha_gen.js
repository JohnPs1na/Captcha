var svgCaptcha = require('svg-captcha');
const fs = require('fs')

for (let i = 0;i<100;i++){

    var captcha = svgCaptcha.create();
    fs.writeFile(`./../captchas/svg_captcha/labels/${captcha.text}.txt`, captcha.text,(err) =>{
        if (err) throw err
    })

    fs.writeFile(`./../captchas/svg_captcha/images/${captcha.text}.txt`, captcha.data,(err) =>{
        if (err) throw err
    })
}