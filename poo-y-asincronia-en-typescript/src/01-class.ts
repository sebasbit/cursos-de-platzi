const today: Date = new Date();
const deadline = new Date(2023, 3, 3); // Type Inference

console.log(today.toISOString());
console.log(deadline.toISOString());

class NoTimeDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const birthday: NoTimeDate = new NoTimeDate(2023, 3, 3);

console.log(birthday);
