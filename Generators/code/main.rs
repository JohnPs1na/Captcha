use captcha_rs::CaptchaBuilder;
use rand::Rng;
use std::fs::File;
use std::io::prelude::*;

fn main() {
	
    let range = 1..11;

    let lengths = vec![4,5];
    let modes = vec![true,false];
    let complexities = vec![1,3,5,7];
    let compressions = vec![20,40,60,80];

    let mut rng = rand::thread_rng();
    
    for i in range{
        
        let mut label_file_path : String = "./../../../captchas/samir_captcha/labels/".to_string() + &i.to_string() + ".txt";
        let mut image_file_path : String = "./../../../captchas/samir_captcha/images/".to_string() + &i.to_string() + ".txt";

        let mut label_file = File::create(label_file_path).expect("cant open the label file");
        let mut image_file = File::create(image_file_path).expect("cant open the image file");


        let length = lengths[rng.gen_range(0..lengths.len())];
        let mode = modes[rng.gen_range(0..modes.len())];
        let complexity = complexities[rng.gen_range(0..complexities.len())];
        let compression = compressions[rng.gen_range(0..compressions.len())];

        let captcha = CaptchaBuilder::new()
            .length(length)
            .width(200)
            .height(150)
            .dark_mode(mode)
            .complexity(complexity) // min: 1, max: 10
            .compression(compression) // min: 1, max: 99
            .build();
	
        label_file.write_all(captcha.text.as_bytes()).expect("unable to write data to label file");
        image_file.write_all(captcha.to_base64().as_bytes()).expect("unable to write data to image file");

        drop(label_file);
        drop(image_file);
    }

	
}