import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import PostFriends from './components/PostFriends';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <PostFriends />
       <FriendsList /> 
      </div>
    );
  }
}

export default App;
