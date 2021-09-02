const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}
const acceptBegrudgingly = (veg) => {
      console.log(`Ok, I guess I will eat some ${veg}.`);
}

// Write your code here:
function declineEverything(arr){
  arr.forEach(politelyDecline); // Didn't realize you could even do this. Neat, but may be hard to understand for some people.
}

declineEverything(veggies);

function acceptEverything(arr){
  arr.forEach(acceptBegrudgingly);
}

acceptEverything(veggies);
