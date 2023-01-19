
let inputs = document.querySelectorAll('input')
let userName = document.querySelector('[data-userName')
let cardNumber = document.querySelector('[data-cardNumber')
let CVC = document.querySelector('[data-cvc]')
let expDateM = document.getElementById('expMonth')
let expDateY = document.getElementById('expYear')
let errorPara = document.querySelectorAll('.invalid')



inputs.forEach(input => {
    input.addEventListener('keyup',() => {

        //  Array[0]

        if(inputs[0].value !== ''){
            inputs[0].style.textTransform = 'uppercase'
           userName.innerText = inputs[0].value
           errorPara[0].innerText = ''
        }if(inputs[0].value.length === 0){
            userName.innerText = '---- ---- ---- ----';
        }
        //  Array[1]

        if(inputs[1].value !== ''){
            cardNumber.innerText = inputs[1].value;
            errorPara[1].innerText = ''
        }if(inputs[1].value === ''){
            cardNumber.innerText = 'xxxx xxxx xxxx xxxx';
        }

        //  Array[2]

        if(inputs[2].value !== ''){
          expDateM.innerText = inputs[2].value
          errorPara[2].innerText = ''
        }if(inputs[2].value === ''){
           expDateM.innerText = '00'
        }
        
         //  Array[3]

        if(inputs[3].value !== ''){
          expDateY.innerText = inputs[3].value
          errorPara[2].innerText = ''
        }if(inputs[3].value === ''){
           expDateY.innerText = '00'
        }
         //  Array[4]

        if(inputs[4].value !== ''){
            CVC.innerText = inputs[4].value
            errorPara[3].innerText = ''
          }if(inputs[4].value === ''){
             CVC.innerText = 'xxx'
        }
    })
})

//for matting the card number input
inputs[1].addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
})

//clearing  input after load
function clearInput(){
   inputs[0].value = ''
   inputs[1].value = ''
   inputs[2].value = ''
   inputs[3].value = ''
}
window.onload = clearInput;