import React, {Component} from 'react';
class Likes extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <div onClick={this.handleClick}><span className="fas fa-thumbs-up"></span>{this.state.count}</div>;
  }
}

//     state = {
//         likes: 0
//     }
//   handleLike(value) {
//     this.setState({likes: value});
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
export default Likes;

