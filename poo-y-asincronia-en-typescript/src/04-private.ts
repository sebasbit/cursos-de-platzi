export class NoTimeDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public getDate(): string {
    return `${this.pad(this.year)}-${this.pad(this.month)}-${this.pad(
      this.day,
    )}`;
  }

  private pad(value: number): string {
    return (value < 10 ? '0' : '') + value.toString();
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

// deadline.year = 2024; // Don't do this
// deadline.month = 4; // Don't do this
// deadline.day = 4; // Don't do this
// deadline.pad(1); // Don't do this
deadline.add(1, 'year');
deadline.add(1, 'month');
deadline.add(1, 'day');

console.log(`Date updated: ${deadline.getDate()}`);
