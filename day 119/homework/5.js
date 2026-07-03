function testShadowing() {
  var x = 10; // ფუნქციის მასშტაბის ცვლადი
  
  if (true) {
    // იწყება if ბლოკის ლოკალური TDZ შიდა 'x'-ისთვის.
    // შიდა 'x' გადაფარავს (Shadowing) გარე 'x = 10'-ს.

    console.log(x); 
    // შეცდომა! ReferenceError: Cannot access 'x' before initialization
    // მიზეზი: TDZ-ის გამო გარე 'x'-ს ვეღარ ხედავს, ხოლო შიდა 'x' ჯერ არ არის ინიციალიზებული.

    let x = 20; // აქ მთავრდება შიდა 'x'-ის TDZ.
  }
}
testShadowing();