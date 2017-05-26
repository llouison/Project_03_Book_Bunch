import React, { Component } from 'react';

class NyTimesList extends Component {
  render() {
    return (
      <ul className="Ny-times-list">
        {/**
         * Right now we want to be able to render a list of book items that is the New York Times best seller list.  The fetch call to the API should be made when the page renders.  Then it maps through the array in the data object and each list itme is a book.
         */}
        {this.props.quotes.map((books) => {
          return (
            <ul className='ny-times-best-sellers'>
              <li> </li>
            
            
            </ul>
          )
        })}
      </ul>
    );
  }
}

export default SuggestedNytList