import React from "react";
import Header from "./../components/Header";
import { withRouter } from "react-router-dom";

class MainPage extends React.Component {
  render () {
    const { children } = this.props;

    return (
      <main>
        <Header />

        {children}
      </main>
        
    )
  }
}

export default withRouter(MainPage);