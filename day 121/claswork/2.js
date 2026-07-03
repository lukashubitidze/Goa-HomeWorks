const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Child ღილაკის ივენთი 
child.addEventListener('click', (event) => {
    console.log("Child clicked");
    
    // ვაჩერებთ ივენთის შემდგომ გავრცელებას (Bubbling-ს) ზემოთ
    event.stopPropagation();
});

parent.addEventListener('click', () => {
    console.log("Parent clicked");
});

/*
    რას აკეთებს event.stopPropagation()?
    ეს მეთოდი ფაქტობრივად ბლოკავს ივენთის „ამოსვლას“ (Bubbling-ს) HTML-ის იერარქიაში. 
    როდესაც მას ღილაკის შიგნით ვიძახებთ, ივენთი სრულდება მხოლოდ ღილაკზე და 
    ვეღარ აღწევს მშობელ (parent) ელემენტამდე. შედეგად, კონსოლში იბეჭდება მხოლოდ "Child clicked".

    როდის შეიძლება მისი გამოყენება?
    მისი გამოყენება საჭიროა მაშინ, როდესაც შიდა ელემენტს (მაგალითად, მოდალური ფანჯრის 
    დასახურ ღილაკს ან ფოტოს წაშლის იკონკას) აქვს თავისი დამოუკიდებელი ფუნქცია და არ გვინდა, 
    რომ მასზე დაჭერამ შემთხვევით აამოქმედოს ფონური/მშობელი ელემენტის ივენთი (მაგალითად, 
    მთლიანი პოსტის გახსნა ან ლინკზე გადასვლა).
*/