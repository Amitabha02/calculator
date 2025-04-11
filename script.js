function fun(x){
    document.getElementById('calculator').value +=x;

}


function calculate(){

    try{
    res=eval(document.getElementById('calculator').value);
}

catch(Exception){
    alert('Error');

    document.getElementById('calculator').value = '';

}

    document.getElementById('calculator').value = res;
}

function del(){

    x= document.getElementById('calculator').value; 
    document.getElementById('calculator').value = x.slice(0,x.length-1); 
}

function clearDisplay() {
    document.getElementById('calculator').value= '';
}