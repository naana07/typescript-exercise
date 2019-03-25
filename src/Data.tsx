import { Component } from 'react';
import * as React from 'react';

interface DataProps {
  tabledata: string[]
}

export default class Data extends React.Component<DataProps, {}> {
  constructor(props: any){
    super(props);
  }
    returnage(age: string) {
      return (Number(age))
    }

    returnheaders(headers: [string, string, string]){
      const headersinth = headers.map((input: any) => (<th>{input}</th>))
      return (headersinth)
    }
    
    arrayUnique(array: string[]) {
      return array.filter( function( value: string, index: number ) {
    		return index === array.indexOf( value ) ;
    	});
    }

  render(){
    return (
      <div>
        <h2>データテーブル</h2>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Hobby</th>
          </tr>
          </thead>
          <tbody>
          {this.props.tabledata.map((data: any )=>{
            return(
            <tr>
            <td>{data.name}</td>
            <td>{this.returnage(data.age)}</td>
            <td>{data.hobby}</td>
            </tr>
          )})}
            </tbody>
          </table>
        </div>
      );
    }
  }

