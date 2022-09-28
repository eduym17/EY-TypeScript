// const person: {
//   name: string,
//   age: number
// } = {
const person = {
  name: "Eduardo",
  age: 28,
  hobbies: ['Videogames', 'Sports']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}