const prices: (number | string)[] = [1000, '1000', '5000', 5000];

console.log(`Prices (typed array): ${prices}`);

const score: [string, number] = ['username', 1000];
// score = []; // Don't do this
// score = [1000, 'username']; // Don't do this
// score = ['username', 1000, true]; // Don't do this
// score = ['username', 1000, 'username2', 500];  // Don't do this
// score.push('username2'); // Don't do this, use array type syntax for variable-length array

console.log(`Score (tuple: [string, number]): ${score}`);

const [username, points] = score;

console.log(`Destructuring: ${username} - ${points}`);

type Statistics = [string, number];
const statistics: Statistics = ['username', 1000];

console.log(`Statistics: ${statistics}`);
