function gradeAvg(gradeArry) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < gradeArry.length; i++) {
        sum += gradeArry[i];
    }
    avg = sum / gradeArry.length;
    return avg;
}
function gradeLetter(gradeAvg) {
    letter = "";
    if (gradeAvg >= 90) {
        letter = "A";
    } else if (gradeAvg >= 80) {
        letter = "B";
    } else if (gradeAvg >= 70) {
        letter = "C";
    } else if (gradeAvg >= 60) {
        letter = "D";
    } else if (gradeAvg < 60) {
        letter = "F";
    }
    return letter;
}
let grades = [56, 76, 87, 87, 96, 38, 56, 34, 76];
let avg = gradeAvg(grades);
let gradeLet = gradeLetter(avg);
console.log(avg, gradeLet);


moneyInBank = 300;
function bankManager(option = "showBalance", amount = 0) {
    if (option == "deposit" && amount > 0) {
        moneyInBank += amount;
        console.log(`Balance: ${moneyInBank}`);
    } else if (option == "withdrawal" && amount <= moneyInBank) {
        moneyInBank -= amount;
        console.log(`Balance: ${moneyInBank}`);
    } else if (option == "showBalance" && amount == 0) {
        console.log(`Balance: ${moneyInBank}`);
    } else {
        console.log("ERROR");
    }
}

bankManager("deposit", 100);
bankManager("withdrawal", 250);
bankManager("withdrawal", 250);
bankManager();
bankManager(2000);


let toDoList = [];
function toDo(action = "check", listOfItems, itemToAdd = "") {
    if (action == "add") {
        listOfItems.push(itemToAdd);
        for (let i = 0; i < listOfItems.length; i++) {
            console.log(listOfItems[i]);
        }
    } else if (action == "remove") {
        for (let i = 0; i < listOfItems.length; i++) {
            if (itemToAdd === listOfItems[i]) {
                listOfItems.splice(i, 1);
            }
        }
        for (let i = 0; i < listOfItems.length; i++) {
            console.log(listOfItems[i]);
        }
    } else if (action == "check" && itemToAdd == "") {
        for (let i = 0; i < listOfItems.length; i++) {
            console.log(listOfItems[i]);
        }
    } else {
        console.log("ERROR");
    }
}

toDo("add", toDoList, "code");
toDo("add", toDoList, "study");
toDo("add", toDoList, "watch videos");
toDo("add", toDoList, "sleep");
toDo("remove", toDoList, "sleep");


function tempConverter(temp, type) {
    if (type == "F") {
        console.log(`C: ${(temp - 32) * 5/9}`)
        console.log(`K: ${(temp - 32) * 5 / 9 + 273.15}`)
    } else if (type == "C") {
        console.log(`F: ${(temp * 9/5) + 32}`)
        console.log(`K: ${temp + 273.15}`)
    } else if (type == "K") {
        console.log(`F: ${(temp - 273.15) * 1.8 + 32}`)
        console.log(`C: ${temp - 273.15}`)
    } else {
        console.log("ERROR")
    }
}

tempConverter(76, "F");
tempConverter(39, "C");
tempConverter(523, "K");