var person = {
  firstName: 'John',
  lastName: 'Smith',
  hobby: 'Exploring the World',
  job: 'Explorer',
  previousJob: 'soldier'
};
console.log(person);

var fullName = person.firstName + person.lastName;
console.log("The person's name is:", fullName);

var job = person.job;
console.log("The person's current job is:", job);

var previousJob = person.previousJob;
console.log("The person's previous job is:", previousJob);

console.log('The complete person object:', person);
