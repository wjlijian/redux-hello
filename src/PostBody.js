import React,{Component} from 'react'
import {connect} from 'react-redux'

class PostBody extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='post-body'>PostBody
          <div className='comments-num num'>
              {this.props.comments.length}
          </div>
      </div>
    )
  }
}
  const mapStateToProps=(state)=>({
    comments:state
  })
export default connect(mapStateToProps)(PostBody)
