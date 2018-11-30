document.querySelector("#reset-field-btn").addEventListener('click', function(){
// TASK #1
//se crea una variable para asignarle el valor del input que se quiere limpiar
//con .value accedemos a su valor
  var reset = document.querySelector('.ex1-text').value
//creamos una condisional para poder remover la clase
    if(reset.length > 0){
//se le otorga a la clase un valor vacio
      document.querySelector('.ex1-text').value = " "
    }
})


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2
//seleccionamos las clase del mensaje y la metemos dentro de una variable
  var message = document.querySelector('.flash-message')
//se obtiene el valor del input
  var inputModify = document.querySelector('.ex2-text').value
//una condicional para que el input sea de mas de 6 caracteres
    if(inputModify.length < 6) {
//se agrega la clase  a la variable message
      message.classList.add('invalid')
//se agrega el contenido a la variable message
      message.textContent = 'Input no longer enough'

    } else {
//en vaso de que sea de mas de 6 caracteres se remueve la clase
      message.classList.remove('invalid')
//y se agrega la nueva
      message.classList.add('valid')
//junto con el mensaje de validacion
      message.textContent = 'Field Valid'
    }
})

document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3
//se crea una variable para guardar los valores
  var sum = 0;
//seleccionamos todos los inputs con su clase y los metemos en una variable
  var checkList = document.querySelectorAll('.item-input')
//un for para recorrer todo el arreglo de uno en uno
  for(var i = 0; i < checkList.length; i++){
//como es una checkbox tenemos que agregar una condicional con .checked = true
//para que se pueda seleccionar
    if (checkList[i].checked == true) {
//ocupamos la var suma y con parseInt le sumamos el valor predeterminado en cada input
// con .value accedemos al valor del input
      sum = sum + parseInt(checkList[i].value);


     var total = document.querySelector('.sum-total');
//accedemos al contenido de la var total y le concatenamos el signo de epso
     total.textContent =  "$ " + sum
    }
  }
})

document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
})
