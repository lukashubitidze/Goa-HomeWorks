const btn = document.getElementById('fetch-btn');
const container = document.getElementById('products-container');
const cartList = document.getElementById('cart-items-list');
const totalSumSpan = document.getElementById('total-sum');
const buyNowBtn = document.getElementById('buy-now-btn');

let fetchedProducts = []; // აქ შევინახავთ API-დან წამოღებულ პროდუქტებს
let cart = [];            // აქ შევინახავთ კალათაში დამატებულ პროდუქტებს

// ღილაკზე კლიკის მოსმენა
btn.addEventListener('click', function() {
    // სანამ მონაცემები ჩაიტვირთება, დივში ვწერთ სტატუსს
    container.innerHTML = "იტვირთება...";
    
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) // პასუხის გადაყვანა js-ის ფორმატში
        .then(products => {
            // ვინახავთ წამოღებულ პროდუქტებს, რომ შემდეგ ID-ით მოვძებნოთ კალათისთვის
            fetchedProducts = products;

            // ვასუფთავებთ დივ ბლოკს ტექსტისგან
            container.innerHTML = "";

            // ციკლით გადავუვლით თითოეულ წამოღებულ პროდუქტს
            products.forEach(product => {
                
                // ვქმნით ახალ დივ ბლოკს კონკრეტული პროდუქტისთვის
                const productDiv = document.createElement('div');
                
                // ვავსებთ ახალ დივს პროდუქტის მონაცემებით და ვამატებთ "Add to cart" ღილაკს
                // ღილაკს ფუნქციაში გადავცემთ ამავე პროდუქტის უნიკალურ ID-ს
                productDiv.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>ფასი: $${product.price}</p>
                    <img src="${product.image}" width="100" alt="${product.title}">
                    <br>
                    <button onclick="addToCart(${product.id})">Add to cart</button>
                    <hr>
                `;

                // ამ ახალ დივს ვსვამთ ჩვენს მთავარ კონტეინერში
                container.appendChild(productDiv);
            });
        })
        .catch(error => {
            // შეცდომის დამუშავება
            container.innerHTML = "მონაცემების წამოღებისას დაფიქსირდა შეცდომა.";
            console.error(error);
        });
});

function addToCart(productId) {
    // სიიდან ვპოულობთ პროდუქტს დაკლიკებული ID-ის მიხედვით
    const product = fetchedProducts.find(p => p.id === productId);
    
    if (product) {
        cart.push(product); // ვამატებთ კალათის მასივში
        updateCartUI();     // გამოვიძახებთ კალათის განახლების ფუნქციას
    }
}

function updateCartUI() {
    // ჯერ ვასუფთავებთ ძველ სიას კალათაში
    cartList.innerHTML = '';

    // თუ კალათა ცარიელია
    if (cart.length === 0) {
        cartList.innerHTML = '<p>კალათა ცარიელია</p>';
        totalSumSpan.innerText = '0';
        buyNowBtn.disabled = true; // ყიდვის ღილაკი ითიშება
        return;
    }

    // თუ ელემენტები არის, ყიდვის ღილაკს აქტიურს ვხდით
    buyNowBtn.disabled = false;

    let totalSum = 0;

    // სათითაოდ გამოგვაქვს კალათის ელემენტები ეკრანზე
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.title} - $${item.price}`;
        cartList.appendChild(li);

        // ფასების შეკრება
        totalSum += item.price;
    });

    // ჯამის ასახვა ეკრანზე
    totalSumSpan.innerText = totalSum.toFixed(2);
}


buyNowBtn.addEventListener('click', function() {
    alert("შესყიდვა წარმატებით დასრულდა!");
    cart = [];        // მასივის დაცარიელება
    updateCartUI();   // კალათის განახლება
});