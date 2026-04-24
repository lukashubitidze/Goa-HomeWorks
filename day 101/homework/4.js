class Student {
  constructor(name, surname, grade) {
    this.name = name;
    this.surname = surname;
    this.grade = grade;
  }
}

const students = [
  new Student("Nika", "Beridze", 90),
  new Student("Ana", "Kapanadze", 85),
  new Student("Gio", "Maisuradze", 88),
  new Student("Lika", "Gelashvili", 92),
  new Student("Dato", "Japaridze", 80)
];

console.log(students);