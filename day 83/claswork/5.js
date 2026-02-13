const text1 = "Hello world ეს არის ტესტი ended დასრულდა";


const words = text1.split(/\s+/);

const count = words.reduce((sum, word) => {
  const cleanWord = word.toLowerCase().replace(/[^a-zა-ჰ]/g, "");
  
  if (/[bcdfghjklmnpqrstvwxyzბგდვზთკლმნპჟრსტფქღყშჩცძწჭხჯჰ]$/.test(cleanWord)) {
    return sum + 1;
  }

  return sum;
}, 0);

console.log(count);