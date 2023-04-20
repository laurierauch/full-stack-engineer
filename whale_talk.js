//const input = "Don\'t dream it, be it";
const input = "turpentine and turtles";

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(input[i]);
  //console.log('i is ' + i);
  if(input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (input[i] === vowels[vowelIndex]) {
      //console.log(input[i]);
      resultArray.push(input[i]);
      //console.log(resultArray);
    }
  }
}

let resultString = resultArray.join('');

console.log(resultString);

