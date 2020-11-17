import React, {Component} from 'react';
class Likes extends Component {
    state = {
        likes: 0
    }
  handleLike(value) {
    this.setState({likes: value});
  }
  render() {
    return (
        <div>
                    <button onClick={this.handleLike}><span class="fas fa-thumbs-up"></span></button>
                    {this.state.likes}
        </div>
    );
  }
}
export default Likes;

