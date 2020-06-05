import React, { Component } from 'react';
import jsonData from "../data/data.json";

import DataTest from "../components/DataTest";
import FormTest from "../components/FormTest";

import "../styles/Test.css"

export default class Test extends Component {
  render() {
    return (
      <div className="test-section">
        <h1>1 - Fill a section with data</h1>
        <DataTest data={jsonData} />
        <h1>2 - Create a form with validation</h1>
        <FormTest />
      </div>
    )
  }
}
