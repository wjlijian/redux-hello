import React,{Component} from 'react'
import store from './store'


class CommentBox extends Component {
	state={
		comments:store.getState()
	}

	// handleSubmit(e){
	// 		e.preventDefault()
	// 		let content=this.refs.content.value
	// 		let comments=this.state.comments
	// 		comments.push(content)
	// 		this.setState({comments})
	// 		this.refs.commentForm.reset()
	// }
	handleSubmit=(e)=>{
		e.preventDefault()
		console.log(this.comment.value)
		let newComment = this.comment.value
		// this.setState({
		// 	comments:[...this.state.comments,newComment]
		// })
		store.dispatch({type:'ADD_COMMENT',comment:newComment})
		console.log(store.getState())
		this.setState({
      comments: store.getState()
   })
		// this.comment.value=''
		this.myForm.reset()
	}
  render() {
		console.log(store.getState())
	  let comments = store.getState()

    return (
      	<div className='comment-box'>
					{
	         			this.state.comments.map(item=>(
	              <li className="comment" key={Math.random()}>{item}</li>
	            ))
	          }

				<form className='comment-form' onSubmit={this.handleSubmit} ref={value => this.myForm = value}>
					<input type='text' className='input' ref={value=>this.comment=value}/>
					<button type='submit' className='submit-btn'>提交</button>

				</form>
				<div className="underline"></div>
      </div>
    )
  }
}

export default CommentBox;
