import React from 'react'

const Message = ( => {
  return(
  <div className="row message unread">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>

<div className="row message read">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>

<div className="row message read selected">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" checked="checked" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>

<div className="row message read">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>


<div className="row message read">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <span className="label label-warning">dev</span>
    <span className="label label-warning">gschool</span>
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>

<div className="row message read">
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <span className="label label-warning">dev</span>
    <span className="label label-warning">gschool</span>
    <a href="#">
      Here is some message text that has a bunch of stuff
    </a>
  </div>
</div>

<div className="row message-body">
  <div className="col-xs-11 col-xs-offset-1">
    This is the body of the message.
  </div>
</div>


<form className="form-horizontal well">
  <div className="form-group">
    <div className="col-sm-8 col-sm-offset-2">
      <h4>Compose Message</h4>
    </div>
  </div>
  <div className="form-group">
    <label for="subject" className="col-sm-2 control-label">Subject</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject">
    </div>
  </div>
  <div className="form-group">
    <label for="body" className="col-sm-2 control-label">Body</label>
    <div className="col-sm-8">
      <textarea name="body" id="body" className="form-control"></textarea>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-8 col-sm-offset-2">
      <input type="submit" value="Send" className="btn btn-primary">
    </div>
  </div>
</form>
)

})
