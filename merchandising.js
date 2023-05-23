const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

//Funciones Click

btnIncrement.addEventListener('click',() => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault
}) 

btnDecrement.addEventListener('click',() => {
    if (valueByDefault === 1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})

//Toggle
//Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')


//Constantes Contenido Texto
const contentDescription = document.querySelector('.title-description')
const contentAdditionalInformation = document.querySelector('.title-additional-information')

//Funciones Toggle
toggleDescription.addEventListener('click',() => {
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click',() => {
    contentAdditionalInformation.classList.toggle('hidden');
});