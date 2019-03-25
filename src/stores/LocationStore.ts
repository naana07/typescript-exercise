import MyDispatcher from '../dispatcher/Dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let nowlocation = {location: "/"}

class StoreClass extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  addChangeListener(cb: any) {
    this.on(CHANGE_EVENT, cb)
  }
  removeChangeListener(cb: any) {
    this.removeListener(CHANGE_EVENT, cb)
  }
  getLocation() {
    return nowlocation;
  }
}

const LocationStore = new StoreClass();

MyDispatcher.register((payload: any) => {
  const action = payload;

  switch (action.actionType) {

    case "onChangelocation":
    nowlocation.location = payload.value
    LocationStore.emitChange()
    break;

    default:
    break;

  }
})

export default LocationStore
