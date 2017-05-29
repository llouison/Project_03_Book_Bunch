import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import { Link } from 'react-router-dom';

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
    }
    this.displayHeader = this.displayHeader.bind(this);
  }

  componentDidMount(){
    console.log('index',this.props.user);
  }
  displayHeader(){
    if(this.props.user === undefined){
      return <Header path1='/' link1='Home' path2='/register' link2='Register' path3='/login' link3='Login'/>
    } else return <Header path1='/user' link1='My Collection' path2='/search' link2='Search' path3='/logout' link3='Logout'/>
  }

  render() {
    return (
    <div className='page'>
      {/*{this.displayHeader()}*/}
      <div className='hero'>
        <Header className='index_header' path1='/' link1='Home' path2='/register' link2='Register' path3='/login' link3='Login'/>
      </div>
      <div className='description'>
        <div className='about'>
        <h2 className='feature'>About Book Bunch</h2>
        <hr/>
        <p>Despite what everyone thinks, reading is still very much in. It just might not be in the same format as befrore. </p>
        </div>
        <Link to='/register'><button>Start My Collection</button></Link>
      </div>
      <Footer />
    </div>
    );
  };
}

export default Index;