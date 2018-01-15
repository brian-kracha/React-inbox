import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar'
import MessagesList from './Components/MessagesList'
import Compose from './Components/Compose'
var allSelected = false
var read = false
const localHost = 'http://localhost:8082'

class App extends Component {
  constructor(props){
    super(props)
    this.state =  {
    messages:[]
    }
  }
  async componentDidMount() {
    let info = await fetch(`${localHost}/api/messages`)
    let json = await info.json()
    this.setState({messages: json._embedded.messages})
  }

  createMessage=async(message) =>{
      const response = await fetch(`${localHost}/api/messages`, {
        method: 'POST',
        body: JSON.stringify({
          subject:message.subject,
          body:message.body
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        const newMessage = await response.json()
        this.setState({messages:[...this.state.messages, newMessage]})
    }
//     // toggleStar = async fetch()=>(`${localHost}/api/messages`,{
//       method:'PATCH',
//       body:JSON.stringify({
//         starred:message.starred
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         }
//   }
//   await let message= body.state.messages
//   await let class =message.state
// }
  // serveStar= async(message =>{
  //   const starSelected = await response.json();
  //   const starState =[this.state.messages,starSelected]
  //   const response =await fetch(`${localHost}/api/messages`,{
  //     method:'PATCH',
  //     body:JSON.stringify({
  //       starred:message.starred
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //   })
  //
  //
  //   this.setState({messages:starState})
  // }

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
///////////messagesList////////////
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
  toggleStar =async (message)=> {
    const index = this.state.messages.indexOf(message);
    const obj = {
      'messageIds':[ message.id],
      "command": "star",
      "star": !message.starred
    }

    let starredMessages = this.state.messages.slice(0);
    starredMessages[index].starred = !starredMessages[index].starred;
    this.setState({messages:starredMessages})
    await fetch(`${localHost}/api/messages`,{
          method:'PATCH',
          body: JSON.stringify(obj),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
      })
  }
  /////////toolbar///////////
  selectAll =() =>{
    let selectedMessages = this.state.messages.slice(0);
    if(allSelected === false){
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


  readAll=async()=>{
    let array = []
    let newMessages = this.state.messages.slice(0)
    newMessages.map(mess =>{
    if(mess.selected === true){
      array.push(mess.id)
        mess.read=true
        mess.selected=false
      }
    })
    let obj ={
    "messageIds": array,
    "command": "read",
    "read": true
    }
    this.setState({messages:newMessages})
    await fetch(`${localHost}/api/messages`,{
          method:'PATCH',
          body: JSON.stringify(obj),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
      })
  }
  unReadAll = async()=>{
      let array = []
      let newMessages = this.state.messages.slice(0);
        newMessages.map(mess =>{
        if(mess.selected === true){
          array.push(mess.id)
            mess.read=false
            mess.selected = false
          }
        })
        const obj = {
          "messageIds": array,
          "command": "read",
          "read": false
        }
        this.setState({messages:newMessages})
        await fetch(`${localHost}/api/messages`,{
              method:'PATCH',
              body: JSON.stringify(obj),
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
          })
      }
  deleteAll= async ()=>{
    let trash = []
    let ids=[]
    // const index= this.state.messages.indexOf(message);
    let selectedMessages = this.state.messages.slice(0);
    selectedMessages.map(mess =>{
      if(!mess.selected===true){
        trash.push(mess)

      }
      else{
        ids.push(mess.id)
      }
    })
    const obj = {
      "messageIds": ids,
      "command": "delete"
      }
    console.log(ids)
    this.setState({messages:trash})
     await fetch(`${localHost}/api/messages`,{
          method:'PATCH',
          body: JSON.stringify(obj),
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
      })
  }

  addLabels=async (e) =>{
    e.preventDefault()
    let selectedMessages = this.state.messages.slice(0);
    let array = []
    let present = false;

    selectedMessages.map(mess =>{

      if(mess.selected ===true){
        array.push(mess.id)
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
      console.log(array)
      const obj = {
        "messageIds": array,
        "command": "addLabel",
        "label": e.target.value
      }
      this.setState({messages:selectedMessages})
      e.target.value = 'Apply label'
      await fetch(`${localHost}/api/messages`,{
           method:'PATCH',
           body: JSON.stringify(obj),
             headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
             }
       })
  }

  removeLabels = async(e)=>{
    e.preventDefault()
    let array = []
    let selectedMessages = this.state.messages.slice(0);
      selectedMessages.map(message=>{
        if(message.selected===true){
          array.push(message.id)
        message.labels.map(label=>{
          if(label ===e.target.value){
            console.log('suhhhhhhh')
          message.labels.splice(message.labels.indexOf(label),1)
        }
        })}
    })
        const obj = {
      "messageIds": array,
      "command": "removeLabel",
      "label": e.target.value
    }

    this.setState({messages:selectedMessages})
    e.target.value = 'Remove label'
    await fetch(`${localHost}/api/messages`,{
         method:'PATCH',
         body: JSON.stringify(obj),
           headers: {
             'Content-Type': 'application/json',
             'Accept': 'application/json'
           }
     })
  }
  unReadMessages=async()=>{
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
    <Compose createMessage={this.createMessage}/>
    <MessagesList messages = {this.state.messages}  toggleCheck = {this.toggleCheck} labelsAppear= {this.labelsAppear} toggleStar = {this.toggleStar} readAll={this.readAll} serveStar={this.serveStar} />
  </div>
      </div>
    );
  }
}

export default App;
