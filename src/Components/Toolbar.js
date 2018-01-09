import React from 'react'
const Toolbar = () => {
  return (<div classNameName="row toolbar">
  <div classNameName="col-md-12">
    <p classNameName="pull-right">
      <span classNameName="badge badge">2</span>
      unread messages
    </p>

    <button classNameName="btn btn-default">
      <i classNameName="fa fa-check-square-o"></i>
    </button>

    <button classNameName="btn btn-default">
      Mark As Read
    </button>

    <button classNameName="btn btn-default">
      Mark As Unread
    </button>

    <select classNameName="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select classNameName="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button classNameName="btn btn-default">
      <i classNameName="fa fa-trash-o"></i>
    </button>
  </div>
</div>

<div classNameName="row toolbar">
  <div classNameName="col-md-12">
    <p classNameName="pull-right">
      <span classNameName="badge badge">2</span>
      unread messages
    </p>

    <button classNameName="btn btn-default">
      <i classNameName="fa fa-minus-square-o"></i>
    </button>

    <button classNameName="btn btn-default">
      Mark As Read
    </button>

    <button classNameName="btn btn-default">
      Mark As Unread
    </button>

    <select classNameName="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select classNameName="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button classNameName="btn btn-default">
      <i classNameName="fa fa-trash-o"></i>
    </button>
  </div>
</div>


<div classNameName="row toolbar">
  <div classNameName="col-md-12">
    <p classNameName="pull-right">
      <span classNameName="badge badge">2</span>
      unread messages
    </p>

    <button classNameName="btn btn-default">
      <i classNameName="fa fa-square-o"></i>
    </button>

    <button classNameName="btn btn-default" disabled="disabled">
      Mark As Read
    </button>

    <button classNameName="btn btn-default" disabled="disabled">
      Mark As Unread
    </button>

    <select classNameName="form-control label-select" disabled="disabled">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select classNameName="form-control label-select" disabled="disabled">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button classNameName="btn btn-default" disabled="disabled">
      <i classNameName="fa fa-trash-o"></i>
    </button>
  </div>
</div>


<div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">2</span>
      unread messages
    </p>

    <a className="btn btn-danger">
      <i className="fa fa-plus"></i>
    </a>

    <button className="btn btn-default">
      <i className="fa fa-minus-square-o"></i>
    </button>

    <button className="btn btn-default">Mark As Read</button>

    <button className="btn btn-default">Mark As Unread</button>

    <select className="form-control label-select">
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select">
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default">
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>
)
}

export default Toolbar
