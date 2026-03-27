export function min(arr) {
  return Math.min(...arr);
}

export function max(arr) {
  return Math.max(...arr);
}

export function average(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}