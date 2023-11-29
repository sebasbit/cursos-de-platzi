export class NoTimeDate {
  constructor(
    private _year: number = 1970,
    private _month: number = 1,
    private _day: number = 1,
  ) {}

  public getDate(): string {
    return `${this.pad(this._year)}-${this.pad(this._month)}-${this.pad(
      this._day,
    )}`;
  }

  private pad(value: number): string {
    return (value < 10 ? '0' : '') + value.toString();
  }

  public add(amount: number, type: 'day' | 'month' | 'year'): void {
    if (type === 'day') {
      this._day += amount;
    } else if (type === 'month') {
      this._month += amount;
    } else if (type === 'year') {
      this._year += amount;
    }
  }

  public get year(): number {
    return this._year;
  }

  public get month(): number {
    return this._month;
  }

  public get day(): number {
    return this._day;
  }

  public get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const deadline = new NoTimeDate(2020, 2, 2);

// deadline.day = 1; // Don't do this
// deadline.day() // Don't do this

console.log(`Day: ${deadline.day}`);
console.log(`Month: ${deadline.month}`);
console.log(`Year: ${deadline.year}`);
console.log(`Is leap year: ${deadline.isLeapYear ? 'yes' : 'no'}`);
