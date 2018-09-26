import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imgUrl from './twitterlogo.png';

/*const List = (props) => {
  const records = props.data.map((value, index) => {
    return (
      <li
        key={index}
        style={{textAlign: 'center'}}>
        {value}
      </li>
    );
  });

  return (
    <ul>{records}</ul>
  );
}*/

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputText:'',
      tweets: [],
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  handleChangeText(event){
    this.setState({
      inputText: event.target.value,
    });
  }

 handleClickButton(value){
   const newList = this.state.tweets.concat(value);
   this.setState({
      tweets: newList,
      inputText: '',
   });
 }
  render() {
    const tweets = this.state.tweets.map((tweet)=>{
      return(<ol>{tweet}</ol>)
    })

    return (
      <div class = "header_waku">
        <h1>Twitterもどき</h1>
        <div class="twitterlogo">
          <img
            src={imgUrl}
          />
        </div>
        
    <h3>Tweet List</h3>
      <input
        type="text"
        value={this.state.inputText}
        onChange={this.handleChangeText}
      />
      <button
        type="button"
        onClick={() => this.handleClickButton(this.state.inputText)}>
        Tweet
      </button>
      <ul>{tweets}</ul>
    </div>
    );
  }
}

export default App;
