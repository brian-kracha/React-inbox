import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar'
import MessagesList from './Components/MessagesList'
var allSelected = false
var read = false

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
    messages:this.props.messages
    }
  }
  checkForNone = () => {
    var checked = false
    let selectedMessages = this.state.messages.slice(0);
    let denied = selectedMessages.filter(message =>{
      if(message.selected){
        return message
      }
    })
    return denied
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
    if(allSelected === false){
      console.log('out here')
      selectedMessages.map(mess => {
        mess.selected = true
        this.setState({messages:selectedMessages})
      })
      allSelected =true
      console.log(allSelected)
    }
    else{
      selectedMessages.map(mess => {
        mess.selected = false
        this.setState({messages:selectedMessages})
      })
      allSelected = false
    }
  }

  readAll=(message)=>{
      const index = this.state.messages.indexOf(message);
    let newMessages = this.state.messages.slice(0);
    newMessages.map(mess =>{
    if(mess.selected === true){
        mess.read=true
      }
    })
    this.setState({messages:newMessages})
  }
  unReadAll = (message)=>{
    const index = this.state.messages.indexOf(message);
  let newMessages = this.state.messages.slice(0);
  newMessages.map(mess =>{
  if(mess.selected === true){
      mess.read=false
      mess.checked = false
    }
  })
  this.setState({messages:newMessages})
  }
  deleteAll=(message)=>{
    let trash = []
    const index= this.state.messages.indexOf(message);
    let selectedMessages = this.state.messages.slice(0);
    selectedMessages.map(mess =>{
      if(!mess.selected===true){
        trash.push(mess)
      }
    })
    this.setState({messages:trash})
  }
  addLabels= (e) =>{
    e.preventDefault()

    // const index= this.state.messages.indexOf(e);
    let present = false;
    let selectedMessages = this.state.messages.slice(0);
    selectedMessages.map(mess =>{
      if(mess.selected ===true){
        mess.labels.map(messy =>{
          if(messy === e.target.value){
            present = true
          }
        })
        if(!present){
          console.log(mess)
          mess.labels.push(e.target.value)
        }
      }
      })
      this.setState({messages:selectedMessages})
      e.target.value = 'Apply label'
  }
  removeLabels = (e)=>{
    let array = []
    let selectedMessages = this.state.messages.slice(0);
      selectedMessages.map(message=>{
        if(message.selected===true){
        message.labels.map(label=>{
          if(label ===e.target.value){
            console.log('suhhhhhhh')
          message.labels.splice(message.labels.indexOf(label),1)
        }
        })}
    })
    this.setState({messages:selectedMessages})
    e.target.value = 'Remove label'
  }
  unReadMessages=()=>{
    let unreadMessages = this.state.messages.slice(0);
    let count =  unreadMessages.filter(message=>{
      if(message.read === false){
        return message
      }
    })

    return count
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
    <Toolbar selectAll={this.selectAll}  readAll={this.readAll} unReadAll={this.unReadAll} deleteAll={this.deleteAll} addLabels={this.addLabels} unReadMessages={this.unReadMessages} checkForNone={this.checkForNone} removeLabels={this.removeLabels} message={this.state.messages}/>
    <MessagesList messages = {this.state.messages}  toggleCheck = {this.toggleCheck} labelsAppear= {this.labelsAppear} toggleStar = {this.toggleStar} readAll={this.readAll} />
  </div>
      </div>
    );
  }
}

export default App;
