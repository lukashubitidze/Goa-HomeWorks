// default export
export default function toUpperCaseText(text) {
  return text.toUpperCase();
}

// named exports
export function reverseText(text) {
  return text.split("").reverse().join("");
}

export function addExclamation(text) {
  return text + "!";
}