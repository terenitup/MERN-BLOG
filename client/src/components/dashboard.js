import React, { Component } from 'react';


class Posts extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={'posts ${className}'}>

            </div>
        )
    }
}

class Dashboard extends Component {

  render() {
    return (
      <div className='dashboard'>
        <h1 className='dashboard__title'>My Posts</h1>
        <Posts className='dashboard__posts' />
      </div>
    );
  }
}

export default Dashboard; 

