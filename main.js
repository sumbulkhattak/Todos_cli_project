"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
var todoList = [];
while (true) {
    var todoActions = await inquirer_1.default.prompt([{
            message: chalk_1.default.blue("Select The Following Action"),
            name: "action",
            type: "list",
            choices: ["Add Item", "Remove Item", "Update Item", "Check Items"]
        }]);
    // For Add Item In The List:
    if (todoActions.action === "Add Item") {
        var addItem = await inquirer_1.default.prompt([{
                message: chalk_1.default.green("What Do You Want To Add In A List?"),
                type: "input",
                name: "item"
            }, {
                message: chalk_1.default.green("Are You Sure Want To Add"),
                type: "confirm",
                name: "confirmation",
            }]);
        if (addItem.confirmation === true) {
            if (addItem.item.length >= 2) {
                todoList.push(addItem.item);
            }
            else {
                console.log(chalk_1.default.red("Cannot Be Empty ,Please Enter An Item To Add In Your List"));
            }
        }
    }
    // For Remove Item In The List:
    else if (todoActions.action === "Remove Item") {
        if (todoList.length === 0) {
            console.log(chalk_1.default.red("Nothing To Remove"));
            continue;
        }
        var removeItem = await inquirer_1.default.prompt([{
                message: chalk_1.default.rgb(255, 165, 0)("Which Item Do You Want To Remove?"),
                type: "list",
                name: "item",
                choices: todoList,
            }]);
        var index = todoList.indexOf(removeItem.item);
        if (index > -1) {
            todoList.splice(index, 1);
        }
    }
    // For Update Item In The List:
    else if (todoActions.action === "Update Item") {
        if (todoList.length === 0) {
            console.log(chalk_1.default.red("Nothing To Update"));
            continue;
        }
        var updateItem = await inquirer_1.default.prompt([{
                message: chalk_1.default.cyanBright("Which Item Do You Want To Update?"),
                type: "list",
                name: "item",
                choices: todoList,
            }]);
        var updateIndex = todoList.indexOf(updateItem.item);
        if (updateIndex > -1) {
            var newItem = await inquirer_1.default.prompt([{
                    message: chalk_1.default.magenta("What's The New Item?"),
                    type: "input",
                    name: "newItem"
                }]);
            todoList[updateIndex] = newItem.newItem;
        }
    }
    // For Check Items In The List:
    else if (todoActions.action === "Check Items") {
        if (todoList.length === 0) {
            console.log(chalk_1.default.red("Nothing To Check"));
            continue;
        }
        console.log(chalk_1.default.green("Your Items: "));
        todoList.forEach(function (val) {
            console.log(val);
        });
        break;
    }
}
