
//declaring variables
const name = 'Mitch Cuckovich';
let age = 25;
const birthday = 'January 24';
let detroitGC = true;
let lifeEvents = ['I was born in Michigan.', 'I went to Hope College', 
'I went to junior Olympics when I was 10 years olf. I placed 14th in the nation in the 800 meter event',
"I'm a graduate of the fron-end bootcamp."];

//boolean if else statement
if(detroitGC = true){
    console.log("My name is ", name, " and I am a student at Grand Circus in Detroit, Michigan. I am currently ", 
    age, " years old and my birthday is on ", birthday, ".");
}else{
    console.log("My name is ", name, " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ",
    age, " years old and my birthday is ", birthday, ".");
}

//for loop for lifeEvents array to print out single lines of array.
for(let i=0; i<= lifeEvents.length -1; i++){
    console.log(lifeEvents[i])
}

//while loop with counter to randomly generate the number 5.
let counter= 0;
while(true){
    
    let randomNum = Math.floor(Math.random() *11 );

    if(randomNum === 5){
        console.log(randomNum, " === 5. It took ", counter, " iterations to randomly generate the number 5.")
        break;
    }else if (randomNum > 5){
        counter++;
        console.log(randomNum, " !== 5");
    }else{
        counter++;
        console.log(randomNum, ' !== 5');
    }
}
