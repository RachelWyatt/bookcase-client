import React from 'react';

export default class Bookcase extends React.Component {
    render() {
      return (
        <div>
            <h2> My Bookcases </h2>
            <ul>
                <li> Fiction </li>
                <li> Nonfiction </li>
            </ul>
        </div>
      )
    }
  }