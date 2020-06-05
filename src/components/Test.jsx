import React, { Component } from 'react';
import jsonData from "../data/data.json";

import DataTest from "../components/DataTest";
import FormTest from "../components/FormTest";

import "../styles/Test.css"

export default class Test extends Component {
  render() {
    return (
      <div>
        <DataTest data={jsonData} />
        <FormTest />
      </div>
    )
  }
}
