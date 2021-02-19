const students = [
    {id: 123, name: 'Mary'},
    {id: 124, name: 'Mariland'},
    {id: 125, name: 'Holand'},
    {id: 126, name: 'Joseph'},
    {id: 127, name: 'Tiplu'},
];
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     console.log(student.id)
    
// }
const names = students.map(e => e.name)
console.log(names);