let a=Math.floor(Math.random()*100)+1;
let c=1,count=0;
console.log("Welcome to the number guessing game. Here you can guess the number. If you get 10 chances to guess a number right.");
console.log("The rule of the game:\n 1) The number ranges from 1 to 100.\m2) Guessing Strings is not appreciated.\n\n");
 let n=prompt("Guess the number:");
while(c!=0||count!=10){
 
  if(n==a){
    if(count==0){
      
    console.log("Bingo, you got the number in the first try.");
    } else if(count<5){
      console.log("Hurray! You got it. And you got it within",count," tries.")
    }else{
      console.log("You got it.");
    }
    c=0;
    break;
  }
  else{
    if(n>a){
      n=prompt("Try a lower guess.");
      count++;
    }else if(n<a){
      n=prompt("Try a higher guess.");
      count++;
    }
  }
}
if(count>=10){
  console.log("Sorry, you weren't able to guess the number.");
}
