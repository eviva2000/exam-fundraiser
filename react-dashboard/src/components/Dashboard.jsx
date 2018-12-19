import React, { Component } from "react";
import TotalMoney from "./TotalMoney.jsx";
import Donators from "./Donators.jsx";
import MoneyDaily from "./MoneyDaily.jsx";
import MaterialDonations from "./MaterialDonations.jsx";
import firebase from "../modules/firebase";
import Header from "./Header.jsx";
import Notes from "./Notes.jsx";
import Lessons from "./Lessons.jsx";
import MaterialDonators from "./MaterialDonators.jsx";
import SignUpForm from "./SignUpForm.jsx";

//This is the parent Component
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      materials: [],
      createAccount: false
    }; //Current state returns an empty array
    this.signUpStatus = this.signUpStatus.bind(this); //bind this to switch sign up form status

    this.authorize = this.authorize.bind(this); //bind this state to authorize function so that these values could be read/changed in authorize function
  }

  //This lifecycle method usually renders once after the component has mounted.

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
      } else {
        this.setState({ user: null });
      }
    });
    //Here we fetch the data from the external database.
    fetch(
      "http://5bffd9ef0296210013dc7e55.mockapi.io/money-table?fbclid=IwAR0nDnDspJ-j42cP9m2DWn5Fwjr6PRl_EyRaVMYmCXHx8RKBld2Xswe_pOI"
    ).then(res => {
      res.json().then(result => {
        this.setState({ data: result });
      });
    });
    fetch(
      "http://5bffd9ef0296210013dc7e55.mockapi.io/material-table?fbclid=IwAR12fSE5W47qKETdsYW8Ws9T4Xxt9ch1OZ2FqttFwZy3CFl7HdDZfDo9MU0"
    ).then(res => {
      res.json().then(result => {
        this.setState({ materials: result });
      });
    });
    setInterval(() => {
      if (this.state.user) {
        // Setting the interval makes sure this state updates and fethes data after the certain interval.
        fetch(
          "http://5bffd9ef0296210013dc7e55.mockapi.io/money-table?fbclid=IwAR0nDnDspJ-j42cP9m2DWn5Fwjr6PRl_EyRaVMYmCXHx8RKBld2Xswe_pOI"
        ).then(res => {
          res.json().then(result => {
            this.setState({ data: result });
          });
        });
        fetch(
          "http://5bffd9ef0296210013dc7e55.mockapi.io/material-table?fbclid=IwAR12fSE5W47qKETdsYW8Ws9T4Xxt9ch1OZ2FqttFwZy3CFl7HdDZfDo9MU0"
        ).then(res => {
          res.json().then(result => {
            this.setState({ materials: result });
          });
        });
      }
    }, 20000);
  }
  //switch state for account creation form
  signUpStatus(e) {
    e.preventDefault();
    if (this.state.createAccount) {
      this.setState({
        createAccount: false
      });
    } else {
      this.setState({
        createAccount: true
      });
    }
  }
  //authorize the user according to input details (firebase)
  authorize(e) {
    e.preventDefault();
    let emailValue = document.getElementById("email").value;
    let pwdValue = document.getElementById("password").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(emailValue, pwdValue)
      .then(res => {
        this.setState({ user: res });
      })
      .catch(error => {
        console.log(error);
      });
  }
  //Here we render all the children components.
  render() {
    if (!this.state.user) {
      return (
        <form method="get">
          <input type="email" id="email" name="email" required />
          <input type="password" id="password" name="password" required />
          <button type="submit" id="login" onClick={this.authorize}>
            Log In
          </button>
        </form>
      );
    }
    if (this.state.createAccount) {
      return <SignUpForm status={this.signUpStatus} />;
    } else {
      return (
        <div id="dashboard">
          <Header status={this.signUpStatus} />
          <section id="moneyDaily">
            <MoneyDaily data={this.state.data} />
          </section>
          <section id="totalMoney">
            <TotalMoney data={this.state.data} />
          </section>
          <div id="notes1">
            <Notes />
          </div>
          <section id="donators">
            <h1>Our Supporters</h1>
            <ul>
              <Donators data={this.state.data} />
              <MaterialDonators materials={this.state.materials} />
            </ul>
          </section>
          <section id="lessons">
            <Lessons materials={this.state.materials} />
          </section>
          <section id="materialDonations">
            <MaterialDonations
              className="container"
              materials={this.state.materials}
            />
          </section>
          <div id="notes2">
            <Notes />
          </div>
        </div>
      );
    }
  }
}
