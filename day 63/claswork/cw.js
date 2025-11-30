// 1)

const user = {
  name: "Luka",
  age: 20,
  isAdult() {
    if (this.age >= 18) {
      return "You are an adult";
    } else {
      return "You are not an adult";
    }
  }
};

console.log(user.isAdult())


// 2)

const car = {
  brand: "BMW",
  speed: 140,
  checkSpeed() {
    if (this.speed > 120) {
      return "Too fast!";
    } else {
      return "Speed is okay";
    }
  }
};

console.log(car.checkSpeed())

// 3)

const student = {
  name: "Nika",
  score: 45,
  passOrFail() {
    if (this.score >= 50) {
      return "Passed";
    } else {
      return "Failed";
    }
  }
};

console.log(student.passOrFail())

// 4)

const calculator1 = {
  n1: 10,
  sumToN1() {
    let sum = 0;
    let i = 1;

    while (i <= this.n) {
      sum += i;
      i++;
    }

    return sum;
  }
};

console.log(calculator1.sumToN1())

// 5)

const multiplier1 = {
  number1: 5,
  times1: 3,
  multiply() {
    return this.number * this.times;
  }
};

console.log(multiplier1.multiply())

// 6)

const calculator2 = {
  n2: 10,
  sumToN2() {
    let sum = 0;

    for (let i = 1; i <= this.n; i++) {
      sum += i;
    }

    return sum;
  }
};

console.log(calculator2.sumToN2())

// 7)

const multiplier2 = {
  number2: 5,
  times2: 4,
  multiply() {
    let result = 1;

    for (let i = 1; i <= this.times; i++) {
      result *= this.number;
    }

    return result;
  }
};

console.log(multiplier2.multiply())