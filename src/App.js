import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar'
import MessagesList from './Components/MessagesList'
var allSelected = true
class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
    messages:this.props.messages
    }
  }
  toggleRead = (message) => {
    const index = this.state.messages.indexOf(message);
    let readMessages = this.state.messages.slice(0);
    readMessages[index].read = !readMessages[index].read;
    this.setState({messages:readMessages})
  }
  toggleCheck = (message,class1)=> {
    class1.stopPropagation();
    const index = this.state.messages.indexOf(message);
    let selectedMessages = this.state.messages.slice(0);
    selectedMessages[index].selected = !selectedMessages[index].selected;
    this.setState({messages:selectedMessages})
  }
  labelsAppear =(message) => {
    const index = this.state.messages.indexOf(message);
    let readMessages = this.state.messages.slice(0);
    if(readMessages[index].labels=!readMessages[index].labels){
    this.setState({messages:readMessages})
  }
}
  toggleStar =(message,starred)=> {
    const index = this.state.messages.indexOf(message);
    let starredMessages = this.state.messages.slice(0);
    starredMessages[index].starred = !starredMessages[index].starred;
    this.setState({messages:starredMessages})
  }
  selectAll =() =>{
    let selectedMessages = this.state.messages.slice(0);
    if(allSelected === true){
      console.log('out here')
      selectedMessages.map(mess => {
        mess.selected = true
        this.setState({messages:selectedMessages})
      })
      allSelected = false
      console.log(allSelected)
    }
    else{
      selectedMessages.map(mess => {
        mess.selected = false
        this.setState({messages:selectedMessages})
      })
      allSelected = true
    }
  }
  render() {
    return (
      <div className="App">
      <div className="navbar navbar-default" role="navigation">
 <div className="container">
   <div className="navbar-header">
     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
       <span className="sr-only">Toggle navigation</span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
     </button>
     <a className="navbar-brand" href="/">Inbox Styleguide</a>
   </div>
   <div className="collapse navbar-collapse">
     <ul className="nav navbar-nav">
       <li><a href="/">Components</a></li>
       <li><a href="/example">Example</a></li>
       <li><a href="/css">CSS</a></li>
         <li><a href="/seeds">Seeds</a></li>
     </ul>
   </div>
 </div>
</div>
  <div className= 'container'>
    <Toolbar selectAll={this.selectAll}/>
    <MessagesList messages = {this.state.messages} toggleRead = {this.toggleRead} toggleCheck = {this.toggleCheck} labelsAppear= {this.labelsAppear} toggleStar = {this.toggleStar}  />
  </div>
      </div>
    );
  }
}

export default App;
