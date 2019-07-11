import React, { Component } from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from '@material-ui/core/Button';
import axios from "axios";

class App extends Component {
    state={
        alluser: [],
    };

    componentDidMount() {
      axios.get("http://localhost:8080/user/all")
        .then(res => {
          this.setState({alluser : res.data});
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }

    render () {
        return(
            <div>
              <Table>
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
                    <TableRow key={row.id}>
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">{row.firstName}</TableCell>
                      <TableCell align="right">{row.lastName}</TableCell>
                      <TableCell align="right">{row.username}</TableCell>
                      <TableCell align="right">{row.password}</TableCell>
                      <TableCell align="right">{row.birthday}</TableCell>
                      <TableCell align="right">{row.address}</TableCell>
                      <TableCell align="right">{row.career.career}</TableCell>
                      <TableCell align="right">{row.gender.gender}</TableCell>
                      <TableCell align="right">{row.province.province}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <br/>
              <br/>
              <Button
                variant="contained"
                className="Button"
                href="/UserRegister">
                Register
              </Button>
            </div>
        );
    }

}

export default App;
