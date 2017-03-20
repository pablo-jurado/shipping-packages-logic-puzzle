// Step #1
// Model the data that the puzzle is made out of. What data type(s) can you use
// to represent this data? Arrays, strings, booleans, objects, etc.

var names = ['Ellen', 'Heather', 'Rick', 'Walter']
var lastNames = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var states = ['Ohio', 'Montana', 'Texas', 'Washington']
var days = ['Wednesday', 'Thursday', 'Friday', 'Saturday']
var relations = ['friend', 'cousin', 'father', 'sister']
var genders = ['She', 'He']
var events = ['anniversary', 'birthday', 'house warming', 'wedding']

// Step #2
// What logical statements can you use to model the six rules of the puzzle?
// Don't worry about whether the variables you use exist or not, just focus
// on the logic of the statements.

function createAllOptions () {
  var persons = []
  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
      for (var k = 0; k < states.length; k++) {
        for (var l = 0; l < days.length; l++) {
          for (var m = 0; m < relations.length; m++) {
            for (var n = 0; n < genders.length; n++) {
              for (var o = 0; o < events.length; o++) {
                persons.push({
                  name: names[i],
                  lastName: lastNames[j],
                  state: states[k],
                  day: days[l],
                  relation: relations[m],
                  gender: genders[n],
                  events: events[o]
                })
              }
            }
          }
        }
      }
    }
  }
  return persons
}

var allOptions = createAllOptions()

// console.log(allOptions)

function isValidOption (person) {

  // 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio.
  if (person.relation === 'friend' && person.name === 'Ellen') return false
  if (person.relation === 'friend' && person.lastName === 'Fairview') return false
  if (person.name === 'Ellen' && person.lastName !== 'Fairview') return false
  if (person.name !== 'Ellen' && person.lastName === 'Fairview') return false
  if (person.name === 'Ellen' && person.state === 'Ohio') return false
  if (person.name === 'Ellen' && person.gender !== 'She') return false

  // The birthday girl didn’t have her party on Friday.
  if (person.gender === 'He' && person.events === 'birthday') return false
  if (person.events === 'birthday' && person.day !== 'Friday') return false

  // 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
  if (person.name === 'Rick' && person.name === 'Bartley') return false
  if (person.name === 'Rick' && person.events !== 'Saturday') return false
  if (person.name !== 'Rick' && person.events === 'Saturday') return false
  if (person.name === 'Rick' && person.gender !== 'He') return false

  // 3. Greg’s father wasn’t getting married, but his last name was Gray.
  if (person.relation === 'father' && person.events === 'wedding') return false
  if (person.relation === 'father' && person.lastName !== 'Gray') return false
  if (person.relation !== 'father' && person.lastName === 'Gray') return false
  if (person.relation === 'father' && person.gender !== 'He') return false

  // 4. The friend having a house warming didn’t live in Ohio.
  if (person.relation === 'friend' && person.events !== 'house warming') return false
  if (person.relation !== 'friend' && person.events === 'house warming') return false
  if (person.relation === 'friend' && person.state === 'Ohio') return false

  // The wedding was for Greg’s cousin.
  if (person.relation === 'cousin' && person.events !== 'wedding') return false
  if (person.relation !== 'cousin' && person.events === 'wedding') return false

  // Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
  if (person.relation === 'sister' && person.name !== 'Heather') return false
  if (person.relation !== 'sister' && person.name === 'Heather') return false
  if (person.name === 'Heather' && person.state === 'Texas') return false
  if (person.name === 'Heather' && person.day === 'Wednesday') return false
  if (person.name === 'Heather' && person.gender !== 'She') return false

  // "Walter's event was one day earlier than the person whose last name was DeForest"
  if (person.name === 'Walter' && person.day === 'Saturday') return false
  if (person.name === 'Walter' && person.lastName === 'DeForest') return false
  if (person.lastName === 'DeForest' && person.day === 'Wednesday') return false

  // Walter's event was after the person who lived in Washington
  if (person.name === 'Walter' && person.day === 'Wednesday') return false
  if (person.name === 'Walter' && person.state === 'Washington') return false
  if (person.state === 'Washington' && person.day === 'Saturday') return false
  if (person.name === 'Walter' && person.gender !== 'He') return false

  // Person with last name DeForest cannot live in Washington
  if (person.lastName === 'DeForest' && person.state === 'Washington') return false

  // The anniversary was held in Montana.
  if (person.events === 'anniversary' && person.state !== 'Montana') return false
  if (person.state === 'Montana' && person.events !== 'anniversary') return false

  return true
}
// isValidSolution
function filteredOptions (solution) {
  var solutions = []
  for (var i = 0; i < allOptions.length; i++) {
    if (isValidOption(allOptions[i])) {
      solutions.push(allOptions[i])
    }
  }
  return solutions
}

function logPersons (arr) {
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i].name + ' ' +
    arr[i].lastName + ' lives in ' +
    arr[i].state + ' and is Greg\'s ' +
    arr[i].relation + '. ' + arr[i].gender +
    ' had a ' + arr[i].events + ' on ' + arr[i].day + '.'
    console.log(str)
  }
}

function filterMoreOptions (people) {
  // 6. Walter’s event was one day earlier than the person whose last name was
  // DeForest but after the person who lived in Washington.
  var deForestDay = ''
  var dayIndex = ''
  for (var i = 0; i < people.length; i++) {
    // console.log(people[i])
    if (people[i].lastName === 'DeForest') {
      deForestDay = people[i].day
    }
    dayIndex = days.indexOf(deForestDay)
    if (people[i].name === 'Walter') {
      if (people[i].day !== days[dayIndex - 1]) {
        people.splice(i, 1)
      }
    }
  }
  for (var j = 0; j < people.length; j++) {
    if (people[j].name !== 'Walter') {
      if (people[j].day === days[dayIndex - 1]) {
        people.splice(j, 1)
      }
    }
  }
}

var newPersons = filteredOptions(allOptions)
console.log(newPersons.length)

//filterMoreOptions(newPersons)
logPersons(newPersons)
