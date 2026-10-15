const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value
        .replace(/÷/g,"/")
        .replace(/×/g,"*")
        .replace(/−/g,"-");

        let result = eval(expression);

        if(result===undefined){
            display.value="";
        }else{
            display.value=result;
        }

    }catch{

        display.value="Error";

        setTimeout(()=>{
            display.value="";
        },1000);

    }

}

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    const key=e.key;

    if(!isNaN(key) || "+-*/.%".includes(key)){
        appendValue(key);
    }

    if(key==="Enter"){
        e.preventDefault();
        calculate();
    }

    if(key==="Backspace"){
        deleteLast();
    }

    if(key==="Escape"){
        clearDisplay();
    }

});