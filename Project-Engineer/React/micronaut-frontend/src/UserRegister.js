import React, { Component } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class App extends Component {

    state = {
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      birthday:'',
      address:'',
      gender:1,
      career:1,
      province:1,
      allgender: [],
      allcareer:[],
      allprovince:[],
    };
    componentDidMount() {
      axios.get("http://localhost:8080/gender/all")
        .then(res => {
          this.setState({allgender : res.data});
          console.log(res.data);
        })
        .catch(error => console.log(error));
      axios.get("http://localhost:8080/career/all")
        .then(res => {
          this.setState({allcareer : res.data});
          console.log(res.data);
        })
        .catch(error => console.log(error));
      axios.get("http://localhost:8080/province/all")
        .then(res => {
          this.setState({allprovince : res.data});
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }

    handleSubmitRegister = event =>{
      axios.post(`http://localhost:8080/user/save`,{
        'firstName':this.state.firstname,
        'lastName':this.state.lastname,
        'username':this.state.username,
        'password':this.state.password,
        'birthday':this.state.birthday,
        'address':this.state.address,
        'career':this.state.career,
        'gender':this.state.gender,
        'province':this.state.province,
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }

    handleChangeFirstname = event => {
      this.setState({ firstname: event.target.value });
      console.log(event.target.value);

    }

    handleChangeLastname = event => {
      this.setState({ lastname: event.target.value });
      console.log(event.target.value);

    }

    handleChangeUsername = event => {
      this.setState({ username: event.target.value });
      console.log(event.target.value);

    }

    handleChangePassword = event => {
      this.setState({ password: event.target.value });
      console.log(event.target.value);

    }

    handleChangeBirthday = event => {
      this.setState({ birthday: event.target.value });
      console.log(event.target.value);

    }

    handleChangeAddress = event => {
      this.setState({ address: event.target.value });
      console.log(event.target.value);

    }

    handleChangeCareer = event => {
      this.setState({ career: event.target.value });
      console.log(event.target.value);

    }

    handleChangeGender = event => {
      this.setState({ gender: event.target.value });
      console.log(event.target.value);
    }

    handleChangeProvince = event => {
      this.setState({ province: event.target.value });
      console.log(event.target.value);

    }
    render () {
        return(
            <div>
              <TextField
                id="firstname"
                label="First Name"
                className="TextField"
                onChange={this.handleChangeFirstname}
                margin="normal"
              />
              <br/>
              <TextField
                id="lastname"
                label="Last Name"
                className="TextField"
                onChange={this.handleChangeLastname}
                margin="normal"
              />
              <br/>
              <TextField
                id="username"
                label="Username"
                className="TextField"
                onChange={this.handleChangeUsername}
                margin="normal"
              />
              <br/>
              <TextField
                id="password"
                label="Password"
                className="TextField"
                onChange={this.handleChangePassword}
                margin="normal"
              />
              <br/>
              <TextField
                id="birthday"
                label="Birthday"
                type="date"
                className="TextField"
                onChange={this.handleChangeBirthday}
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
                onChange={this.handleChangeAddress}
                margin="normal"
              />
              <br/>
              <TextField
                id="gender"
                select
                label="Gender"
                className="TextField"
                value={this.state.gender}
                onChange={this.handleChangeGender}
                margin="normal"
              >
                {this.state.allgender.map(option => (
                  <option key={option.id} value={option.id} >
                    {option.gender}
                  </option>
                ))}
              </TextField>
              <br/>
              <TextField
                id="career"
                select
                label="Career"
                className="TextField"
                value={this.state.career}
                onChange={this.handleChangeCareer}
                margin="normal"
              >
                {this.state.allcareer.map(option => (
                  <option key={option.id} value={option.id} >
                    {option.career}
                  </option>
                ))}
              </TextField>
              <br/>
              <TextField
                id="province"
                select
                label="Province"
                className="TextField"
                value={this.state.province}
                onChange={this.handleChangeProvince}
                margin="normal"
              >
                {this.state.allprovince.map(option => (
                  <option key={option.id} value={option.id} >
                    {option.province}
                  </option>
                ))}
              </TextField>
              <br/>
              <br/>
              <Button
                variant="contained"
                className="Button"
                onClick={this.handleSubmitRegister}>
                Register
              </Button>
              <Button
                variant="contained"
                className="Button"
                href="/">
                Back
              </Button>
            </div>
        );
    }

}

export default App;
