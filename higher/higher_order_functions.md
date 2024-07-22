const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log(users);
// Output: [{ name: 'Elias', age: 22 }, { name: 'Brook', age: 50 }, { name: 'Eyob', age: 100 }, { name: 'Asabeneh', age: 150 }]
