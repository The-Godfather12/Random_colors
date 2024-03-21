const colorCode = document.getElementById('colorCode');
const colorBox = document.getElementById('color-box');
const copyHex = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const rgbcode = document.getElementById('rgbcode');
const H1= document.getElementById('h1')

let color_code = '';

function GenerateBtn() {
    const HexChars ='0123456789ABCDEF'
    let hexColor = '#';

    for( let i = 0; i < 6; i++) {
        hexColor += HexChars[Math.floor(Math.random() * 16)]
    };


    //hex codes
    colorBox.style.backgroundColor = hexColor;
    colorCode.innerHTML =hexColor;
    colorCode.style.color = hexColor;


    //rgb codes
    const colortext = colorBox.style.backgroundColor;
    rgbcode.innerHTML = colortext;
    rgbcode.style.color = colortext;

    //h1
    H1.style.color = hexColor;
    };

    //copy 
    function RGB() {
        const colortext =colorBox.style.backgroundColor;
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = colortext;
        tempInput.select();
        document.execCommand('copy')
        document.body.removeChild(tempInput);
        alert('color copied to clipboard: ' + colortext);
    }
    

