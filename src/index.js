import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PropTypes from 'prop-types';

function Notification({children}){
  return(
<div className="notification alert alert-danger">
<span className="box-image" ><ErrorImage/></span>
<span className="Messege">{children}</span>
</div>
);
}
function ErrorImage(){
  var url =``;
  return <img src={url} className="glyphicon glyphicon-alert" />
}

ReactDOM.render(<Notification> You crash your browser</Notification>, document.getElementById('root'));
