let total = 0;

function handleBtn(o){
    const newList = document.getElementById('new-list');
    const itemName = o.parentNode.childNodes[1].innerText ;
    const li = document.createElement('li');
    li.innerText = itemName ;
    newList.appendChild(li);

    // set price
    const priceString = o.parentNode.childNodes[5].childNodes[1].innerText;
    const price = parseFloat(priceString);

    // total
    total = total + price ;

    // total add
    document.getElementById('add-total').innerText = total;

    // bounaces
    const grandPrice = document.getElementById('grand-price');

    // discount
    const discount = document.getElementById('price-discound');
    const discoundNumber = parseFloat(discount);
    if(total >= 50){
        discount.innerText = '15';
        const discountAmount = (total * 15) / 100;
        const discountedPrice = total - discountAmount;
        grandPrice.innerText = discountedPrice ;
    }else{
        grandPrice.innerText = total ;
    }
    
}