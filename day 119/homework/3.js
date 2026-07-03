function checkValue() {
  // Hoisting-ის გამო, ფარულად აქ ხდება: var isReady = undefined;
  
  if (true) {
    var isReady = true; // 'var'-ს ბლოკური სკოუპი არ აქვს, ის მთელი ფუნქციისაა.
  }
  
  console.log(isReady); // დაიბეჭდება: true
  // რადგან 'isReady' ფუნქციის სკოუპშია, ის ბლოკის გარეთაც მშვენივრად ჩანს.
}
checkValue();