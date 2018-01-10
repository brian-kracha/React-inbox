import React from 'react'


const Toolbar = ({ message, selectAll, readAll,unReadAll, deleteAll, addLabels,unReadMessages,checkForNone, removeLabels}) => {
  // const selectAllClass = Toolbar.selected ? 'fa fa-check-square-o' :'btn btn-default'
let disabled = ''
const pineapple = checkForNone()
console.log(pineapple)
if(pineapple.length === 0){
  disabled='disabled'
}
const unReadClass =unReadMessages()
let square = 'fa-square-o'
let all = message.filter((e)=>{
  if(e.selected===true){
    return e
  }
})
if(all.length===message.length){
  square = 'fa-check-square-o'
}
else if(all.length > 0 && all.length < message.length){
  square= 'fa-minus-square-o'
}

  return (<div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge" >{unReadClass.length}</span>
      unread messages
    </p>

    <button className={`btn btn-default`} onClick={()=>{selectAll()}} >
      <i className={`fa ${square}`}></i>
    </button>

    <button className="btn btn-default" onClick={()=>{readAll()}} disabled={disabled}>
      Mark As Read
    </button>

    <button className="btn btn-default" onClick={()=>{unReadAll()}} disabled={disabled} >
      Mark As Unread
    </button>

    <select className="form-control label-select" onChange={addLabels} disabled={disabled}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" onChange={removeLabels} disabled={disabled}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" onClick={()=>{deleteAll()}} disabled={disabled}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>

)
}


export default Toolbar
