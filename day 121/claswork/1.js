// ელემენტების ამოღება DOM-იდან
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// ღილაკის (Child) ქლიქის ივენთი
child.addEventListener('click', () => {
    console.log("Child clicked");
});

// დივის (Parent) ქლიქის ივენთი
parent.addEventListener('click', () => {
    console.log("Parent clicked");
});

/*
 რატომ შესრულდა ორივე?
 ღილაკი მოთავსებულია დივის შიგნით. მასზე დაჭერისას ბრაუზერი მიმდევრობით 
 მიჰყვება ივენთების გავრცელების გზას, რის გამოც ორივე ელემენტის ფუნქცია მუშაობს.
 ამიტომაც, კონსოლში ჯერ ვხედავთ "Child clicked"-ს და მხოლოდ ამის შემდეგ "Parent clicked"-ს.
*/