const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// სამივე ელემენტის ივენთის მსმენელები
grandparent.addEventListener('click', () => {
    console.log("Grandparent clicked");
});

parent.addEventListener('click', (event) => {
    console.log("Parent clicked");
    
    event.stopPropagation(); 
});

child.addEventListener('click', () => {
    console.log("Child clicked");
});

/*
    ახსნა
  
  1. თავიდან (სანამ stopPropagation()-ს დავწერდით):
     ღილაკზე დაჭერისას კონსოლში თანმიმდევრობა იყო ასეთი:
     -> "Child clicked"
     -> "Parent clicked"
     -> "Grandparent clicked"
     ეს იმიტომ ხდება, რომ ივენთი სტანდარტულად მოძრაობს ქვემოდან (ყველაზე შიდა ელემენტიდან) 
     ზემოთ (ყველაზე გარე ელემენტამდე) — ანუ მიჰყვება იერარქიას: Child -> Parent -> Grandparent.

  2. მას შემდეგ, რაც parent-ზე დავამატეთ event.stopPropagation():
     ღილაკზე (child) დაჭერისას იბეჭდება:
     -> "Child clicked"
     -> "Parent clicked"
     ...და აქ ყველაფერი წყდება! Grandparent-ის შეტყობინება აღარ იბეჭდება.
     
  3. რატომ მოხდა ეს?
     ივენთმა Child-იდან დაიწყო სვლა, ავიდა Parent-მდე, სადაც შესრულდა Parent-ის კოდი. 
     მაგრამ, რადგან Parent-ის შიგნით ბრაუზერმა დაინახა ბრძანება `event.stopPropagation()`, 
     მან ივენთს გზა გადაუღობა და აღარ მისცა უფლება, უფრო ზემოთ — Grandparent-ამდე ასულიყო.
*/