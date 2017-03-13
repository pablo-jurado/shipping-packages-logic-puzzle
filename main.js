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

// Step #2
// What logical statements can you use to model the six rules of the puzzle?
// Don't worry about whether the variables you use exist or not, just focus
// on the logic of the statements.

// 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The
// birthday girl didn’t have her party on Friday.
if (person1.relationship !== 'friend' && peron1.state !== 'Ohio') {
  person1.name = 'Ellen'
  person1.lastName = 'Fairview'
}
if (heather.day !== 'friday') {
  heather.event = 'birthday'
}
if (ellen.day !== 'friday') {
  ellen.event = 'birthday'
}

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (person2.lastName !== 'Bartley') {
  person2.name = 'Rick'
  person2.day = 'Saturday'
}

// 3. Greg’s father wasn’t getting married, but his last name was Gray.
if (person3.event !== 'wedding') {
  person3.lastName = 'Gray'
  person3.relationship = 'Father'
}

// 4. The friend having a house warming didn’t live in Ohio.


// 5. The wedding was for Greg’s cousin.
// Heather, who didn’t live in Texas, was
// Greg’s sister but her event wasn’t on Wednesday night.

if (person4.state !== 'Texas' && person4.day !== 'Wednesday') {
  person4.name = 'Heather'
  person4.relationship = 'sister'
}

// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington. The anniversary was
// held in Montana.






// Step #3
// Connect your data types with your logical statements in order to solve the
// puzzle. Use console.log to print the answers as sentences like:
