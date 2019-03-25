import { Component } from 'react';
import * as React from 'react';

interface FormProps {
  handleChangeeditingname: (arg1: string) => void
  handleChangeeditingage: (arg1: string) => void
  handleChangeeditinghobby: (arg1: string) => void
  editingformdata: {
    name: string
    age: number
    hobby: string
  }
  formdata: any
}

export default class Form extends React.Component<FormProps, {}> {
  constructor(props: any){
    super(props);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangeage = this.handleChangeage.bind(this);
    this.handleChangehobby = this.handleChangehobby.bind(this);
    };

  is_Natural(input: number) {
    if (Number.isInteger(input)==true && input>0){
      return true
    } else{
      return false
    }
  }
  handleChangename(event: any){
    this.props.handleChangeeditingname(event.target.value);
  }
  handleChangeage(event: any){
    this.props.handleChangeeditingage(event.target.value);
  }
  handleChangehobby(event: any){
    this.props.handleChangeeditinghobby(event.target.value);
  }
  hasvalue(input: any){
    if (input.length==0){
    const validvalue=false
      return validvalue
    } else{
    const validvalue=true
      return validvalue
    }
  }

render() {
  return(
    <form onSubmit={this.props.formdata}>
    <h2>追加フォーム</h2>
    <p>
    名前：<input type="text" value={this.props.editingformdata.name} onChange={this.handleChangename}/>
    </p>
    <p>
    年齢：<input type="text" value={this.props.editingformdata.age} onChange={this.handleChangeage}>
    </input>
    </p>
    <p>
    {Number.isInteger(this.props.editingformdata.age) && this.props.editingformdata.age>0 ? "" : "数値を入力してください"}
    </p>
    <p>
    趣味：
    <select value={this.props.editingformdata.hobby} onChange={this.handleChangehobby}>
               <option value="music">音楽</option>
               <option value="movies">映画</option>
               <option value="reading">読書</option>
    </select>
    </p>
    <button type="submit" value="submit" name="登録" disabled={Number.isInteger(Number(this.props.editingformdata.age)) && this.props.editingformdata.age>0 && (this.props.editingformdata.name)!= "" ? false : true}>登録</button>
    </form>
)
}
}
