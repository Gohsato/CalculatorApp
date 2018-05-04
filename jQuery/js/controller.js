import {operations,calcModel} from './model.js';  

const calcDisplay = {
    display(str) {
        $('#display').text(str);
    },
    clear() {
        $('#display').text('');
    }
}


$(document).ready(function () {

    let displyedNum="";

    $(".button").click((event) => {
        console.log("clicked " + $(event.currentTarget).text());

        displyedNum+=$(event.currentTarget).text();
        calcDisplay.display(displyedNum);
    })

    $(".func-button").click((event) => {
        console.log("clicked " + $(event.currentTarget).text());
        controllerSwitch($(event.currentTarget).text(),parseInt(displyedNum));
        displyedNum="";
        
    });
});


function controllerSwitch(controlStr,newVal) {
    switch (controlStr) {
        case "+":
            calcModel.doLastAndUpdate(operations.add,newVal);
            break;
        case "-":
            calcModel.doLastAndUpdate(operations.subtract,newVal);
            break;
        case "/":
            calcModel.doLastAndUpdate(operations.divide,newVal);
            break;
        case "x":
            calcModel.doLastAndUpdate(operations.multiply,newVal);
            break;    
        case "clr":
            calcModel.clearValue();
            calcDisplay.clear();
            break;
        case "=":
            calcModel.doLastAndUpdate(undefined,newVal);
            let out = parseInt(calcModel._storedValue);
            console.log(out);
            calcDisplay.display(out);
            break;

    }
}



