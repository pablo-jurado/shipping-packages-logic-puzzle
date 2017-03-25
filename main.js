// Step #1
// Model the data that the puzzle is made out of. What data type(s) can you use
// to represent this data? Arrays, strings, booleans, objects, etc.
var names = ['Ellen', 'Heather', 'Rick', 'Walter']
var relations = ['friend', 'father', 'cousin', 'sister']
var lastNames = ['Bartley', 'DeForest', 'Fairview', 'Gray']
var states = ['Ohio', 'Montana', 'Texas', 'Washington']
var days = ['Wednesday', 'Thursday', 'Friday', 'Saturday']
var events = ['anniversary', 'birthday', 'house warming', 'wedding']

function Person (name, gender, lastName, relation, state, day, events) {
  this.firstName = name
  this.lastName = lastName
  this.relation = relation
  this.state = state
  this.day = day
  this.event = events
  this.gender = gender
}

var ellen = new Person('Ellen', 'She', lastNames, relations, states, days, events)
var heather = new Person('Heather', 'She', lastNames, relations, states, days, events)
var rick = new Person('Rick', 'He', lastNames, relations, states, days, events)
var walter = new Person('Walter', 'He', lastNames, relations, states, days, events)

var persons = [ellen, heather, rick, walter]

function eraseData (person, key, prop) {
  person[key] = person[key].filter((item) => { return item !== prop })
}

function logAll () {
  for (var i = 0; i < persons.length; i++) {
    console.log(persons[i])
  }
}

// 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
// 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
// 3. Greg’s father wasn’t getting married, but his last name was Gray.
// 4. The friend having a house warming didn’t live in Ohio.
// 5. The wedding was for Greg’s cousin. Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
// 6. Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington. The anniversary was held in Montana.

function filterPersons (personArr) {
  for (var i = 0; i < personArr.length; i++) {
    // 1. Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio.
    if (personArr[i].firstName === 'Ellen') {
      personArr[i].lastName = personArr[i].lastName.filter((item) => { return item === 'Fairview' })
      personArr[i].state = personArr[i].state.filter((item) => { return item !== 'Ohio' })
    } else {
      eraseData(personArr[i], 'lastName', 'Fairview')
    }
    // The birthday girl didn’t have her party on Friday
    if (personArr[i].gender === 'He') {
      eraseData(personArr[i], 'event', 'birthday')
    }
    // 2. Rick’s last name wasn’t Bartley but his event was on Saturday night.
    if (personArr[i].firstName === 'Rick') {
      personArr[i].lastName = personArr[i].lastName.filter((item) => { return item !== 'Bartley' })
      personArr[i].day = personArr[i].day.filter((item) => { return item === 'Saturday' })
    } else {
      eraseData(personArr[i], 'day', 'Saturday')
    }
    // 3. Greg’s father wasn’t getting married, but his last name was Gray.
    if (personArr[i].gender === 'She') {
      eraseData(personArr[i], 'lastName', 'Gray')
    }

    // Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
    if (personArr[i].firstName === 'Heather') {
      personArr[i].relation = personArr[i].relation.filter((item) => { return item === 'sister' })
      personArr[i].state = personArr[i].state.filter((item) => { return item !== 'Texas' })
      personArr[i].day = personArr[i].day.filter((item) => { return item !== 'Wednesday' })
    } else {
      eraseData(personArr[i], 'relation', 'sister')
    }
    // Heather is sister, Ellen is not friend and can not be father so....
    // The wedding was for Greg’s cousin.
    if (personArr[i].firstName === 'Ellen') {
      personArr[i].relation = personArr[i].relation.filter((item) => { return item === 'cousin' })
      personArr[i].event = personArr[i].event.filter((item) => { return item === 'wedding' })
    } else {
      eraseData(personArr[i], 'relation', 'cousin')
      eraseData(personArr[i], 'event', 'wedding')
    }
    // The wedding was for Greg’s cousin (Ellen). The birthday girl(Heather) didn’t have her party on Friday.
    // Heather birthday wasn't on Friday or Wednesday. Rick’s was on Saturday so...
    if (personArr[i].firstName === 'Heather') {
      personArr[i].event = personArr[i].event.filter((item) => { return item === 'birthday' })
      personArr[i].day = personArr[i].day.filter((item) => { return item !== 'Friday' })
    } else {
      eraseData(personArr[i], 'event', 'birthday')
      eraseData(personArr[i], 'day', 'Thursday')
    }
    // Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington
    // so Walter is not DeForest and neither of those lived in Washington
    // The only options are Wednesday and Friday (Heather/Thursday , Rick/Saturday) and it can't be Wednesday(day earlier and after) so is Friday
    if (personArr[i].firstName === 'Walter') {
      personArr[i].lastName = personArr[i].lastName.filter((item) => { return item !== 'DeForest' })
      personArr[i].state = personArr[i].state.filter((item) => { return item !== 'Washington' })
      personArr[i].day = personArr[i].day.filter((item) => { return item === 'Friday' })
    } else {
      eraseData(personArr[i], 'day', 'Friday')
    }
    // 6. Walter’s event was one day earlier than the person whose last name was DeForest
    // Now we know that Rick is DeForest so the Father is Walter Gray
    // so if Rick didn’t live in Ohio, Montana, or Washington
    if (personArr[i].firstName === 'Rick') {
      personArr[i].lastName = personArr[i].lastName.filter((item) => { return item === 'DeForest' })
      personArr[i].relation = personArr[i].relation.filter((item) => { return item === 'friend' })
      personArr[i].event = personArr[i].event.filter((item) => { return item === 'house warming' })
      personArr[i].state = personArr[i].state.filter((item) => { return item === 'Texas' })
    } else {
      eraseData(personArr[i], 'lastName', 'DeForest')
      eraseData(personArr[i], 'state', 'Texas')
    }
    if (personArr[i].firstName === 'Walter') {
      personArr[i].lastName = personArr[i].lastName.filter((item) => { return item === 'Gray' })
      personArr[i].relation = personArr[i].relation.filter((item) => { return item === 'father' })
      personArr[i].event = personArr[i].event.filter((item) => { return item === 'anniversary' })
      personArr[i].state = personArr[i].state.filter((item) => { return item === 'Montana' })
    } else {
      eraseData(personArr[i], 'lastName', 'Gray')
    }
    // The anniversary was held in Montana.
    if (personArr[i].firstName === 'Ellen' || personArr[i].firstName === 'Heather') {
      personArr[i].state = personArr[i].state.filter((item) => { return item !== 'Montana' })
    }
    if (personArr[i].firstName === 'Heather') {
      personArr[i].state = personArr[i].state.filter((item) => { return item !== 'Washington' })
    }
  }
}

filterPersons(persons)

logAll()
