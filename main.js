// Step #1
// Model the data that the puzzle is made out of. What data type(s) can you use
// to represent this data? Arrays, strings, booleans, objects, etc.

var possFirstNames = ['Ellen', 'Heather', 'Rick', 'Walter']
var possLastNames = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var possStates = ['Ohio', 'Montana', 'Texas', 'Washington']
var possEvents = ['anniversary', 'birthday', 'house warming', 'wedding']
var possRelations = ['cousin', 'father', 'friend', 'sister']
var possDays = ['Wednesday', 'Thursday', 'Friday', 'Saturday']

var person1 = {}
var person2 = {}
var person3 = {}
var person4 = {}

/*
Step #2
What logical statements can you use to model the six rules of the puzzle?
Don't worry about whether the variables you use exist or not, just focus
on the logic of the statements.

1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The
birthday girl didn’t have her party on Friday.
if (person1.relationship !== 'friend' && person1.state !== 'Ohio') {
  person1.name = 'Ellen'
  person1.lastName = 'Fairview'
}
if (heather.day !== 'friday') {
  heather.event = 'birthday'
}
if (ellen.day !== 'friday') {
  ellen.event = 'birthday'
}

2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (person2.lastName !== 'Bartley') {
  person2.name = 'Rick'
  person2.day = 'Saturday'
  person2.lastName = 'DeForest'
}

3. Greg’s father wasn’t getting married, but his last name was Gray.
if (person3.event !== 'wedding') {
  person3.lastName = 'Gray'
  person3.relationship = 'Father'
  person3.name = 'Walter'
}

4. The friend having a house warming didn’t live in Ohio.
if (person2.state !== 'Ohio') {
  person2.relationship = 'friend'
  person2.event = 'house warming'
  person2.name = 'Rick'
}

5. The wedding was for Greg’s cousin.
Heather, who didn’t live in Texas, was
Greg’s sister but her event wasn’t on Wednesday night.

if (person1.name === 'Ellen') {
  person1.relationship = 'cousin'
  person1.event = 'wedding'
  if (person1.event === 'wedding') {
    person4.event = 'birthday'
    person4.name = 'Heather'
  }
}

if (person4.state !== 'Texas' && person4.day !== 'Wednesday') {
  person4.name = 'Heather'
  person4.relationship = 'sister'
}

6. Walter’s event was one day earlier than the person whose last name was
DeForest but after the person who lived in Washington.
The anniversary was held in Montana.
if (person2.lastName === 'DeForest' && person2.day === 'Saturday') {
  person3.day = 'Friday'
  person3.lastName = 'Gray'
  person3.relationship = 'Father'
  person3.name = 'Walter'
  person3.event = 'anniversary'
  person3.state = 'Montana'
}
*/

// Step #3
// Connect your data types with your logical statements in order to solve the
// puzzle. Use console.log to print the answers as sentences like:

// 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The
// birthday girl didn’t have her party on Friday.
if (possFirstNames.indexOf('Ellen') !== (undefined || null)) {
  person1.name = possFirstNames[possFirstNames.indexOf('Ellen')]
  possFirstNames[possFirstNames.indexOf('Ellen')] = null
  person1.lastName = possLastNames[possLastNames.indexOf('Fairview')]
  possLastNames[possLastNames.indexOf('Fairview')] = null
  person1.gender = 'She'
}

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (possFirstNames.indexOf('Rick') !== (undefined || null)) {
  person2.name = possFirstNames[possFirstNames.indexOf('Rick')]
  possFirstNames[possFirstNames.indexOf('Rick')] = null

  person2.day = possDays[possDays.indexOf('Saturday')]
  possDays[possDays.indexOf('Saturday')] = null
  person2.gender = 'He'
}

// 3. Greg’s father wasn’t getting married, but his last name was Gray.
if (possLastNames.indexOf('Gray') !== (undefined || null)) {
  person3.lastName = possLastNames[possLastNames.indexOf('Gray')]
  possLastNames[possLastNames.indexOf('Gray')] = null
  person3.relationship = possRelations[possRelations.indexOf('father')]
  possRelations[possRelations.indexOf('father')] = null
  person3.gender = 'He'
}

// 4. The friend having a house warming didn’t live in Ohio.
if (person1.relationship !== 'friend' && person3.relationship === 'father') {
  person2.relationship = possRelations[possRelations.indexOf('friend')]
  possRelations[possRelations.indexOf('friend')] = null
  person2.event = possEvents[possEvents.indexOf('house warming')]
  possEvents[possEvents.indexOf('house warming')] = null
}

// 5. The wedding was for Greg’s cousin.
// Heather, who didn’t live in Texas, was
// Greg’s sister but her event wasn’t on Wednesday night.

if (person1.name === 'Ellen') {
  person1.relationship = possRelations[possRelations.indexOf('cousin')]
  possRelations[possRelations.indexOf('cousin')] = null
  person1.event = possEvents[possEvents.indexOf('wedding')]
  possEvents[possEvents.indexOf('wedding')] = null
}

if (person4.state !== 'Texas') {
  person4.name = possFirstNames[possFirstNames.indexOf('Heather')]
  possFirstNames[possFirstNames.indexOf('Heather')] = null

  person4.relationship = possRelations[possRelations.indexOf('sister')]
  possRelations[possRelations.indexOf('sister')] = null

  person4.day = possDays[possDays.indexOf('Thursday')]
  possDays[possDays.indexOf('Thursday')] = null
  person4.gender = 'She'

  for (var i = 0; i < possEvents.length; i++) {
    if(possEvents[i] === 'birthday') {
      person4.event = possEvents[i]
      possEvents[i] = null
    }
  }
}

// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington.
// The anniversary was held in Montana.
if ((!person3.name)) {
  for (var i = 0; i < possFirstNames.length; i++) {
    if (possFirstNames[i] !== null) {
      person3.name = possFirstNames[i]
      possFirstNames[i] = null
    }
  }
}

for (var j = 0; j < possLastNames.length; j++) {
  if (possLastNames[j] === 'DeForest') {
    person2.lastName = possLastNames[j]
    possLastNames[j] = null
  }
}

person3.event = possEvents[possEvents.indexOf('anniversary')]
possEvents[possEvents.indexOf('anniversary')] = null
person3.state = possStates[possStates.indexOf('Montana')]
possStates[possStates.indexOf('Montana')] = null
person3.day = possDays[possDays.indexOf('Friday')]
possDays[possDays.indexOf('Friday')] = null

for (var k = 0; k < possLastNames.length; k++) {
  if (possLastNames[k] !== null) {
    person4.lastName = possLastNames[k]
    possLastNames[k] = null
  }
}

logAllPersons()
logData()

function logPerson (person) {
  console.log(
    person.name + ' ' + person.lastName + ' lives in ' + person.state +
    ' and is Greg\'s ' + person.relationship + '. ' + person.gender + ' had a ' +
    person.event + ' on ' + person.day + '.'
  )
}

function logAllPersons () {
  logPerson(person1)
  logPerson(person2)
  logPerson(person3)
  logPerson(person4)
}

function logData () {
  console.log('FirstNames', possFirstNames)
  console.log('LastNames', possLastNames)
  console.log('Relation', possRelations)
  console.log('States', possStates)
  console.log('Events', possEvents)
  console.log('Days', possDays)
}

// logAllPersons()
// logData()
