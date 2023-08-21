let totalPrice = 0
let discount = 0
let total = 0
document.getElementById("make").disabled = true;
document.getElementById("apply-btn").disabled = true;
document.getElementById("sell-btn").disabled = true;
function handleCLikBtn(target){
    const selectedItemsContainer = document.getElementById('selected-items')
    const iteamName = target.childNodes[3].childNodes[3].innerText
    const li = document.createElement('li')
    li.innerText = iteamName 
    selectedItemsContainer.append(li)
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0]

    



    totalPrice = parseFloat(totalPrice) + parseFloat(price)

    document.getElementById('total-price').innerText = totalPrice

    if(totalPrice>0) {
        document.getElementById("make").disabled = false;
        document.getElementById('home-btn').addEventListener('click', function(){
            window.location.reload()
        })

    }

    discount = (parseFloat(totalPrice) * parseFloat(20)) / parseFloat(100)



    if(totalPrice<200){
        total = parseFloat(totalPrice)
        document.getElementById('total').innerText = total

    }
    else{
        document.getElementById("apply-btn").disabled = false;
        document.getElementById("sell-btn").disabled = false;
        total = parseFloat(totalPrice)
        document.getElementById('total').innerText = total
        document.getElementById('discount-amount').innerText = '00.00'
        document.getElementById('apply-btn').addEventListener('click', function(){
        if(document.getElementById('SELL200').value == 'SELL200'){
        document.getElementById('discount-amount').innerText = discount
        total = parseFloat(totalPrice) - parseFloat(discount)
        document.getElementById('total').innerText = total
        }
        document.getElementById('SELL200').value = ''

   
        
    })
            
        }



    }

