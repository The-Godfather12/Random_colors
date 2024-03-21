const colorCode = document.getElementById('colorCode');
const colorBox = document.getElementById('color-box');
const copyHex = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const rgbcode = document.getElementById('rgbcode');

let color_code = '';

function GenerateBtn() {
    const HexChars ='0123456789ABCDEF'
    let hexColor = '#';

    for( let i = 0; i < 6; i++) {
        hexColor += HexChars[Math.floor(Math.random() * 16)]
    };

    colorBox.style.backgroundColor = hexColor;
    colorCode.innerHTML =hexColor;
    colorCode.style.color = hexColor;

    const colortext = colorBox.style.backgroundColor;
    rgbcode.innerHTML = colortext;
    rgbcode.style.color = colortext;

    
    }
    

