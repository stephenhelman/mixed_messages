//Build a message generator program using java script
//Use Git versino control
//Use command line
//Develop locally on the computer


//Phrases to be passed in to the function
const yardLine = Math.floor(Math.random() * 50);
const phrases = [
    'It\'s in the endzone! Touchdown!',
    'They are going for 2. They did it!',
    `Trying for 3 from the ${yardLine} yard line. It\'s good!`,
    'First down!',
    'Safety'
];

//randomizer function
const message = () =>  {
    const index = Math.floor(Math.random() * phrases.length)
    return phrases[index];
};

//running the function
console.log(message());
    
