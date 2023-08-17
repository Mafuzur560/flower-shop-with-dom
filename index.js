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
    
    
}