import * as encounter from './encounter.js'

export class Enviroment{
    constructor(name){
        this._name=name;
        this._encounter=encounter.generate();
    }   
    stumbleUpon(){
        this._encounter=encounter.generate();
        this.pokeEncounter=this._encounter.poke();
        var interaction= this._name+" You just stumble upon ..." + this._encounter.whenEncounter();
        return interaction;
    }

    poke(){
        var pokeReturn=this.pokeEncounter.next();
        if(!pokeReturn.done){
            return pokeReturn.value;
        }
    }
}