import React, {Component} from 'react';
import {connect} from 'react-redux';

const CommentList = (props) => {
  const list = props.comments.map((comment, i) => {
    return (
      <li key={i}> {comment} </li>
    )
  });

    return (
      <ul className='comment-list'>
        {list}
      </ul>
    )
}

//what state from redux do you need here
function mapStateToProps(state){
  return {comments: state.comments}
}

export default connect(mapStateToProps)(CommentList)
