/* Function insert for add a number in input of calculator*/

function insert(num){
  let numero = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = numero + num; 
}
/*Function clean for the caractere "C" that will clean the input of calculator*/ 
function clean(){
  document.getElementById('result').innerHTML = "";
}
/*Function back for the caractere "<" that will delete the numbers one by one*/ 
function back(){
  let result = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML= result.substring(0, result.length -1);
}
/*Function calc, this function will calculator the according to the values ​​entered */
function calc (){
  let result = document.getElementById('result').innerHTML;
  if(result){
    document.getElementById('result').innerHTML = eval(result);
  }else{
    document.getElementById('result').innerHTML='nada...'
  }
}