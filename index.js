function theBeatlesPlay(musicians, instructment) {
  var emptyArray = [];
  for (let i = 0; i <4; i++) {
   emptyArray = [...emptyArray, `${musicians[i]} plays ${instructment[i]}`];
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  for (let i =0; i < facts.length; i++){
    newFacts = [...newFacts, `${facts[i]}!!!`];
  } return newFacts;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  do{ 
    newArray = ["I love the Beatles!"]
    }
  while(0 <= number < 15){
    newArray.push("I love the Beatles!") * number;
    }
    return newArray;
}