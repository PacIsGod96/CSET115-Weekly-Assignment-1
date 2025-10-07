
let btn = document.getElementsByClassName(`btn`); //creating a varible that gets all of the buttons and stores them into an array
let textHistory = ''; //creating an empty textHistory varibale 
let equal = ``; //creating an empty equal variable

let historyDiv = document.getElementById(`historyPage`); //vreating varible to get the historyPage div
let newNumber = false; // creating a varible to store whatever number was created before you pressed the operation and starts on false
let solved = false; // creating a varible to tell you when a problem has been solved that starts with false
for(let i =0; i < btn.length; i++){ //creating a for loop to go through the btn array to pull a specific text item
    btn[i].addEventListener(`click`, function() { //when one of the buttons is pressed it will go through the button tetxs and find the button you pressed and run the function 
        let btnText = this.textContent.trim(); //creating a varible that gets the button that was clicked and gets the text inside of it and removes any extra space and then stores it in the variable 
        let currentNum = document.getElementById(`current`); //creating a varibale to get the h1 tag that will show the current number you are typing 
        let history = document.getElementById(`history`); //creating a variable to get the p tage that will show what is going to be put into the history 
        if(!isNaN(btnText) || btnText == `.`){ //checks to see if the button that was clicked was a number or a decimal point 
            if(solved == true){ //tests to see if a problem was solved 
                currentNum.textContent = btnText; //the current number will turn into whatever button you press
                textHistory = btnText; //the text hsitory will also store the button text that was pressed
                history.textContent = textHistory; //the history p tag will show whatever is in the text history
                solved = false; //will turen the solved varible to false because it is a new problem
                newNumber = false; //will turn the new number variabl to false because it is a new problem
            }else if(newNumber == true || currentNum.textContent == `0`){ //tests to see if a new number was created or if the current number is 0 becuse once a new number is created the current number line will restart at 0
                currentNum.textContent = btnText; //will set the display number to whatever button is pressed
                textHistory = textHistory + btnText; //text hsitory will store the number and if another button is pressed it will add it onto the previous number so it donesn't replace the number completely
                history.textContent = textHistory; //the hsitory p tag will display what is in the text history
                newNumber = false; //will turn the new numbervarible to false because a new number was created amd its getting ready for a new one 
            }else{ //else if newNumber is true solved is false this will run 
                currentNum.textContent = currentNum.textContent + btnText; //the current number will display and if a new butoon is added it will add it to the previous number and not replace it 
                textHistory = textHistory + btnText; //text hsitory will store the number and if another button is pressed it will add it onto the previous number so it donesn't replace the number completely
                history.textContent = textHistory; //the hsitory p tag will display what is in the text history
            }
        }else if(btnText == `+` || btnText == `-` || btnText ==`*` || btnText == `/`){ //this test to see of the button text is an operation 
            if(solved == false){ //this will run if a problem wasnt solved
                textHistory = textHistory + ` ${btnText} `; //text history will show the number and the operation added onto it
                history.textContent = textHistory; //the history p tag will show whatever is in the text history
                newNumber = true; //after an operation is pressed newNumber will be true because a newnumber was just created 
            }else{ //if solved was true 
                textHistory = `${currentNum.textContent} ${btnText}`; //text hsitory will turn into the current number with the operation
                history.textContent = textHistory; //the hsitory p tag will display what is in the text history
                solved = false; //solved will turn false because the previous problwm was solved 
                newNumber = true; //newNumber will tuen true because a newnumber was just created
            }
        }else if(btnText.includes(`√`)){ //this will check if the square root sign is in the button
            let value = parseFloat(currentNum.textContent); //creates the variable value and will turn the text that is in current number will be turned into a number
            if(value < 0){ //if value is less then zero then this will run because you can not get the square root of zero
                currentNum.textContent = "Error"; //and Error messge will pp up on the current number line 
                textHistory = ``; // text history will restart 
            }else{ //if the value is greater then zero this will run 
                let sqResult = Math.sqrt(value); //Math.sqrt(value) will get the square root of the number and it will be stored in this varible 
                currentNum.textContent = sqResult; //the number displays the answers
                textHistory = `√(${value})`; //text history will store the square root sine and the value under it 
                history.textContent = `${textHistory} = ${sqResult}`; //the history text will show whatever is in textHistory and will show an equal sign and the answer
                let historyChild = document.createElement(`h1`); //this variable will create a new h1 tag each time
                historyChild.textContent = history.textContent; //ths will set the h1 text to the text in the history 
                historyDiv.appendChild(historyChild); //this will grab the history div and push the h1 tag into it 
                textHistory = sqResult.toString(); //this will turn the text history number back into a string 
                solved = true; //solved will be true because the equation was solved 
                newNumber = true; //newNumber is true because one was created 
            }
        }else if(btnText.includes(`x2`)){ // this will check if x2 sign is in the button 
            let value = parseFloat(currentNum.textContent); //creates a variable value and will tuen the text that is in the current number and will be turned into a number 
            let sq = value * value; //creates the varible sq and stores the answer of value multiplied by value 
            currentNum.textContent = sq; //the number display will show the answer
            textHistory = `(${value})\u00B2 `; //text history will equal the number with the 2 above it 
            history.textContent = `${textHistory} = ${sq}`; //history text will show what is in textHistory and shows an equal sign and the answer
            let historyChild = document.createElement(`h1`);  //this variable will create a new h1 tag each time
            historyChild.textContent = history.textContent; //ths will set the h1 text to the text in the history 
            historyDiv.appendChild(historyChild); //this will grab the history div and push the h1 tag into it 
            textHistory = sq.toString(); //this will turn the text history number back into a string 
            solved = true; //solved will be true because the equation was solved 
            newNumber = true; //newNumber is true because one was created 
        }else if(btnText.includes(`1/x`)){
            let value = parseFloat(currentNum.textContent);
            if(value == 0){
                currentNum.textContent = `Error`;
                textHistory = ``;
                history.textContent = `1 / 0 = Error`;
            }else{
                let rec = 1 / value;
                currentNum.textContent = rec;
                textHistory = `1 / ${value}`;
                history.textContent = `${textHistory} = ${rec}`;
                let historyChild = document.createElement(`h1`);
                historyChild.textContent = history.textContent;
                historyDiv.appendChild(historyChild);
                textHistory = rec.toString();
                solved = true;
                newNumber = true;
            }
        }else if(btnText == `%`){
            let value = parseFloat(currentNum.textContent);
            let perc = value / 100;
            currentNum.textContent = perc;
            textHistory = `${value}`;
            history.textContent = `${textHistory} = ${perc}`;
            let historyChild = document.createElement(`h1`);
            historyChild.textContent = history.textContent;
            historyDiv.appendChild(historyChild);
            textHistory = perc.toString();
            solved = true;
            newNumber = true;
        }
        else if(btnText == `=`){
            equal = eval(textHistory);
            currentNum.textContent = equal;
            history.textContent = textHistory + ` = ` + equal;
            let historyChild = document.createElement(`h1`);
            historyChild.innerHTML = history.textContent;
            historyDiv.appendChild(historyChild);
            textHistory = equal.toString();
            newNumber = true;
            solved = true;
        }else if(btnText == `⌫`){
            currentNum.textContent = currentNum.textContent.slice(0,-1);
            if(currentNum.textContent == ``){
                currentNum.textContent = `0`;
            }
        }else if(btnText == `C`){
            currentNum.textContent =currentNum.textContent.slice(0, length);
            textHistory = textHistory.slice(0, length);
            history.textContent = textHistory;
            if(currentNum.textContent == ``){
                currentNum.textContent = `0`;
                textHistory = `0`;
                history.textContent = textHistory;
            }
        }else if(btnText = `CE`){
            currentNum.textContent = `0`;
            textHistory = textHistory.trim();
            let x = textHistory.length-1;
            while(x >= 0){
                let character = textHistory[x];
                if(character == `` || character == `+` || character == `-` || character == `*` || character == `/`){
                    break;
                }
                x--;
            }
            textHistory = textHistory.slice(0, x + 1).trim();
            history.textContent = textHistory;
            newNumber = true;
        }
    })
}

function toggleHistory() { //function to show the history page 
    let historyP = document.querySelector("#historyPage"); //this varible will store the first line of css in this id
    let button = document.querySelector(".buttonMove"); //this varible will store the first line of css in this class
    let hidden = getComputedStyle(historyP).display == "none"; //this varible will grab the line of css display and turn it to none to make the div invisible by default 
    if(hidden){ // this will run if hidden is true 
        historyP.style.display = "block"; //this will change the display to block to make the div visible 
        button.textContent = "Hide History"; //this will chnage the text in the button to this 
    }else{ // this will rn if hidden is false 
        historyP.style.display = "none"; // this will turn back to not being visible 
        button.textContent = "Show History"; //this will chnage the text in the button to this 
    }
}

