let count = 5; // გლობალური (ან გარე) ცვლადი

function startCounter() {
  if (true) {
    // TDZ-ის დასაწყისი (ბლოკის შიგნით არსებული 'count'-ისთვის)
    
    console.log(count); 
    // შეცდომა! ReferenceError: Cannot access 'count' before initialization
    // მიზეზი: ქვედა ხაზზე არსებული let-ის გამო, ეს ზონა არის TDZ.
    // ძრავა გარე 'count = 5'-ს უგულებელყოფს და ლოკალურ ცვლადს ეძებს, რომელიც ჯერ არ შექმნილა.

    let count = 10; // TDZ-ის დასასრული. აქედან 'count' უკვე ხელმისაწვდომია.
  }
}
startCounter();