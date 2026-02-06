const athletes = [
  { name: "Giorgi", points: 120 },
  { name: "Nika", points: 90 },
  { name: "Luka", points: 150 },
  { name: "Ana", points: 70 },
  { name: "Mariam", points: 100 }
];

const result = athletes.reduce(
  (acc, athlete) => {
    if (athlete.points >= 100) {
      acc.moreOrEqual100++;
    } else {
      acc.lessThan100++;
    }

    // sum
    acc.totalPoints += athlete.points;

    return acc;
  },
  {
    moreOrEqual100: 0,
    lessThan100: 0,
    totalPoints: 0
  }
);

// საშუალო
result.averagePoints = result.totalPoints / athletes.length;

console.log(result);