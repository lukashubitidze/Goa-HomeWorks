function mixedHosting() {
  // ფარულად აქ ხდება 'var a = undefined;'
  // 'let b' ასევე იწევა ზემოთ, მაგრამ ინიციალიზაციის გარეშე (იწყება მისი TDZ)

  console.log(a); // დაიბეჭდება: undefined (რადგან var-ის ჰოისტინგი მას ანიჭებს undefined-ს)
  
  console.log(b); 
  // შეცდომა! ReferenceError: Cannot access 'b' before initialization
  // მიზეზი: 'b' კვლავ TDZ-შია (დროებით მკვდარ ზონაში).

  var a = 1;
  let b = 2; // 'b'-ს TDZ აქ მთავრდება.
}
mixedHosting();