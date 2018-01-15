import React from 'react'

const Message = ({message, toggleRead, toggleCheck,labelsAppear, toggleStar}) => {
  let selected=""
  let read =''
  const box = ''

  const readClass = message.read ? 'read' : 'unread';
  const selectedClass= message.selected ? 'selected':'';
  const labelClass= message.labels ? 'label' : '';
  const starClass = message.starred ? 'fa fa-star-o':'fa fa-star'

  if(message.selected===true){

    selected = "selected"
  }
  if(message.read ===true){
    read = 'read'
  }
  return(
  <div className={`row message ${readClass} ${selectedClass} `}  checked={`${read}`} >
  <div className="col-xs-1">
    <div className="row">
      <div className='col-xs-2' >
        <input type='checkbox' checked={`${selected}`}  onClick={(class1)=>{toggleCheck(message,class1)}}/>
      </div>
      <div className="col-xs-2">
        <i className={`${starClass}`}  onClick={(e)=>{toggleStar(message)}}></i>
      </div>
    </div>
  </div>
  <div className='col-xs-11'>
  {message.labels.map((element,i)=>{
    return <span key={i}className='label label-warning'>{element}</span>
  })}
    <a>
        {message.subject}
    </a>
  </div>
</div>


)}
 export default Message
