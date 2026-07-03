// HTML ელემენტების წამოღება ID-ის მიხედვით
const btn = document.getElementById('fetch-btn');
const container = document.getElementById('products-container');

// ღილაკზე კლიკის მოსმენა
btn.addEventListener('click', function() {
    // სანამ მონაცემები ჩაიტვირთება, დივში ვწერთ სტატუსს
    container.innerHTML = "იტვირთება...";
    
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json()) // პასუხის გადაყვანა js-ის პორმატში
        .then(products => {
            // ვასუფთავებთ დივ ბლოკს ტექსტისგან
            container.innerHTML = "";

            // ციკლით გადავუვლით თითოეულ წამოღებულ პროდუქტს
            products.forEach(product => {
                
                // ვქმნით ახალ დივ ბლოკს კონკრეტული პროდუქტისთვის
                const productDiv = document.createElement('div');
                
                // ვავსებთ ახალ დივს პროდუქტის მონაცემებით (სათაური, ფასი, სურათი)
                productDiv.innerHTML = `
                    <h3>${product.title}</h3>
                    <p>ფასი: $${product.price}</p>
                    <img src="${product.image}" width="100" alt="${product.title}">
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