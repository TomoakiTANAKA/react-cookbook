import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Friends extends Component {
  FRIENDS = [
    {
      id: 'serval',
      nameJa: 'サーバル',
      nameEn: 'Serval Cat',
      family: 'ネコ目ネコ科ネコ属'
    },
    {
      id: 'raccoon',
      nameJa: 'アライグマ',
      nameEn: 'Common raccoon',
      family: 'ネコ目アライグマ科アライグマ属'
    },
    {
      id: 'fennec',
      nameJa: 'フェネック',
      nameEn: 'Fennec',
      family: 'ネコ目イヌ科キツネ属'
    }
  ]

  friendById = id => this.FRIENDS.find(friend => friend.id === id)

  FriendList = () => (
    <div>
      {this.FRIENDS.map(friend => (
        <li key={friend.id}>
          <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
        </li>
      ))}
    </div>
  )

  Friend = props => {
    const { id } = props.match.params
    const friend = this.friendById(id)

    if (typeof friend === 'undefined')  {
      return (
        <div>
          <p>Friends with id '{id}' does not exist.</p>
        </div>
      )
    }


    const containerStyle = { border: '1px gray solid', display: 'inline-block', padding: 10 }
    const contentsStyle = { margin: 0 }

    return (
      <div>
        <div style={containerStyle}>
          <p style={contentsStyle}>{friend.family}</p>
          <h1 style={contentsStyle}>{friend.nameJa}</h1>
          <p style={contentsStyle}>{friend.nameEn}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
      <h2>Friends</h2>
      <Route exact path='/friends' component={this.FriendList} />
      <Route path='/friends/:id' component={this.Friend} />
    </div>
    );
  }
}

export default Friends;
