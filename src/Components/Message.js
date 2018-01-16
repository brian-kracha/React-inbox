import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
const localHost = 'http://localhost:8082'
// const Message = ({message,toggleCheck, toggleStar}) => {
class Message extends Component {
  constructor(props){
    super(props)
    this.state= {body:[]}
  }
  async componentDidMount() {
    let body = await fetch(`${localHost}/api/messages/${this.props.message.id}`)
    let json = await body.json()
    this.setState({body: json.body})

  }

  render(){
    console.log(this.state.body)
    let selected='';
    let read ='';
    const box = ''
    const readClass = this.props.message.read ? 'read' : 'unread';
    const selectedClass= this.props.message.selected ? 'selected':'';
    const labelClass= this.props.message.labels ? 'label' : '';
    const starClass = this.props.message.starred ? 'fa fa-star-o':'fa fa-star'

    if(this.props.message.selected===true){

      selected = "selected"
    }
    if(this.props.message.read ===true){
      read = 'read'
      this.props.message.read =true
    }
  return(
  <div className={`row message ${readClass} ${selectedClass} `}  checked={`${read}`} >
  <div className="col-xs-1">
    <div className="row">
      <div className='col-xs-2' >
        <input type='checkbox' checked={`${selected}`}  onClick={(class1)=>{this.props.toggleCheck(this.props.message,class1)}}/>
      </div>
      <div className="col-xs-2">
        <i className={`${starClass}`}  onClick={(e)=>{this.props.toggleStar(this.props.message)}}></i>
      </div>
    </div>
  </div>
  <div className='col-xs-11'>
  {this.props.message.labels.map((element,i)=>{
    return <span key={i}className='label label-warning'>{element}</span>
  })}

    <Link to={`/messages/${this.props.message.id}`}>
    <span onClick={this.props.toggleRead} id={this.props.message.id} >
        {this.props.message.subject}
        </span>
    </Link>
    <Route
    path={`/messages/${this.props.message.id}`}
    render={() => (
      <div>{this.state.body}</div>

      )}
    />
  </div>
</div>

);}
}
 export default Message
