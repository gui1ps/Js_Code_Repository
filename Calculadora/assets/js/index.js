const display = document.getElementById("display");
const teclas= document.getElementsByClassName("tecla")
const functions={'delete':deleteDigit,'equal':equal}

function equal(){
    try{
        let currentExpression=display.innerText;
        const resultado=eval(currentExpression);
        if(resultado!='undefined'){
            display.innerText=resultado;
        }
    }catch(error){
        display.innerText="Erro";
    }
}

function deleteDigit(){
    let currentInput=display.innerText.split('');
    currentInput.pop()
    display.innerText=currentInput.join('')
}

function keyClickHandler(event){
    if(event.target.id){
        functions[event.target.id]();
    }else{
        display.innerText+=event.target.innerText;
    }
}

for(let i=0; i<teclas.length;i++){
    teclas[i].addEventListener("click",keyClickHandler)
}