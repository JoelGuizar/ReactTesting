import React, { Component } from 'react';
import { connect } from 'react-redux';
//we are importing all the actions from this folder
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {comment: ""};
  }

  handleChange(event){
    this.setState({comment: event.target.value})
  }

  handleSubmit(event){
    //stops form from trying to submit itself
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({comment:''});
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='comment-box'>
        //controlled input, because value = what state is. State controls this
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}/>
        <button action="submit"> Submit Button </button>
      </form>
    );
  }
}

//first arg is always state/mapStateToProps, here we don't care about it
//second arg = MapDipatch
export default connect(null, )(CommentBox)
