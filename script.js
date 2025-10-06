let btn = document.getElementsByClassName(`btn`)
let textHistory = ''
let equal = ``
let newNumber = false
let solved = false
for(let i =0; i < btn.length; i++){
    btn[i].addEventListener(`click`, function() {
        let btnText = this.textContent.trim()
        let currentNum = document.getElementById(`current`)
        let history = document.getElementById(`history`)
        if(!isNaN(btnText) || btnText == `.`){
            if(solved == true){
                currentNum.textContent = btnText
                textHistory = btnText
                history.textContent = textHistory
                solved = false
                newNumber = false
            }else if(newNumber == true || currentNum.textContent == `0`){
                currentNum.textContent = btnText 
                textHistory = textHistory + btnText
                history.textContent = textHistory
                newNumber = false
            }else{
                currentNum.textContent = currentNum.textContent + btnText
                textHistory = textHistory + btnText
                history.textContent = textHistory
            }
        }else if(btnText == `+` || btnText == `-` || btnText ==`*` || btnText == `/`){
            if(solved == false){
                textHistory = textHistory + ` ${btnText} `
                history.textContent = textHistory
                newNumber = true
            }else{
                textHistory = `${currentNum.textContent} ${btnText}`
                history.textContent = textHistory
                solved = false
                newNumber = true
            }
        }else if(btnText == `=`){
            equal = eval(textHistory)
            currentNum.textContent = equal
            history.textContent = textHistory + ` = `
            textHistory = equal.toString();
            newNumber = true
            solved = true
        }      
    })
}

function toggleHistory() {
    let historyP = document.querySelector("#historyPage");
    let button = document.querySelector(".buttonMove")
    let hidden = getComputedStyle(historyP).display == "none"

    if(hidden){
        historyP.style.display = "block"
        button.textContent = "Hide History"
    }else{
        historyP.style.display = "none"
        button.textContent = "Show History"
    }
}