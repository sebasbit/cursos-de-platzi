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

  public set year(value: number) {
    if (value < 1970) {
      throw new Error(
        `Year musth be equal or greater than 1970, given ${value}`,
      );
    }
    this._year = value;
  }

  public get month(): number {
    return this._month;
  }

  public set month(value: number) {
    if (value < 1 || value > 12) {
      throw new Error(`Month out of rage 1 to 12, given ${value}`);
    }
    this._month = value;
  }

  public get day(): number {
    return this._day;
  }

  public set day(value: number) {
    let max = 31;
    if ([4, 6, 9, 11].includes(this._month)) {
      max = 30;
    } else if (this._month === 2) {
      max = this.isLeapYear ? 29 : 28;
    }

    if (value < 1 || value > max) {
      throw new Error(`Day out of rage 1 to ${max}, given ${value}`);
    }

    this._day = value;
  }

  public get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const evaluate = (fn: () => void): void => {
  try {
    fn();
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
  }
};

const deadline = new NoTimeDate();

console.log(`Date: ${deadline.getDate()}`);

evaluate(() => (deadline.year = 1969));
evaluate(() => (deadline.month = 13));
evaluate(() => {
  deadline.month = 1; // January has 31 days
  deadline.day = 32;
});
evaluate(() => {
  deadline.month = 4; // April has 30 days
  deadline.day = 31;
});
evaluate(() => {
  deadline.year = 2020;
  deadline.month = 2; // February has 29 days, 2020 is a leap year
  deadline.day = 30;
});
evaluate(() => {
  deadline.year = 2021;
  deadline.month = 2; // February has 28 days, 2021 isn't a leap year
  deadline.day = 29;
});
