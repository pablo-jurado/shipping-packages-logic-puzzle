// Step #1
// Model the data that the puzzle is made out of. What data type(s) can you use
// to represent this data? Arrays, strings, booleans, objects, etc.
var persons = [
  {
    id: 'friend',
    gender: null,
    name: ['Ellen', 'Heather', 'Rick', 'Walter'],
    lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
    state: ['Ohio', 'Montana', 'Texas', 'Washington'],
    day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    events: ['anniversary', 'birthday', 'house warming', 'wedding']
  },

  {
    id: 'father',
    gender : 'He',
    name: ['Ellen', 'Heather', 'Rick', 'Walter'],
    lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
    state: ['Ohio', 'Montana', 'Texas', 'Washington'],
    day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    events: ['anniversary', 'birthday', 'house warming', 'wedding']
  },

  {
    id: 'cousin',
    gender: null,
    name: ['Ellen', 'Heather', 'Rick', 'Walter'],
    lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
    state: ['Ohio', 'Montana', 'Texas', 'Washington'],
    day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    events: ['anniversary', 'birthday', 'house warming', 'wedding']
  },

  {
    id: 'sister',
    gender: 'She',
    name: ['Ellen', 'Heather', 'Rick', 'Walter'],
    lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
    state: ['Ohio', 'Montana', 'Texas', 'Washington'],
    day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
    events: ['anniversary', 'birthday', 'house warming', 'wedding']
  }
]

// Step #2
// What logical statements can you use to model the six rules of the puzzle?
// Don't worry about whether the variables you use exist or not, just focus
// on the logic of the statements.

function eraseData (person, key, prop) {
  person[key] = person[key].filter((item) => { return item !== prop })
}

function logAll() {
  for (var i = 0; i < persons.length; i++) {
    console.log(persons[i])
  }
}

// 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio.
// The birthday girl didn’t have her party on Friday.
for (var i = 0; i < persons.length; i++) {
  if (persons[i].id === 'friend') {
    persons[i].name = persons[i].name.filter((item) => { return item !== 'Ellen' })
    persons[i].lastName = persons[i].lastName.filter((item) => { return item !== 'Fairview' })
  }
}

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.

// 3. Greg’s father wasn’t getting married, but his last name was Gray.
for (var i = 0; i < persons.length; i++) {
  if (persons[i].id === 'father') {
    persons[i].events = persons[i].events.filter((item) => { return item !== 'wedding' })
    persons[i].lastName = persons[i].lastName.filter((item) => { return item === 'Gray' })
  } else {
    eraseData(persons[i], 'lastName', 'Gray')
  }
}

// 4. The friend having a house warming didn’t live in Ohio.
for (var i = 0; i < persons.length; i++) {
  if (persons[i].id === 'friend') {
    persons[i].state = persons[i].state.filter((item) => { return item !== 'Ohio' })
    persons[i].events = persons[i].events.filter((item) => { return item === 'house warming' })
  } else {
    eraseData(persons[i], 'events', 'house warming')
  }
}

// 5. The wedding was for Greg’s cousin.
// Heather, who didn’t live in Texas, was
// Greg’s sister but her event wasn’t on Wednesday night.

for (var i = 0; i < persons.length; i++) {
  if (persons[i].id === 'cousin') {
    persons[i].events = persons[i].events.filter((item) => { return item === 'wedding' })
  } else {
    eraseData(persons[i], 'events', 'wedding')
  }
}

for (var i = 0; i < persons.length; i++) {
  if (persons[i].id === 'sister') {
    persons[i].state = persons[i].state.filter((item) => { return item !== 'Texas' })
    persons[i].events = persons[i].events.filter((item) => { return item !== 'Wednesday' })
    persons[i].name = persons[i].name.filter((item) => { return item === 'Heather' })
  } else {
    eraseData(persons[i], 'name', 'Heather')
  }
}

// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington.
// The anniversary was held in Montana.

logAll()

// Step #3
// Connect your data types with your logical statements in order to solve the
// puzzle. Use console.log to print the answers

// Ellen Fairview didn’t live in Ohio.

// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.

// The birthday girl didn’t have her party on Friday.

// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington.
// The anniversary was held in Montana.
