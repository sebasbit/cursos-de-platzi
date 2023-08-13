import { subDays, format } from 'date-fns';

const date = new Date(2023, 1, 1); // feb-01-2023
console.log(`Date: ${format(date, 'dd/MM/yyyy')}`);

const newDate = subDays(date, 30);
console.log(`New date: ${format(newDate, 'dd/MM/yyyy')}`);
