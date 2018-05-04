import {operations,calcModel} from './model.js';  

const calcDisplay = {
    display(str) {
        if(!str){
            $('#display').html('&nbsp');
        }else{
            $('#display').text(str);
        }
    },
    clear() {
        
        $('#display').html('&nbsp');
    }
}


$(document).ready(function () {

    let displyedNum="";

    $(".num-button").click((event) => {

        displyedNum+=$(event.currentTarget).text();
        calcDisplay.display(displyedNum);
    })

    $(".func-button").click((event) => {
        controllerSwitch($(event.currentTarget).text(),parseInt(displyedNum));
        let out = parseInt(calcModel._storedValue);
        calcDisplay.display(out);
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
            break;

    }
}



