//Build a message generator program using java script
//Use Git versino control
//Use command line
//Develop locally on the computer


//phrases to be passed in to the function
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


//new message generator based on entering paramenters into the function.

//declaring the arrays. they will be based on the first letter of your name and your birthday month. Game is "What is your Grinch Name?"
const firstLetter = [
    ['a', 'Rotting'], ['b', 'Nauseated'], ['c', 'Moldy'], ['d', 'Greasy'], ['e', 'Stinking'], ['f', 'Slinky'], ['g', 'Souring'],
    ['h', 'Frowning'], ['i', 'Slithering'], ['j', 'Nasty Wasty'], ['k', 'Appaling'], ['l', 'Mangled'], ['m', 'Snatched'], ['n', 'Disgraceful'],
    ['o', 'Snearing'], ['p', 'DIrty'], ['q', 'Tangled'], ['r', 'Sneaking'], ['s', 'Bruding'], ['t', 'Tomato Splotched'], ['u', 'Ramshackled'],
    ['v', 'Scowled'], ['w', 'Fibbing'], ['x', 'Naughty'], ['y', 'Grinning'], ['z', 'Plotting']
];
const birthMonth = [
    ['jan', 'Cuddly Cactus'], ['feb', 'Dump Heap'], ['mar', 'Unwashed Socks'], ['apr', 'Termite'], ['may', 'Seasick Crocodile'], ['jun', 'Dead Tomato'],
    ['jul', 'Purple Spots'], ['aug', 'Dirty Jocket'], ['sep', 'Sinful Sot'], ['oct', 'Crooked Hoss'], ['nov', 'Eel'], ['dec', 'Toadstool Sandwich'],
];

//function
const final =[];
const grinch = (letter, month) => {
    for (let i = 0; i < firstLetter.length; i++) {//iterating through array looking for the letter
        if (letter === firstLetter[i][0]) {//if the entered letter matches a letter in [i][0], the letter position
            final.push(firstLetter[i][1]);//add the name in [i][1], the name position, to the array final
            
            }
    }
    for (let i = 0; i < birthMonth.length; i++) {//iterating through the array looking for the month
        if (month === birthMonth[i][0]) {//if the entered month matches the month in [i][0], the month position
            final.push(birthMonth[i][1]);//add the name in [i][1] to the array
        }
    }
    return "Your Grinch name is: " + final.join(" ")//returning the array joined using .join("")
}

console.log(grinch('b', 'may'));

/*in the future I will add checking to see if letters were entered capitalized, and changing to lower case for the purpose of the search.
I would also like to add a checker to see if they put the month in shorthand ex: jan instead of january, or capitalized, it will format it for the function.
Would also like to add a randomizer to generate a letter and month to see all the crazy combinations.