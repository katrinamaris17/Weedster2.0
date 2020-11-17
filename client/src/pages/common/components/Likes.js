import React, {Component} from 'react';

class Likes extends React.Component {

    render() {
      return <h1>{this.props.likes}</h1>;
    }
  }
  
  Likes.defaultProps = {
    likes: 0,
  };

// class Likes extends Component {
//     state = {
//         likes: 0
//     }
//   handleLike(event, value) {
//     this.setState({likes: value + 1});
//   }
//   render() {
//     return (
//         <div>
//                     <button onClick={this.handleLike}><span class="fas fa-thumbs-up"></span></button>
//                     {this.state.likes}
//         </div>
//     );
//   }
// }
// export default Likes;