const shoppingCard = () => {
    const shop = document.getElementById('shopping-card');
    const name = shop.value;
    productName(name);


    shop.value = '';

    console.log(name);
}

const productName = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li')
    li.innerText = name;
    ul.appendChild(li);
}