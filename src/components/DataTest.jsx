import React, { Component } from 'react'

export default class DataTest extends Component {
  state={
    promoName: "",
    startDate: "",
    endDate: ""
  }

  componentDidMount = () => {
    this.setState({
      promoName: this.props.data.promoName, 
      startDate: this.props.data.startDate, 
      endDate: this.props.data.endDate
    })
  }

  render() {
    return (
      <section className="data-section">
        <p>Hello ! Here is some information about next session :</p>
        <ul>
          <li>The batch will be called <span>{this.state.promoName}</span></li>
          <li>It will start on <span>{this.state.startDate}</span></li>
          <li>Students will be able to breathe on <span>{this.state.endDate}</span></li>
        </ul>
      </section>
    )
  }
}
