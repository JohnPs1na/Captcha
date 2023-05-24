digits = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => i.toString())

const upper_alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lower_alpha = upper_alpha.map(x => x.toLowerCase()) 

const alphabet = ['x',...digits,...upper_alpha,...lower_alpha]

var svgCaptcha = require('svg-captcha');
const fs = require('fs')

options = {
    width:40,
    height:40,
}
for (let i = 1;i<alphabet.length;i++){

    x = svgCaptcha(alphabet[i],options)
    fs.writeFile(`./../captchas/svg_captcha/letters/${alphabet[i]}.txt`, x,(err) =>{
        if (err) throw err
    })
}