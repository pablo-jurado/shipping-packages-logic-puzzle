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
  var nameIndex = possFirstNames.indexOf('Ellen')
  person1.name = possFirstNames[nameIndex]
  possFirstNames[nameIndex] = null
  var lastNameIndex = possLastNames.indexOf('Fairview')
  person1.lastName = possLastNames[lastNameIndex]
  possLastNames[lastNameIndex] = null
}
console.log(person1);

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (possFirstNames.indexOf('Rick') !== (undefined || null)) {
  var nameIndex = possFirstNames.indexOf('Rick')
  person2.name = possFirstNames[nameIndex]
  possFirstNames[nameIndex] = null

  var dayIndex = possDays.indexOf('Saturday')
  person2.day = possDays[dayIndex]
  possDays[dayIndex] = null
}
console.log(person2);

// 3. Greg’s father wasn’t getting married, but his last name was Gray.
if (possLastNames.indexOf('Gray') !== (undefined || null)) {
  var lastNameIndex = possLastNames.indexOf('Gray')
  person3.lastName = possLastNames[lastNameIndex]
  possLastNames[lastNameIndex] = null
  var relationIndex = possRelations.indexOf('father')
  person3.relationship = possRelations[relationIndex]
  possRelations[relationIndex] = null
}
console.log(person3);
console.log(possRelations, possFirstNames, possLastNames);


// 4. The friend having a house warming didn’t live in Ohio.
if (person1.relationship !== 'friend' && person3.relationship === 'father') {
  var indexRelation = possRelations.indexOf('friend');
  person2.relationship = possRelations[indexRelation]
  possRelations[indexRelation] = null
  var indexEvent = possEvents.indexOf('house warming')
  person2.event = possEvents[indexEvent]
  possEvents[indexEvent] = null
}
console.log(person2);

// 5. The wedding was for Greg’s cousin.
// Heather, who didn’t live in Texas, was
// Greg’s sister but her event wasn’t on Wednesday night.

if (person1.name === 'Ellen') {
  var indexRelation = possRelations.indexOf('cousin')
  person1.relationship = possRelations[indexRelation]
  possRelations[indexRelation] = null
  var indexEvent = possEvents.indexOf('wedding')
  person1.event = possEvents[indexEvent]
  possEvents[indexEvent] = null
}

function logPerson(person) {
  console.log(
    person.name + ' ' + person.lastName + ' lives in ' + person.state +
    ' and is Greg\'s ' + person.relationship + '. She had a ' +
    person.event + ' on ' + person.day +  '.'
  );
}
logPerson(person1);
