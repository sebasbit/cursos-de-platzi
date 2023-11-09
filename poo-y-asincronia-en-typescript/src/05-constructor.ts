export class NoTimeDate {
  constructor(
    private year: number = 1970,
    private month: number = 1,
    private day: number = 1, // day: number // Don't do this
  ) {}

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

const defaultDate = new NoTimeDate();

console.log(`Date - default: ${defaultDate.getDate()}`);

const dateWithYear = new NoTimeDate(2023);

console.log(`Date - with year: ${dateWithYear.getDate()}`);

const dateWithYearAndMonth = new NoTimeDate(2023, 11);

console.log(`Date - with year and month: ${dateWithYearAndMonth.getDate()}`);

const customDate = new NoTimeDate(2023, 3, 3);

console.log(`Date - custom: ${customDate.getDate()}`);
