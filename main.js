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
  if (person.relation === 'friend' && person.name !== 'Ellen') return false
  if (person.relation === 'friend' && person.lastName !== 'Fairview') return false
  if (person.name === 'Ellen' && person.lastName !== 'Fairview') return false
  if (person.name !== 'Ellen' && person.lastName === 'Fairview') return false
  if (person.name === 'Ellen' && person.state === 'Ohio') return false

  // The birthday girl didn’t have her party on Friday.

  // 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
  if (person.name === ' Rick' && person.name === 'Bartley') return false
  if (person.name === ' Rick' && person.events !== 'Saturday') return false

  // 3. Greg’s father wasn’t getting married, but his last name was Gray.
  // 4. The friend having a house warming didn’t live in Ohio.
  // 5. The wedding was for Greg’s cousin.  Heather, who didn’t live in Texas,
  // was Greg’s sister but her event wasn’t on Wednesday night.
  // 6. Walter’s event was one day earlier than the person whose
  // last name was DeForest but after the person
  // who lived in Washington. The anniversary was held in Montana.


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
//filterMoreOptions(newPersons)

logPersons(newPersons)
