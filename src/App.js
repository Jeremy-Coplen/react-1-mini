import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: [],
      picture: "",
      name: ""
    }
  }

  updatePicture (e) {
    this.setState({picture: e.target.value})
  }

  updateName(e) {
    this.setState({name: e.target.value})
  }

  addFriend() {
    this.setState({
      friends: [...this.state.friends, {picture: this.state.picture, name: this.state.name}],
      picture: "",
      name: ""
    })
  }
  render() {
    const friends = this.state.friends.map((friend, i) => {
      return(
        <div key={i}>
          <img style={{width: "100px"}} src={friend.picture} alt={`${friend.picture}`} />
          <span>{friend.name}</span>
        </div>
      )
    })
    return(
      <div>
        <span>Picture:</span>
        <input onChange={ (e) => this.updatePicture(e)} value={this.state.picture} />

        <span>Name:</span>
        <input onChange={ (e) => this.updateName(e)} value={this.state.name} />

        <button onClick={() => this.addFriend()}>Add Friend</button>

        {friends}
      </div>
    );
  }
}

export default App;
