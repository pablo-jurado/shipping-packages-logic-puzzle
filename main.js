// Step #1
// Model the data that the puzzle is made out of. What data type(s) can you use
// to represent this data? Arrays, strings, booleans, objects, etc.

var names = ['Ellen', 'Heather', 'Rick', 'Walter'],
  lastNames = ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  states = ['Ohio', 'Montana', 'Texas', 'Washington'],
  days = ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  relations = ['friend', 'causin', 'father', 'sister'],
  genders = ['She', 'He'],
  events = ['anniversary', 'birthday', 'house warming', 'wedding']

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
  // The birthday girl didn’t have her party on Friday.
  if (person.relation === 'friend' && person.name !== 'Ellen' &&
  person.lastName !== 'Fairview') {
    return true
  } else if (person.name === 'Ellen' && person.lastName === 'Fairview' &&
  person.state !== 'Ohio' && person.gender === 'She') {
    return true
  } else {
    return false
  }
}

for (var i = 0; i < allOptions.length; i++) {
  if (isValidOption(allOptions[i])) {
    console.log(allOptions[i])
  }
}

// function isValidSolution (solution) {
//
// }

// 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio.
// The birthday girl didn’t have her party on Friday.

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.

// 3. Greg’s father wasn’t getting married, but his last name was Gray.

// 4. The friend having a house warming didn’t live in Ohio.

// 5. The wedding was for Greg’s cousin.
// Heather, who didn’t live in Texas, was
// Greg’s sister but her event wasn’t on Wednesday night.

// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington.
// The anniversary was held in Montana.
