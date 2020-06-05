import React, { Component } from 'react'


/// COMPONENTS
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default class Header extends Component {
  render() {
    return (
      <div className="header flex alcenter">
        <div className="title flex alcenter">
          <FontAwesomeIcon className="fa-icon" icon={faReact}/>
          <h1>Konexio Technical Test</h1>
        </div>
        <p>Welcome to the technical test page !</p>
      </div>
    )
  }
}
