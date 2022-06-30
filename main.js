const formElem = document.querySelector('form');
const nameElem = document.querySelector('#name');
const userNameElem = document.querySelector('#username');
const emailElem = document.querySelector('#email');
const passwordElem = document.querySelector('#password');
const webElem = document.querySelector('#web');
const generatePassElem = document.querySelector('.genPass');
const genPassBtn = document.querySelector('.generatePass');
const copyPassBtn = document.querySelector('.copyPass');
const allErrorElem = document.querySelector('.allError');
const nameErrElm = document.querySelector('.nameErr');
let userNameErr = document.querySelector('.userErr');
const emailErr = document.querySelector('.emailErr');
const passwordErr = document.querySelector('.passErr');
const webErr = document.querySelector('.webErr');
const copyMsg = document.querySelector('.successMsg');

const regExSpecialChar = /[ `!@#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/? ~]/gi
const emailValRegex = /\S+@\S+\.\S+/ig;
const passValRegex = /[A-Za-z0-9_./@]/ig;
const webValRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

function gettingAllValue(){
    const nameValue = nameElem.value;
    const userNameValue = userNameElem.value;
    const emailValue = emailElem.value;
    const passValue = passwordElem.value;
    const webValue = webElem.value;

    return{
        name : nameValue,
        username : userNameValue, 
        email : emailValue,
        password : passValue,
        web : webValue
    }

    // console.log(nameValue);

    // allValValid(nameValue, userNameValue, emailValue, passValue, webValue);
    // resetInput(nameValue, userNameValue, emailValue, passValue, webValue);
}

function allValValid(name, username, email, password, webadd){

    // name field
    if(!name){
        nameErrElm.textContent = 'Please write your name';
        nameErrElm.style.backgroundColor = 'red';
        nameElem.style.border = '1px solid red';

        // setTimeout( ()=> {
        //     nameErrElm.style.display = 'none';
        // }, 4000)
    }else{
        nameElem.style.border = '1px solid lightgray';
    } 
    if(regExSpecialChar.test(name) && /0-9/.test(name)){
        nameErrElm.textContent = 'Remove reguler expression';
        nameErrElm.style.color = 'red';
        console.log('name');
    }else{
        nameErrElm.textContent = ' '
    }
    if(name.length<8){
        nameErrElm.textContent = 'Name must getter than 8 letter'
        nameErrElm.style.color = 'red';
    }else{
        nameErrElm.textContent = ' ';
    }

    // username field validate
    if(!username){
        userNameErr.textContent = 'Please write your username';
        userNameErr.style.backgroundColor = 'red';

        // setTimeout( ()=> {
        //     userNameErr.style.display = 'none';
        // }, 4000)
    }else{
        if(username.length < 5){
            userNameErr.textContent = 'Username must be 5 character';
            userNameErr.style.color = 'red';
        }else{
            userNameErr.textContent = ' ';
        }
    }
    

    // email validate field
    if(!email){
        emailErr.textContent = 'Please write your email';
        emailErr.style.backgroundColor = 'red';

        // setTimeout( ()=> {
        //     emailErr.style.display = 'none';
        // }, 4000)
    }else{
        if(emailValRegex.test(email)){
            emailErr.textContent = '';
            
        }else{
            console.log(emailValRegex.test(email));
            emailErr.textContent = 'wrong email form';
            emailErr.style.backgroundColor = 'red';
        }
    }
    


    // password validate field
    
    if(!password){
        passwordErr.textContent = 'Give a password';
        passwordErr.style.backgroundColor = 'red';

        // setTimeout( ()=> {
        //     passwordErr.style.display = 'none';
        // }, 4000)
    }else{
              
        if(!passValRegex.test(password)){
            passwordErr.textContent = 'Give a strong password';
            passwordErr.style.color = 'red';
        }else{
            passwordErr.textContent = '';
        }
    }
    
    

    if(!webadd){
        webErr.textContent = 'Give a website URL';
        webErr.style.backgroundColor = 'red';

        // setTimeout( ()=> {
        //     webErr.style.display = 'none';
        // }, 4000)
    }else{

        if(!webValRegex.test(webadd)){
            webErr.textContent = 'Enter valid web address';
            webErr.style.color = 'red';
        }else{
            webErr.textContent = '';
        }
    }
    

    
}

function resetInput(name, username, email, password, webadd){
    if(name && username && email && password && webadd){
        nameElem.value = '';
        userNameElem.value = '';
        emailElem.value = '';
        passwordElem.value = '';
        webElem.value = '';
    }
    
}

formElem.addEventListener('submit', e => {
    e.preventDefault();

    const {name, username, email, password, web} = gettingAllValue();
    console.log(name, username, email, password, web);
    // console.log(gettingAllValue());
    // console.log(name);
    
    allValValid(name, username, email, password, web);
    

    resetInput(name, username, email, password, web);
})

genPassBtn.addEventListener('click', ()=> {
    const stronPass = generateStrongPass();

    generatePassElem.textContent = stronPass;
    generatePassElem.classList.add('genPassStyle');

    copyPassBtn.style.display = 'inline-block';
    
    // console.log(copyText);
    
    
})

copyPassBtn.addEventListener('click', ()=> {
    let copyText = generatePassElem.textContent;
    navigator.clipboard.writeText(copyText).then( ()=> {
        copyMsg.textContent = "Copied";
        setTimeout(()=> {
            copyMsg.textContent = '';
        },4000)
    })
     
})


function randomSelect(firstchar, secondcar, thirdchar, fourthChar, fifthchar, sixthchar){
    const firstRand = Math.floor((Math.random()*firstchar.length+0));
    const secRand = Math.floor((Math.random()*secondcar.length) + 0);
    const thirdRand = Math.floor((Math.random()*thirdchar.length) + 0);
    const fourtRand = Math.floor((Math.random()*fourthChar.length) + 0);
    const fifthRand = Math.floor((Math.random()*fifthchar.length) + 0);
    const sixthRand = Math.floor((Math.random()*sixthchar.length) + 0);

    const randnum1 = firstchar[firstRand];
    const randnum2 = secondcar[secRand];
    const randnum3 = thirdchar[thirdRand];
    const randnum4 = fourthChar[fourtRand];
    const randnum5 = fifthchar[fifthRand];
    const randnum6 = sixthchar[sixthRand];
    // console.log(randnum1, randnum2);
    return{
        randnum1,
        randnum2,
        randnum3,
        randnum4,
        randnum5,
        randnum6,
    }
}

function generateStrongPass(){
    const allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const captalLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U' , 'V', 'W', 'X', 'Y', 'Z'];
    const smallLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const symbol = ['@','#','$','%'];
    const similerCharacter = ['i', 'l', '1', 'L', 'o', '0', 'O' ];
    const ambigiousCharacter = ['{', '}', '[', ']', '(', ')', '/', '\','<'' ,'>'];

//    const {first, sec, third, fourth, fifth, sixth}= randomSelect(allNum, captalLetter, smallLetter, symbol, similerCharacter, ambigiousCharacter);
   
//     console.log(first, sec, third);

    const {randnum1, randnum2, randnum3, randnum4, randnum5, randnum6} = randomSelect(allNum, captalLetter, smallLetter, symbol, similerCharacter, ambigiousCharacter);
    // console.log(randnum1, randnum2, randnum3);

    let stronPass = randnum1 + randnum2 + randnum3 + randnum4 + randnum5 + randnum6 + randnum4 + randnum6;
    // console.log(stronPass);
    return stronPass;

    //    const result = first + sec + third + fourth + fifth + sixth;
    //    console.log(result);
    // const arr = [first, sec, third, fourth, fifth, sixth];
    // console.log(arr);

}