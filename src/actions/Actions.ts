import MyDispatcher from '../dispatcher/Dispatcher';

const ActionCreaters = {
onChangeeditingname(testValue: string){
  MyDispatcher.dispatch({
    actionType: "onChangeeditingname",
    value: testValue
  });
},

onChangeeditingage(testValue: string){
  MyDispatcher.dispatch({
    actionType: "onChangeeditingage",
    value:testValue
  });
},

onChangeeditinghobby(testValue: string){
  MyDispatcher.dispatch({
    actionType: "onChangeeditinghobby",
    value:testValue
  });
},

onChangelocation(testValue: string){
  MyDispatcher.dispatch({
    actionType: "onChangelocation",
    value:testValue
  });
},

onChangedata(nowformdata: any, newname: string, newage: any, newhobby: string){
  MyDispatcher.dispatch({
    actionType: "onChangedata",
    value: {now: nowformdata, name: newname, age: newage, hobby: newhobby}
  });
}
}

export default ActionCreaters
