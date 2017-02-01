/* Loops allow you to iterate code by telling hte ocmputer how many times it should run a code block. Loops are useful for saving time and preventing repetitious tasks. */

//FOr example Instead of this scenario...
// var noLoopUser = prompt('How many times between 1-3?');

// if (noLoopUser == 1) {
// 	document.write('<br>Fruit Loops!');
// } else if  ( noLoopUser == 2) {
// 	document.write('<br>Fruit Loops!');
// 	document.write('<br>Fruit Loops!');
// } else if (noLoopUser == 3 ) {
// 	document.write('<br>Fruit Loops!');
// 	document.write('<br>Fruit Loops!');
// 	document.write('<br>Fruit Loops!');
// } else {
// 	document.write('<br>No Loops for You!');
// }

/* You can avid the above bad code, by using loops instead. for example..*/

// var loopUser = prompt ('How many tiems do you want to loop?');

// for (var i = 0; i < LoopUser; i++) {
// 	document.write('<br>Fruit Loops!');
// }

/* The most commmon type of programming loop is the for loop. It is called a for loop because it runs specified number of times. It says to itself, "for each time this condition is true, I will run until the condition stops being true". A for loop is typically writeen like this:

for (initialization; condition; iteration) {
	some function;
}

In the above, initialization is typically a variable that starts at 0 or 1. Condition is the conditional statement that is evaluated for true or false. iteration is the increment or decrement to modify the condition so that it will loop up or down. */

//For loops are often incremented
for (var i = 0; i < 10; i++) {
	document.write('<br>' + i + 'pieces of candy');
}

// For loops can be decremented as well
for (var i = 10; i > 0; i--) {
	document.write('<br>' + i + 'Bottles of Root Bear');
}

//For Loops can can count up and down by intervals.

for (var i = 0; i < 100; i += 10) {
	document.write('<br>' + i + 'Cans fo beans');
}


//Loops are particularly useful for iterating through arrays.
var menu = ['Croissant', 'Biscuit', 'Pancakes', 'Sandwich','Juice', 'Oatment', 'Fruits'];
// document.write(menu.length);
for (var i = 0; i < menu.length; i++) {
	document.write('<br>' +menu[i]);
}

/* Create a loop that counts up from 5, by increments of 2 until it reaches the number larger than 100 */

for (var i = 5; i <=100; i += 2) {
	document.write('<br>' + i + ' Pokemon');
}

/* While loops, run while a condition remains true. They continue to run until the condition evaluates the fasle. While Loops are helpful for continuing to run something, and can run perpetually, versus a for loop which typically has a set amount of times it can run. */
var playerHitPoints = 100;

while (playerHitPoints > 0) {
	document.write('<br>Your hitpoints are: ' + playerHitPoints);
	playerHitPoints -= 10;
	document.write('<br>Ouch! You got hit by a Cubone' + '<br>Your hitpoints are: ' + playerHitPoints + '<br><br>');
}

/* Do While Loops are a slight variable of a the while loop. The do while loop always runs at least once before it actually enters into the loop itself. */

var playerExp = 0;

do {
	playerExp += 10;
	document.write('You\'ve defeated a Dewgong. <br> You have earned 10xp for a total of ' + playerExp + 'xp<br><br>');
} while (playerExp < 100);








