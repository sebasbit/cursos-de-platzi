export class NoTimeDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getDate(): string {
    return `${this.year}-${this.month}-${this.day}`;
  }

  add(amount: number, type: 'day' | 'month' | 'year'): void {
    if (type === 'day') {
      this.day += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else if (type === 'year') {
      this.year += amount;
    }
  }
}

const deadline: NoTimeDate = new NoTimeDate(2023, 3, 3);

console.log(deadline.getDate());

deadline.add(1, 'year');
deadline.add(1, 'month');
deadline.add(1, 'day');

console.log(deadline.getDate());
