import React from 'react';
import axios from "axios";
import { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class UserRegister extends Component {
  state = {
    firstname:'',
    lastname:'',
    username:'',
    password:'',
    birthday:'',
    address:'',
    selectgender:1,
    selectcareer:1,
    selectprovince:1,
    gender: [],
    career:[],
    province:[],
  };


  handleChangeFirstname = firstname => event => {
    this.setState({ firstname: event.target.value });

  }

  handleChangeLastname = lastname => event => {
    this.setState({ lastname: event.target.value });
  }

  handleChangeUsername = username => event => {
    this.setState({ username: event.target.value });
  }

  handleChangePassword = password => event => {
    this.setState({ password: event.target.value });
  }

  handleChangeBirthday = birthday => event => {
    this.setState({ birthday: event.target.value });
  }

  handleChangeAddress = address => event => {
    this.setState({ address: event.target.value });
  }

  handleChangeGender = gender => event => {
    this.setState({ selectgender: event.target.value });
  }

  handleChangeCareer = career => event => {
    this.setState({ selectcareer: event.target.value });
  }

  handleChangeProvince = province => event => {
    this.setState({ selectprovince: event.target.value });
  }

  componentDidMount() {
    axios.get("http://localhost:9000/allgenders")
      .then(res => {
        this.setState({gender : res.data});
        console.log(res.data);
      })
      .catch(error => console.log(error));
    axios.get("http://localhost:9000/allcareers")
      .then(res => {
        this.setState({career : res.data});
        console.log(res.data);
      })
      .catch(error => console.log(error));
    axios.get("http://localhost:9000/allprovinces")
      .then(res => {
        this.setState({province : res.data});
        console.log(res.data);
      })
      .catch(error => console.log(error));


  }

  handleSubmitRegister = register => event =>{
    axios.post(`http://localhost:9000/newuser/`+this.state.firstname+'/'+this.state.lastname+'/'+this.state.username+'/'+this.state.password+'/'+this.state.birthday+'/'+this.state.address+'/'+this.state.selectgender+'/'+this.state.selectcareer+'/'+this.state.selectprovince)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => console.log(error));


  }

  render () {
    return (
      <div className="Background">
        <header className="Inputdata">

        <TextField
          id="firstname"
          label="First Name"
          className="TextField"
          onChange={this.handleChangeFirstname('firstname')}
          margin="normal"
        />
        <br/>
        <TextField
          id="lastname"
          label="Last Name"
          className="TextField"
          onChange={this.handleChangeLastname('lastname')}
          margin="normal"
        />
        <br/>
        <TextField
          id="username"
          label="Username"
          className="TextField"
          onChange={this.handleChangeUsername('username')}
          margin="normal"
        />
        <br/>
        <TextField
        id="password"
        label="Password"
        className="TextField"
        onChange={this.handleChangePassword('password')}
        type="password"
        margin="normal"
        />
        <br/>
        <TextField
        id="birthday"
        label="Birthday"
        type="date"
        className="TextField"
        onChange={this.handleChangeBirthday('birthday')}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        />
        <br/>
        <TextField
          id="address"
          label="Address"
          className="TextField"
          onChange={this.handleChangeAddress('address')}
          margin="normal"
        />
        <br/>
        <TextField
          id="gender"
          select
          label="Gender"
          className="TextField"
          value={this.state.selectgender}
          onChange={this.handleChangeGender('gender')}
          margin="normal"
        >
          {this.state.gender.map(option => (
            <option key={option.ID} value={option.ID} >
              {option.Gender}
            </option>
          ))}
        </TextField>
        <br/>
        <TextField
          id="career"
          select
          label="Career"
          className="TextField"
          value={this.state.selectcareer}
          onChange={this.handleChangeCareer('career')}
          margin="normal"
        >
          {this.state.career.map(option => (
            <option key={option.ID} value={option.ID} >
              {option.Career}
            </option>
          ))}
        </TextField>
        <br/>
        <TextField
          id="province"
          select
          label="Province"
          className="TextField"
          value={this.state.selectprovince}
          onChange={this.handleChangeProvince('province')}
          margin="normal"
        >
          {this.state.province.map(option => (
            <option key={option.ID} value={option.ID} >
              {option.Province}
            </option>
          ))}
        </TextField>
        <br/>

        <br/>
        <Button
          variant="contained"
          className="Button"
          onClick={this.handleSubmitRegister('register')}>
          Register
        </Button>
        <Button
          variant="contained"
          className="Button"
          href="/app">
          Back
        </Button>
        </header>
      </div>
    );
  }

}

export default UserRegister;
