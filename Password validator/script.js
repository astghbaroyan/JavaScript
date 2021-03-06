/**Astghik Baroyan */
'use strict'

const inputUserName = document.getElementById('userName')
const inputPassword = document.getElementById('password');

const styleGreen = "background: rgba(102,255,102, 0.2); border-color: rgb(102,255,102); color: lightgreen;";
const styleRed = "background: rgba(231, 76, 60, 0.2); border-color: #e74c3c; color: #ff3f34;";
const letterUserName =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Z','Y','Z'];
const letterPassword = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Z','Y','Z','Ա','Բ','Գ','Դ','Ե','Զ','Է','Ը','Թ','Ժ','Ի','Լ','Խ','Ծ','Կ','Հ','Ձ','Ղ','Ճ','Մ','Յ','Ն','Շ','Ո','Չ','Պ','Ջ','Ռ','Ս','Վ','Տ','Ր','Ց','ՈՒ','Փ','Ք','և','Օ','Ֆ','А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const special = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','[',']','{','}',';',':','"',"'",'<','>',',','/','?'];



const minUN = document.getElementById('minUN');
const maxUN = document.getElementById('maxUN');


const minPas = document.getElementById('minPas');
const maxPas = document.getElementById('maxPas');
const numPas = document.getElementById('numPas');
const specialPas = document.getElementById('specialPas');
const spacePas = document.getElementById('spacePas');
const keyWord = document.getElementById('keyWord');

 

function inputProcessUserName (){
    if ( inputUserName.value.length >= 3 ){
        minUN.style = styleGreen;
    
       if ( inputUserName.value.length <= 16 ){
        maxUN.style = styleGreen;
       } else {
           maxUN.style = styleRed;
       }
    } else {
        minUN.style = styleRed;
        maxUN.style = styleRed;
    }
    
   let smallUserName = [];
    let smaller = inputUserName.value.toLowerCase();
        smallUserName = [...smallUserName,smaller];
    console.log(smallUserName);  
}


inputUserName.addEventListener('input',inputProcessUserName)

const inputProcessPassword = () => {
 
    let c = 0;
    let s = 0;
    let t = 0;
    if ( inputPassword.value.length >= 8 ){
        minPas.style = styleGreen;
    
       if ( inputPassword.value.length <= 16 ){
        maxPas.style = styleGreen;
       } else {
        maxPas.style = styleRed;
       }
    } else {
        minPas.style = styleRed;
        maxPas.style = styleRed;
    }
    for (let z of inputPassword.value){
        if ( z == ' ' ){
            t++;
        }
        if ( special.indexOf(z) !== -1){
            s++;
        }
        if ( number.indexOf(z) !== -1 ){
            c++;
        }
    }
    if ( c >= 1 ){
        numPas.style = styleGreen;
    } else {
        numPas.style = styleRed;
    }
    if ( s >= 1 ){
        specialPas.style = styleGreen;
    } else {
        specialPas.style = styleRed;
    }
    if ( t >= 1 ){
        spacePas.style = styleRed;
    } else {
        spacePas.style = styleGreen;
    }
    const keyword1 = inputPassword.value.includes(inputUserName.value);
    const keyword2 = inputPassword.value.includes(inputUserName.value.toLowerCase());
    if(keyword1 || keyword2){
        keyWord.style = styleRed;
    } else {
        keyWord.style = styleGreen;
    } 
   
    
}
inputPassword.addEventListener('input', inputProcessPassword)

