// 1 - mostrar en formato de tabla todos los alumnos
console.table (students)

// 2 - mostrar por consola la cantidad de alumnos
console.log("En la clase hay", students.length, "estudiantes")

// 3 - mostrar por consola todos los nombres de alumnos
console.log(
    students[0].name,', ',students[1].name,', ',students[2].name,', ',
    students[3].name,', ',students[4].name,', ',students[5].name,', ',
    students[6].name,', ',students[7].name);

// 4 - eliminar el ultimo alumno de la clase
console.log(students.pop())

// 5 - eliminar el alumno aleatoriamente de la clase
const randomItem = students => students.splice((Math.random() * students.length) | 0, 1);
console.log(randomItem(students)); 
console.log(students.length)

// 6 - mostrar por consola todos los datos de las alumnas (chicas) 
const onlyGirls = students.filter(students => students.gender === 'female');
console.log(onlyGirls)

// 7 - mostrar por consona num de chicos y chicas
const onlyBoys = students.filter(students => students.gender === 'male');
console.log(onlyBoys.length)
console.log(onlyGirls.length)

// 8 - mostrar true o false si todos los alumnos son chicas
console.log(students.every(students => students.gender === 'female'))

// 9 - mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 anyos
const only20_25 = students.filter(studends => students.age >= 20 && students.age <= 25)
console.log(only20_25)

// 10 - anadir un alumno nuevo 
  //      - nombre: aleatorio 
  //      - edad: aleatoria entre 20 y 50
  //      - genero: aleatorio
  //      - listado de clasificaciones vacio
  //   ---- nombre y geniro tienen que tener sentido
  var randomGender = availableGenders[
    Math.floor(Math.random()*availableGenders.length)];
  var randomName = randomNameFinder()
  function randomNameFinder (randomGender) {
    if(randomGender = 'female'){
      return availableFemaleNames[
      Math.floor(Math.random()*availableFemaleNames.length)];
    }else{
      return availableMaleNames[
      Math.floor(Math.random()*availableMaleNames.length)];
    }
  }
  const availableAge = Array.from({length: 31}, (_, i) => i + 20)
  const randomAge = availableAge[
    Math.floor(Math.random()*availableAge.length)];
  students.push({
    age:randomAge, 
    examScores:[], 
    gender:randomGender,
    name:randomName})

// 11 - mostrar por consola el nobre de la persona mas joven
    const allAges = [32, 29, 22, 35, 32, 22, 43, 20]
    const theYoungest = Math.min(...allAges)
    const theYoungestPersoneIndex = students.indexOf(theYoungest)
    console.log(students[students.length - 1].name)

// 12 - mostrar por consola la edad media de todos los alumnos 
function averageAge(allAges) {
    var total = 0;
    var count = 0;
    allAges.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}

console.log(Math.round(averageAge(allAges)));
        // utilizar reduce()
// 13 - mostrar por consola la edad media de chicas
const onlyGirlsAge = [20, 43, 32, 29]
function averageAge(onlyGirlsAge) {
    var total = 0;
    var count = 0;
    allAges.forEach(function(item, index) {
        total += item;
        count++;
    });
    return total / count;
}

console.log(Math.round(averageAge(onlyGirlsAge)));

// 14 - anadir nueva nota a los alumnos. 
// por cada alumno +1 nota aleatoria (0-10)

// lo siento no he llegado a consequirlo!

// 15 - ordenar array de alumnas alfabeticamente
const allStudenName = ['edu', 'silvia vviana', 'carlos', 'victor', 'isabel', 'silvia', 'isabel']
allStudenName.sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
console.log(allStudenName);