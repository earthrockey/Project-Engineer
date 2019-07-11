import React from 'react';
import axios from "axios";
import { Component } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';



class App extends Component {

  state = {
    alluser: [],

  };



  componentDidMount() {
    axios.get("http://localhost:9000/allusers")
      .then(res => {
        this.setState({alluser : res.data});
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }

  render () {
    return (
        <div className="body">
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Birthday</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Career</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Province</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.alluser.map(row =>(
                <TableRow key={row.ID}>
                  <TableCell align="right">{row.ID}</TableCell>
                  <TableCell align="right">{row.FirstName}</TableCell>
                  <TableCell align="right">{row.LastName}</TableCell>
                  <TableCell align="right">{row.Username}</TableCell>
                  <TableCell align="right">{row.Password}</TableCell>
                  <TableCell align="right">{row.Birthday}</TableCell>
                  <TableCell align="right">{row.Address}</TableCell>
                  <TableCell align="right">{row.Career.Career}</TableCell>
                  <TableCell align="right">{row.Gender.Gender}</TableCell>
                  <TableCell align="right">{row.Province.Province}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <br/>
          <br/>
          <Button
            variant="contained"
            className="Button"
            href="/userregister">
            Register
          </Button>

        </div>
    );
  }

}


export default App;
