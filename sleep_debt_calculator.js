const getSleepHours = day => {
  switch(day){
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 8;
    case 'Wednesday':
      return 8;
    case 'Thursday':
      return 8;
    case 'Friday':
      return 8;
    case 'Saturday':
      return 8;
    case 'Sunday':
      return 8;
  }
}

//console.log(getSleepHours('Monday'));

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}

console.log(getIdealSleepHours());
console.log(getActualSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();


  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep! Go you!');
  } else if (actualSleepHours >= idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than expected. Don\'t sleep too much!');
  } else if (actualSleepHours <= idealSleepHours) {
    console.log('You\'re missing ' + (idealSleepHours - actualSleepHours) + ' of sleep. That\'s not enough!  Take a break and get some rest!');
  }

};

calculateSleepDebt();
