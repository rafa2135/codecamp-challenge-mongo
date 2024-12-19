require('dotenv').config();
const e = require('express');
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PersonSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
})
const Person = mongoose.model('Person', PersonSchema);

mongoose.connect(process.env.MONGO_URI, 
  {useNewUrlParser: true, useUnifiedTopology: true});

const createAndSavePerson = function (done) {
  var mary = new Person({
    name: "Mary Jones", age: 20, favoriteFoods: ["pizza", "pasta"]});
  mary.save((err,data)=>{
    if (err) return console.error(err);
    else
    done(null, data);
  })
}
createAndSavePerson((err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success",data);
})
//const createAndSavePerson = (done) => {
//  done(null /*, data*/);
//};

var arrayOfPeople=[
  {
    name: "Mary Jones", age: 20, favoriteFoods: ["pizza", "pasta"]
  },
  {
    name: "John Doe", age: 30, favoriteFoods: ["hamburger", "hot dogs"]
  },
  {
    name: "Bob Smith", age: 40, favoriteFoods: ["hamburger", "hot dogs"]
  }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data)=> {
    if (err) return console.log(err);
    done(null, data);    
  })  
};
createManyPeople(arrayOfPeople, (err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success",data);
})

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
