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
    gender: 'He',
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
  },

  // {
  //   id: 'Ellen',
  //   name: 'Ellen',
  //   gender: 'She',
  //   relation: ['sister', 'cousin', 'father', 'Walter'],
  //   lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  //   state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  //   day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   events: ['anniversary', 'birthday', 'house warming', 'wedding']
  // },
  //
  // {
  //   id: 'Heather',
  //   name: 'Heather',
  //   gender: 'She',
  //   relation: ['sister', 'cousin', 'father', 'Walter'],
  //   lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  //   state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  //   day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   events: ['anniversary', 'birthday', 'house warming', 'wedding']
  // },
  //
  // {
  //   id: 'Rick',
  //   name: 'Rick',
  //   gender: 'He',
  //   relation: ['sister', 'cousin', 'father', 'Walter'],
  //   lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  //   state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  //   day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   events: ['anniversary', 'birthday', 'house warming', 'wedding']
  // },
  //
  // {
  //   id: 'Walter',
  //   name: 'Walter',
  //   gender: 'He',
  //   relation: ['sister', 'cousin', 'father', 'Walter'],
  //   lastName: ['Bartley', 'DeForest', 'Fairview', 'Gray'],
  //   state: ['Ohio', 'Montana', 'Texas', 'Washington'],
  //   day: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   events: ['anniversary', 'birthday', 'house warming', 'wedding']
  // }
]

// Step #2
// What logical statements can you use to model the six rules of the puzzle?
// Don't worry about whether the variables you use exist or not, just focus
// on the logic of the statements.

function eraseData (person, key, prop) {
  person[key] = person[key].filter((item) => { return item !== prop })
}

//
// function printProp (prop) {
//   console.log(friend.id, friend[prop])
//   console.log(father.id, father[prop])
//   console.log(cousin.id, cousin[prop])
//   console.log(sister.id, sister[prop])
// }
//
function logAll () {
  for (var i = 0; i < persons.length; i++) {
    console.log(persons[i])
  }
}

for (var i = 0; i < persons.length; i++) {
  // 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio.
  // The birthday girl didn’t have her party on Friday.
  if (persons[i].id === 'friend') {
    persons[i].name = persons[i].name.filter((item) => { return item !== 'Ellen' })
    persons[i].lastName = persons[i].lastName.filter((item) => { return item !== 'Fairview' })
  }
  // 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
  // 3. Greg’s father wasn’t getting married, but his last name was Gray.
  if (persons[i].id === 'father') {
    persons[i].lastName = persons[i].lastName.filter((item) => { return item === 'Gray' })
    persons[i].events = persons[i].events.filter((item) => { return item !== 'wedding' })
  } else {
    eraseData(persons[i], 'lastName', 'Gray')
  }
  // 4. The friend having a house warming didn’t live in Ohio.
  if (persons[i].id === 'friend') {
    persons[i].state = persons[i].state.filter((item) => { return item !== 'Ohio' })
    persons[i].events = persons[i].events.filter((item) => { return item === 'house warming' })
  } else {
    eraseData(persons[i], 'events', 'house warming')
  }
  // 5. The wedding was for Greg’s cousin.
  if (persons[i].id === 'cousin') {
    persons[i].events = persons[i].events.filter((item) => { return item === 'wedding' })
  } else {
    eraseData(persons[i], 'events', 'wedding')
  }
  // Heather, who didn’t live in Texas, was
  // Greg’s sister but her event wasn’t on Wednesday night.
  if (persons[i].id === 'sister') {
    persons[i].state = persons[i].state.filter((item) => { return item !== 'Texas' })
    persons[i].day = persons[i].day.filter((item) => { return item !== 'Wednesday' })
    persons[i].name = persons[i].name.filter((item) => { return item === 'Heather' })
  } else {
    eraseData(persons[i], 'name', 'Heather')
  }
}
// 6. Walter’s event was one day earlier than the person whose last name was
// DeForest but after the person who lived in Washington.
// The anniversary was held in Montana.

logAll()
