import React, {Component} from 'react';

export default class CommentBox extends Component {
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
