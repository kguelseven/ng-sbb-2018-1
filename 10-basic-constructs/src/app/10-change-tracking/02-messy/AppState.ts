export class AppState {

  private _counterManual = 0;
  private _counterProgrammatic = 0;

  get counterManual() {
    // counter++
    // console.log('Getting Manual Counter: ' + counter);
    return this._counterManual;
  }

  set counterManual(value){
    this._counterManual = value;
  }

  get counterProgrammatic() {
    return this._counterProgrammatic;
  }

  set counterProgrammatic(value){
    this._counterProgrammatic = value;
  }
}


// let counter = 0;
