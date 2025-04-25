# Rock Paper Scissors Game

This is a simple Rock-Paper-Scissors game to play with computer with a js logic and DOM manipulations for game UI.

**The code structure:**  
Determining the player's points  
Determine computer points  
Determine round number  

By pressing one of the 3 buttons, we start the round with the button selection  

Then see what is the number of the round (function)  

If < 5:  

Call computer selection (function)  
Call round results determination (function)  
	Compare player and computer selections and return result text  
Update points depending on the result (function)  
	If the player wins - increase the player's points  
	If comp - comp  
Display round results  
Update the total score  

If >= 5:  

Call end of game (function)  
	Write who won  
	Disable previous buttons  
	Add Play Again button  
	Call game restart if you clicked Play Again (function)  
		Zero the results  
		Update scores and rounds  
		Enable buttons  
         Again listening for click any button  