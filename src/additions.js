export const print=(...args)=>console.log(args[0]+": "+args[1]);

export const INPUT_OPTIONS = Symbol("input_options");

export var options={
    _intro:"You can type",
    [INPUT_OPTIONS]:["left","rigth","up","down","help"],
    outpoutOptions(){
        this[INPUT_OPTIONS].forEach(f =>
                                addToOutput(this._intro+" "+f));
    }
}