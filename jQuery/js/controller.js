import { operations, calcModel } from './model.js';

const calcDisplay = {
    onMainDisplay(str) {
        console.log(str);
        $('#display').text(str);
    },
    clearMain() {
        $('#display').text("0");
    },
    updateHistoryDisplay(str) {
        $('#history').text((i, currentText) => {
            return currentText + str;
        });
    },
    clearHistory() {
        $('#history').fadeOut("slow");
        $('#history').html("&nbsp");
        $('#history').fadeIn();

    }

}

$(document).ready(function () {

    let displyedNum = "";
    let clearNext = false;

    $(".num-button").click((event) => {
        displyedNum += $(event.currentTarget).text();
        calcDisplay.onMainDisplay(displyedNum);
    });

    $(".func-button").click((event) => {
        updateCalc($(event.currentTarget).text(), parseInt($('#display').text()));
        displyedNum = "";
    });

    $(".num-button, .func-button").on("mousedown", (event) => {
        $(event.currentTarget).addClass("active-button");
    }).on("mouseup mouseleave", (event) => {
        $(event.currentTarget).removeClass("active-button");
    });

});


function updateCalc(controlStr, newVal) {
    switch (controlStr) {
        case "+":
            calcModel.doLastAndUpdate(operations.add, newVal);

            break;
        case "-":
            calcModel.doLastAndUpdate(operations.subtract, newVal);
            break;
        case "/":
            calcModel.doLastAndUpdate(operations.divide, newVal);

            break;
        case "x":
            calcModel.doLastAndUpdate(operations.multiply, newVal);
            break;
        case "ce":
            calcDisplay.clearMain();
            break;
        case "c":
            calcModel.clearValue();
            calcDisplay.clearMain();
            calcDisplay.clearHistory();
            break;
        case "=":
            calcModel.doLastAndUpdate(undefined, newVal);
            calcDisplay.updateHistoryDisplay(parseInt(newVal) + " = " + parseInt(calcModel.storedValue));
            calcDisplay.clearHistory();
            calcDisplay.onMainDisplay(parseInt(calcModel.storedValue));
            break;
    }

    if (controlStr === "+" || controlStr === "-" || controlStr === "/" || controlStr === "x") {
        console.log(controlStr);
        calcDisplay.updateHistoryDisplay(parseInt(newVal) + " " + controlStr + " ");
        calcDisplay.onMainDisplay(parseInt(calcModel.storedValue));

    }
}