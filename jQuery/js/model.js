

const operations= {
    add(storedValue , toAddValue){return storedValue+toAddValue;},
    subtract(storedValue , toSubtract){return storedValue - toSubtract;},
    multiply(storedValue , toMultiply){return storedValue*toMultiply;},
    divide(storedValue, toDivide){return storedValue/toDivide;},
};
const calcModel = {
    _storedValue: 0,
    _nextOperation: undefined, 
    doLastAndUpdate(operation, newVal) {
        if(newVal){
            this._storedValue =(this._nextOperation)? this._nextOperation(this._storedValue,newVal):newVal;
        }   
        this._nextOperation = operation;
    },
    clearValue() {
        this._storedValue = 0;
    }
};

export {operations,calcModel};