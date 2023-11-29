export class NoTimeDate {
  year: number; // By default it's public
  // readonly year: number; // Don't do this if you need to modify this property
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  // By default it's public
  getDate(): string {
    return `${this.year}-${this.month}-${this.day}`;
  }

  public add(amount: number, type: 'day' | 'month' | 'year'): void {
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

console.log(`Date: ${deadline.getDate()}`);

deadline.year = 2024;
deadline.month = 4;
deadline.day = 4;
// deadline.day = 32; // This could happen since the property is public

console.log(`Date updated: ${deadline.getDate()}`);
