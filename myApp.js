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

var createAndSaveP = function (done) {
  var mary = new Person({
    name: "Mary Jones", age: 20, favoriteFoods: ["pizza", "pasta"]});
  mary.save((err,data)=>{
    if (err) return console.error(err);
    done(null, data);
  })
}
createAndSaveP((err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success");
})
const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

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
