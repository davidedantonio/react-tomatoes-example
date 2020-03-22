import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  render () {
    console.log(this.props)
    const { history } = this.props;

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            TIMETOES
          </Typography>

          
          <Button onClick={() => history.push('/') } color="inherit"> Dashboard</Button>
          <Button onClick={() => history.push('/tomatoes') } color="inherit">Tomatoes</Button>
          
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(Header);