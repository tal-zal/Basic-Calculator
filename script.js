var evaluateStringToPrint = document.querySelector(".numberContent").textContent;
var bracketCheck = "left";

function buttonHandler(element){
    let buttonID = element.srcElement.id;
    let evaluateString = evaluateStringToPrint;

    if (evaluateString == "ERROR"){
        evaluateString = "";
    }

    if (buttonID == "one"){
        evaluateString += "1";
    } else if (buttonID == "two"){
        evaluateString += "2";
    } else if (buttonID == "two"){
        evaluateString += "2";
    } else if (buttonID == "three"){
        evaluateString += "3";
    } else if (buttonID == "four"){
        evaluateString += "4";
    } else if (buttonID == "five"){
        evaluateString += "5";
    } else if (buttonID == "six"){
        evaluateString += "6";
    } else if (buttonID == "seven"){
        evaluateString += "7";
    } else if (buttonID == "eight"){
        evaluateString += "8";
    } else if (buttonID == "nine"){
        evaluateString += "9";
    } else if (buttonID == "zero"){
        evaluateString += "0";
    } else if (buttonID == "add"){
        evaluateString += "+";
    } else if (buttonID == "subtract"){
        evaluateString += "-";
    } else if (buttonID == "multiply"){
        evaluateString += "*";
    } else if (buttonID == "divide"){
        evaluateString += "/";
    } else if (buttonID == "decimal"){
        evaluateString += ".";
    }else if (buttonID == "clear"){
            evaluateString = "";
    } else if (buttonID == "equals"){
        try {
            var evaluateStringTemp = eval(evaluateString);
            if (evaluateStringTemp == "Infinity"){
                evaluateString = "ERROR";
            } else {
                evaluateString = evaluateStringTemp;
            }
        } catch(e){
            evaulateString = "ERROR";
        }
    } else if (buttonID == "brackets"){
        if (bracketCheck == "left"){
            evaluateString += "(";
            bracketCheck = "right";
        } else if (bracketCheck == "right"){
            evaluateString += ")";
            bracketCheck = "left";
        }
    }
    document.querySelector(".numberContent").textContent = evaluateString;
    evaluateStringToPrint = evaluateString;
}

function backspaceHandler(){
    let evaluateString = evaluateStringToPrint;
    let lastCharacter = evaluateString.charAt(evaluateString.length-1);

    if (lastCharacter == ")"){
        bracketCheck = "right";
    }
    if (lastCharacter == "("){
        bracketCheck = "left";
    }

    evaluateString = evaluateString.substring(0, evaluateString.length-1);
    document.querySelector(".numberContent").textContent = evaluateString;
    evaluateStringToPrint = evaluateString;
}

var allButtons = document.getElementsByClassName("button");
var buttonDivs = Array.prototype.filter.call(allButtons, function(allButtons){
    return allButtons.nodeName === 'DIV';
  });

//add listener to each button
buttonDivs.forEach(element => {
    element.addEventListener("click", buttonHandler);
})
//add listener to backspace button
document.querySelector(".delete").addEventListener("click", backspaceHandler);