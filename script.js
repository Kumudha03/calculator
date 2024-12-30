var expression = document.getElementById('expression');
var evaluation = document.getElementById('evaluation');
var btns = document.querySelectorAll('button');

for ( item of btns){
    item.addEventListener('click',(e)=>{
        btntext = e.target.textContent;
        if(btntext!=="=" && btntext!=="AC"){
            btntext = e.target.textContent;
         expression.value+=btntext;
         evaluation.value=eval(expression.value);
        };
    });
    
};

// function toAppend(e)  {
//         btntext = e.textContent;
//             expression.value += btntext;
//             evaluation.value=eval(expression.value);
           
    
//     };


// function toggleRow(){
//     var rows = document.querySelectorAll('.rows');
// var expand = document.querySelector('#expand');

//     rows[0].classList.toggle('expandDiv');
//     rows[1].classList.toggle('expandDiv');
//     expand.classList.toggle('rotate');
  
// };

// function sqrt(){
//     evaluation.value=Math.sqrt(expression.value);
// };

// function pi(){
//     evaluation.value=Math.PI(expression.value);
// };

// function pow(){
//     evaluation.value=Math.pow(expression.value.substring(0,expression.value.length-1),
//     expression.value.substring(-1));
//     evaluation.value=Math.pow(2,3);
// };

// function fact(){
//     evaluation.value=Math.fact(expression.value);
// };

// function deg(){
//     evaluation.value=Math.deg(expression.value);
// };

// function sin(){
//     evaluation.value="sin(";
// };

// function cos(){
//     evaluation.value=Math.cos(eval(expression.value));
// };

// function tan(){
//     expression.value="tan(";
//     evaluation.value=Math.tan();
// };

// function inv(){
//     evaluation.value=Math.inv(expression.value);
// };

// function e(){
//     evaluation.value=Math.E(expression.value);
// };

// function ln(){
//     evaluation.value=Math.ln(expression.value);
// };

// function log(){
//     evaluation.value=Math.log10(expression.value);
// };

function ac() {
    expression.value = " ";
    evaluation.value = " ";
};

function backspc() {
    expression.value = expression.value.substring(0, expression.value.length - 1);
    if(expression.value=='undefined'){
    evaluation.value = " ";}
};

function equals() {
    expression.value = evaluation.value;
    evaluation.value = " ";
    if(expression.value==" "){
        evaluation.value="";
    }
};
