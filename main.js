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
  // 4. The friend having a house warming didn’t live in Ohio.
  // 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
  if (person.relation === 'friend' &&
  person.name !== 'Ellen' &&
  person.name !== 'Heather' &&
  person.name === 'Rick' &&
  person.lastName !== 'Fairview' &&
  person.lastName !== 'Gray' &&
  person.lastName !== 'Bartley' &&
  person.lastName === 'DeForest' &&
  person.state !== 'Ohio' &&
  person.state !== 'Montana' &&
  person.day !== 'Thursday' &&
  person.day === 'Saturday' &&
  person.events !== 'wedding' &&
  person.events !== 'birthday' &&
  person.events === 'house warming' &&
  person.state !== 'Washington' &&   // DeForest but after the person who lived in Washington.
  person.gender === 'He') {
    return true
  // 1. Ellen Fairview, who didn’t live in Ohio.
  // 5. The wedding was for Greg’s cousin.
  } else if (person.name === 'Ellen' &&
  person.lastName === 'Fairview' &&
  person.relation !== 'friend' &&
  person.relation !== 'father' &&
  person.relation !== 'sister' &&   // 'causin' 'wedding'
  person.events === 'wedding' &&
  person.day !== 'Saturday' &&
  person.day !== 'Thursday' &&
  person.state !== 'Ohio' &&
  person.state !== 'Montana' &&
  person.state !== 'Texas' &&
  person.gender === 'She') {
    return true
  // 2. Rick’s last name wasn’t Bartley but his event was on Saturday night. //
  // } else if (person.name === 'Rick' && person.lastName !== 'Bartley' &&
  // person.lastName !== 'Fairview' && person.day === 'Saturday' &&
  // person.events !== 'wedding' && person.events !== 'birthday' &&
  // person.gender === 'He' && person.lastName === 'DeForest') {
  //   return true

  // 3. Greg’s father wasn’t getting married, but his last name was Gray.
  // The anniversary was held in Montana.
  } else if (person.relation === 'father' &&
  person.events !== 'wedding' &&
  person.lastName === 'Gray' &&
  person.name !== 'Ellen' &&
  person.name !== 'Heather' &&
  person.name === 'Walter' &&
  person.day !== 'Thursday' &&
  person.day !== 'Saturday' &&
  person.gender === 'He' &&
  person.events === 'anniversary' &&
  person.state === 'Montana') {
    return true
  // The birthday girl didn’t have her party on Friday.
  // Heather, who didn’t live in Texas, was
  // Greg’s sister but her event wasn’t on Wednesday night.
  } else if (person.name === 'Heather' &&
  person.state !== 'Texas' &&
  person.state !== 'Montana' &&
  person.relation === 'sister' &&
  person.lastName === 'Bartley' &&
  person.events === 'birthday' && // 2. Rick’s last name wasn’t Bartley
  person.day !== 'Wednesday' &&
  person.day !== 'Friday' && // heather Bartley sister birthday Thursday
  person.day !== 'Saturday' &&
  person.day === 'Thursday' &&
  person.gender === 'She') {
    return true
  // 6. Walter’s event was one day earlier than the person whose last name was
  // DeForest but after the person who lived in Washington.
  // The anniversary was held in Montana.
  } else {
    return false
  }
}

function isValidSolution (solution) {
  for (var i = 0; i < allOptions.length; i++) {
    if (isValidOption(allOptions[i])) {
      console.log(allOptions[i])
    }
  }
}
isValidSolution(allOptions)

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
