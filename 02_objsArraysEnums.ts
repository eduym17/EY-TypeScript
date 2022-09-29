const person: {
  name: string,
  age: number
  hobbies: string[],
  role: [number, string]
} = {
  name: "Eduardo",
  age: 28,
  hobbies: ['Videogames', 'Sports'],
  role: [2, 'Author']
}

enum Role { ADMIN = 'Admin', READ_ONLY = 100, AUTHOR = 200 }
console.log(Role.ADMIN)

person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}