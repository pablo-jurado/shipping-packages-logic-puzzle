// Step #1
// Model the data that the puzzle is made out of. What data type(s) can you use
// to represent this data? Arrays, strings, booleans, objects, etc.

var friend = {
  id: 'friend',
  name: ['Ellen', 'Heather', 'Rick', 'Walter'],
  lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  events: ['anniversary', 'birthday', 'house warming', 'wedding']
}

var father = {
  id: 'father',
  name: ['Ellen', 'Heather', 'Rick', 'Walter'],
  lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  events: ['anniversary', 'birthday', 'house warming', 'wedding']
}

var cousin = {
  id: 'cousin',
  name: ['Ellen', 'Heather', 'Rick', 'Walter'],
  lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  events: ['anniversary', 'birthday', 'house warming', 'wedding']
}

var sister = {
  id: 'sister',
  name: ['Ellen', 'Heather', 'Rick', 'Walter'],
  lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  events: ['anniversary', 'birthday', 'house warming', 'wedding']
}

// Step #2
// What logical statements can you use to model the six rules of the puzzle?
// Don't worry about whether the variables you use exist or not, just focus
// on the logic of the statements.

function eraseData (person, key, prop) {
  person[key] = person[key].filter((item) => { return item !== prop })
}
function printProp (prop) {
  console.log(friend.id, friend[prop])
  console.log(father.id, father[prop])
  console.log(cousin.id, cousin[prop])
  console.log(sister.id, sister[prop])
}

// 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The
// birthday girl didn’t have her party on Friday.
friend.name = friend.name.filter((item) => { return item !== 'Ellen' })
friend.lastName = friend.lastName.filter((item) => { return item !== 'Fairview' })

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.

// 3. Greg’s father wasn’t getting married, but his last name was Gray.
father.events = father.events.filter((item) => { return item !== 'wedding' })
father.lastName = father.lastName.filter((item) => { return item === 'Gray' })
eraseData(friend, 'lastName', 'Gray')
eraseData(sister, 'lastName', 'Gray')
eraseData(cousin, 'lastName', 'Gray')

// 4. The friend having a house warming didn’t live in Ohio.
friend.state = friend.state.filter((item) => { return item !== 'Ohio' })
friend.events = friend.events.filter((item) => { return item === 'house warming' })
eraseData(father, 'events', 'house warming')
eraseData(cousin, 'events', 'house warming')
eraseData(sister, 'events', 'house warming')

// 5. The wedding was for Greg’s cousin.
// Heather, who didn’t live in Texas, was
// Greg’s sister but her event wasn’t on Wednesday night.
cousin.events = cousin.events.filter((item) => { return item === 'wedding' })
eraseData(friend, 'events', 'wedding')
eraseData(father, 'events', 'wedding')
eraseData(sister, 'events', 'wedding')

sister.state = sister.state.filter((item) => { return item !== 'Texas' })
sister.day = sister.day.filter((item) => { return item !== 'Wednesday' })
sister.name = sister.name.filter((item) => { return item === 'Heather' })
eraseData(friend, 'name', 'Heather')
eraseData(father, 'name', 'Heather')
eraseData(cousin, 'name', 'Heather')

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
printProp('lastName')
// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington.
// The anniversary was held in Montana.

// console.log(friend, father, cousin, sister)

// Step #3
// Connect your data types with your logical statements in order to solve the
// puzzle. Use console.log to print the answers as sentences like:
