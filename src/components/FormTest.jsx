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
    terms: "",
    errEmail: true,
    errPassword1: true,
    errPassword2: true,
    errTerms: true,
    error: true
  }

  handleChange = (e) => {
    const inputValue = (e.target.name === "newsletter" || e.target.name === "terms") ? e.target.checked : e.target.value;
    const inputName = e.target.name;

    this.setState({[inputName]: inputValue}, () => {
      console.log(this.state);
      this.handleError(inputName);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted !")
  }

  handleError = (keyword) => {
    if (keyword === "email") {
      this.state.email.length ? 
        this.setState({errEmail: false})
        : this.setState({errEmail: true});
    } else if (keyword === "password1") {
      this.state.password1.length ? 
        this.setState({errPassword1: false})
        : this.setState({errPassword1: true})
    } else if (keyword === "password2") {
      this.state.password2 === this.state.password1 ?
        this.setState({errPassword2: false})
        : this.setState({errPassword2: true})
    } else if (keyword === "terms") {
      this.state.terms ?
        this.setState({errTerms: false})
        : this.setState({errTerms: true})
    }

    if (this.state.errEmail === false && this.state.errPassword1 === false && this.state.errPassword2 === false && this.state.errTerms === false) {
      this.setState({error: false})
    } else this.setState({error: true})
  }

  render() {
    return (
      <div className="form-section">
        <p>Want to fill this gorgeous form ? Treat yourself :</p>
        <form className="flexcol" action="" >
          <TextField name="firstName" label="First Name" color="secondary" fullWidth={true} onChange={this.handleChange}/>
          <TextField name="lastName" label="Last Name" color="secondary" fullWidth={true} onChange={this.handleChange} />

          <TextField id="emailInput" name="email" label="Email" required={true} color="secondary" error={this.state.errEmail} fullWidth={true} onChange={this.handleChange}/>
          <TextField id="password1Input" name="password1" type="password" label="Password" required={true} color="secondary" error fullWidth={true} onChange={this.handleChange}/>
          <TextField id="password2Input" name="password2" type="password" label="Confirm Password" required={true} color="secondary" error fullWidth={true} onChange={this.handleChange}/>


          <FormControl>
            <InputLabel id="status-label">Status</InputLabel>
            <Select labelId="status-label" name="status" color="secondary" fullWidth={true} defaultValue="" onChange={this.handleChange}>
              <MenuItem value={"Teacher"}>Teacher</MenuItem>
              <MenuItem value={"TA"}>Teacher Assistant</MenuItem>
              <MenuItem value={"Student"}>Student</MenuItem>
            </Select>
          </FormControl>


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

          <Button className="button" variant="contained" disabled={this.state.error} onClick={this.handleSubmit}>
            Submit
          </Button>

        </form>
      </div>
    )
  }
}
