async function getProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        products.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error("შეცდომა მონაცემების წამოღებისას:", error);
    }
}

getProducts();