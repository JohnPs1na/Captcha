var svgCaptcha = require('svg-captcha');
const fs = require('fs')

for (let i = 0;i<10;i++){

    var captcha = svgCaptcha.create();
    fs.writeFile(`./captchas/svg_captcha/labels/${i}.txt`, captcha.text,(err) =>{
        if (err) throw err
    })

    fs.writeFile(`./captchas/svg_captcha/images/${i}.txt`, captcha.data,(err) =>{
        if (err) throw err
    })
}