// რატომ იწვევს შეცდომას ეს კოდი?
// class User {
// #email = "test@gmail.com";
// }
// const u = new User();
// console.log(u.#email);

// JavaScript-ში # სიმბოლოს გამოყენება კლასის გარეთ (მაგალითად, u.#email) პირდაპირ აკრძალულია სინტაქსის დონეზე.
//  პროგრამა გაშვებამდე "ხვდება", რომ წესს არღვევთ და ეგრევე აგდებს ერორს.


class User2 {
  #email = "test@gmail.com";

  // ვქმნით გეთერს
  get email() {
    return this.#email;
  }
}

const u = new User2();
console.log("ელ. ფოსტა:", u.email); // `#email`-ს ნაცვლად ვწერთ `email`-ს