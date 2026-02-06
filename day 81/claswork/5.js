const text = "Hello, world! 123, hello!!!";

const symbolCount = text
  .replace(/[^a-zA-Z0-9]/g, '') // პუნქტუაცია და სფეისის ამოშორება
  .split('') // სიმბოლოებად გაყოფა
  .reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1; // სიმბოლოს რაოდენობა
    return acc;
  }, {});

console.log(symbolCount);