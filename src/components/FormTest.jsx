import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



export default class FormTest extends Component {
  state={
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    status: "",
    newsletter: "",
    terms: ""
  }

  handleChange = (e) => {
    const inputValue = (e.target.name === "newsletter" || e.target.name === "terms") ? e.target.checked : e.target.value;
    const inputName = e.target.name;

    this.setState({[inputName]: inputValue});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector(".form-section").innerHTML = `<p class="green">Submitted !</p>`;
  }

  checkEmail = () => {
    if (this.state.email.length) {
      return false
    } else return true
  }

  checkPassword1 = () => {
    if (this.state.password1.length) {
      return false
    } else return true
  }

  checkPassword2 = () => {
    if (this.state.password2 === this.state.password1) {
      return false
    } else return true
  }

  checkTerms = () => {
    if (this.state.terms) {
      console.log("yay terms")
      return false
    } else return true
  }

  checkError = () => {
    console.log(this.state)
    return !(this.checkEmail() && this.checkPassword1() && this.checkPassword2() && this.checkTerms())
  }

  render() {
    return (
      <div className="form-section">
        <p>Want to fill this gorgeous form ? Treat yourself :</p>
        <form className="" action="" >

          <TextField name="firstName" label="First Name" color="secondary" fullWidth={true} onChange={this.handleChange}/>

          <TextField name="lastName" label="Last Name" color="secondary" fullWidth={true} onChange={this.handleChange} />

          <FormControl>
            <InputLabel id="status-label" color="secondary">Status</InputLabel>
            <Select labelId="status-label" name="status" color="secondary" fullWidth={true} defaultValue="" onChange={this.handleChange}>
              <MenuItem value={"Teacher"}>Teacher</MenuItem>
              <MenuItem value={"TA"}>Teacher Assistant</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
            </Select>
          </FormControl>
          
          <TextField id="emailInput" name="email" label="Email" required={true} color="secondary" error={this.checkEmail()} fullWidth={true} onChange={this.handleChange}/>
        
          <TextField id="password1Input" name="password1" type="password" label="Password" required={true} color="secondary" error={this.checkPassword1()} fullWidth={true} onChange={this.handleChange}/>

          <TextField id="password2Input" name="password2" type="password" label="Confirm Password" required={true} color="secondary" error={this.checkPassword2()} fullWidth={true} onChange={this.handleChange}/>

          <FormControlLabel
            name="newsletter"
            control={<Checkbox color="secondary" />}
            label="I want to subscribe to the newsletter"
            labelPlacement="end"
            onChange={this.handleChange}
          />

          <FormControlLabel
            id="termsInput"
            name="terms"
            control={<Checkbox color="secondary" />}
            label="I have read terms and conditions"
            labelPlacement="end"
            required={true}
            onChange={this.handleChange}
          />

          <Button className="button" variant="contained" disabled={this.checkError()} onClick={this.handleSubmit}>
            Submit
          </Button>

        </form>
      </div>
    )
  }
}
