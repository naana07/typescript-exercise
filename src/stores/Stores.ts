import MyDispatcher from '../dispatcher/Dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
const data = {
    formdata: [],
    name: "",
    age:"",
    hobby: "music"
  }

class StoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(cb: any) {
    this.on(CHANGE_EVENT, cb);
  }
  removeChangeListener(cb: any) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  getData() {
    return data;
  }
}

const Store = new StoreClass();

  MyDispatcher.register((payload: any) => {
  const action = payload;

  switch (action.actionType) {

  case "onChangeeditingname":
      data.name = payload.value
      Store.emitChange()
      break;

  case "onChangeeditingage":
      data.age = payload.value
      Store.emitChange()
      break;

  case "onChangeeditinghobby":
      data.hobby = payload.value
      Store.emitChange()
      break;

  case "onChangedata":
      data.formdata = payload.value.now.concat({name: payload.value.name, age: payload.value.age, hobby: payload.value.hobby});
      Store.emitChange()
      break;

  default:
    break;
  }
});

export default Store;
