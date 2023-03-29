from captcha.image import ImageCaptcha 
import random 
import string 


image = ImageCaptcha()

for i in range(1,11,1):
    label = ''.join(random.choices(string.ascii_lowercase + '0123456789',k=4))

    data = image.generate(label)

    image.write(label, f'./captchas/lepture_captcha/images/{i}.png')

    with open(f'./captchas/lepture_captcha/labels/{i}.txt','w') as g:
        g.write(label)