const ageCalculator = function(name, yearOfBirth, currentYear){
  return name + ' is ' + (currentYear - yearOfBirth) + ' years old.'; 
};

console.log(ageCalculator('Rayesh', 1994, 2019));