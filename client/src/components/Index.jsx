import React, { Component } from 'react';
import Header from './partials/Header';

class Index extends Component {
  render() {
    return (
    <div>
      <Header path1='/register' link1='Register' path2='/login' link2='Login'/>
      <div className = "hero">
        <img src={require('../images/books.jpg')}alt="books on shelves" />
        <h3>About Book Bunch</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget</p>
      </div>
      
      <form
        className="index_form"
        onSubmit={this.props.handleIndexQuestionSubmit}
      >
        <p>What is the last book you read?</p>
        <input
            type="text"
            value={this.props.inputIndexQuestionValue}
            name='content'
            onChange={this.props.handleInputContentChange}
        />
        <button>Submit</button>
      </form>
    </div>
    );
  };
}

export default Index;