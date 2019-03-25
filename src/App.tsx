import * as React from 'react';
import Store from './stores/Stores'
import LocationStore from './stores/LocationStore'
import ActionCreaters from './actions/Actions'
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Form from './Form'
import Data from './Data'
import { string, number } from 'prop-types';

interface AppState {
  name: string
  age: any
  hobby: string
  formdata: any
  location: string
}

const Home = () => (
  <div>
  <h2>
  Home
  </h2>
  </div>
)

export default class App extends React.Component<{}, AppState>{
constructor(props: any) {
  super(props);
  this.state = {
    name: "",
    age: "",
    hobby: "music",
    formdata: [],
    location:"/"
    }
    
    this.handleChangelocation = this.handleChangelocation.bind(this)
    this.changedata = this.changedata.bind(this)
    this.handleChangeeditingname = this.handleChangeeditingname.bind(this)
    this.handleChangeeditingage = this.handleChangeeditingage.bind(this)
    this.handleChangeeditinghobby = this.handleChangeeditinghobby.bind(this)
}

componentDidMount() {
  Store.addChangeListener(() => {
    this.setState({...this.state, name: Store.getData().name, age: Store.getData().age, hobby: Store.getData().hobby, formdata: Store.getData().formdata}
  )})
  LocationStore.addChangeListener(() => {
    this.setState({...this.state, location: LocationStore.getLocation().location}
  )})
};

handleChangeeditingname(name: string) {
  ActionCreaters.onChangeeditingname(name)
}

handleChangeeditingage(age: string) {
  ActionCreaters.onChangeeditingage(age)
}

handleChangeeditinghobby(hobby: string) {
  ActionCreaters.onChangeeditinghobby(hobby)
}

handleChangelocation() {
  ActionCreaters.onChangelocation(window.location.pathname)
}

changedata(e: any){
  e.preventDefault()
  ActionCreaters.onChangedata(this.state.formdata, this.state.name, this.state.age, this.state.hobby)
}

render() {
    return(
      <Router>
        <div className="topnav" id="myTopnav">
          <ul>
          <li onClick={this.handleChangelocation}><Link to="/" className={this.state.location==="/" ? "active" : "" }>Home</Link></li>
          <li onClick={this.handleChangelocation}><Link to="/data" className={this.state.location==="/data" ? "active" : ""}>一覧</Link></li>
          <li onClick={this.handleChangelocation}><Link to="/forms" className={this.state.location==="/forms" ? "active" : ""}>追加フォーム</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/data" render={() => (<Data tabledata={this.state.formdata}/>)}/>
          <Route path="/forms" render={() => (<Form 
            handleChangeeditingname={this.handleChangeeditingname}
            handleChangeeditingage={this.handleChangeeditingage}
            handleChangeeditinghobby={this.handleChangeeditinghobby}
            editingformdata={{name: this.state.name, age: this.state.age, hobby: this.state.hobby}}
            formdata={this.changedata}
          />)}/>
        </div>
      </Router>
    )
  }
}
