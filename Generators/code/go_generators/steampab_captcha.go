package main

import (
	"fmt"
	"os"
)

func CreateFile(filepath string, captcha_name string) {
	file, err := os.Create(filepath)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	defer file.Close()

	_, writeErr := file.WriteString(captcha_name)
	if writeErr != nil {
		fmt.Println(err.Error())
		return
	}
}

func CreateCaptcha() {

}

func main() {
	CreateFile("./test/test.txt", "captcha1")
}
