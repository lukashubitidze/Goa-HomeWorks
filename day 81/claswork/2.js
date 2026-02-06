const attendance = [45, 67, 80, 90, 30, 55, 79, 100, 50];

const result = {
  low: 0,
  medium: 0,
  high: 0
};

attendance.forEach(percent => {
  if (percent < 50) {
    result.low++;
  } else if (percent <= 79) {
    result.medium++;
  } else {
    result.high++;
  }
});

console.log(result);