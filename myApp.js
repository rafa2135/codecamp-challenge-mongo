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
mongoose.set('useFindAndModify', false);
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
    console.log("success creating multiple people",data);
})

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, found)=>{
    if (err) 
      return console.log(err);
    else
      done(null, found);
  })  
};
findPeopleByName("John Doe", (err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success we found ",data);
})

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, found)=>{
    if (err) 
      return console.log(err);
    else
      done(null, found);
  })
};

findOneByFood("hamburger", (err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success we found ",data);
})

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, found)=>{
    if (err) 
      return console.log(err);
    else
      done(null, found);
  })
};
findPersonById("6764bb2132683a3a954df011",(err,data)=>{
  if(err)
    console.log(err);
  else
    console.log("success we found ID 6764bb2132683a3a954df011 ",data);
})

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, found)=>{
    if (err) 
      return console.log(err);
    else{
      found.favoriteFoods.push(foodToAdd);
      found.save((err,data)=>{
        if (err) 
          return console.log(err);
        else
          done(null, data);
      })
    }
  })
};

findEditThenSave("6764bb2132683a3a954df011", (err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success we added hamburger to ID 6764bb2132683a3a954df011 ",data);
})

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, found)=>{
    if (err)
      return console.log(err);
    else
      done(null, found);
  })  
};
findAndUpdate("Bob Smith", (err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success we updated Bob Smith ",data);
})

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, found)=>{
    if (err)
      return console.log(err);
    else
      done(null, found);
  })
};

removeById("6764bb2132683a3a954df012", (err, data)=>{
  if (err)
      console.log(err);
  else
    console.log("success we removed ID 6764bb2132683a3a954df012 ",data);
})

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
