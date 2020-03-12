import React, { Component } from 'react';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: '',
      successPage: false,
    };
  }

  validateInputs = (input, value) => {
    switch (input) {
      case 'email': {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(String(value).toLowerCase());
      }
      case 'name': {
        const pattern = /^[a-zA-Z]+$/;
        return pattern.test(value);
      }
      default: {
        return false;
      }
    }
  }

  handleSubmit = () => {
    const { firstName, lastName, email, password } = this.state;
    if (!firstName || firstName === '' || this.validateInputs('name', firstName) === false) {
      this.setState({ error: true, errorMessage: 'Please enter a valid firstname' });
    } else if (!lastName || lastName === '' || this.validateInputs('name', lastName) === false) {
      this.setState({ error: true, errorMessage: 'Please enter a valid lastname' });
    } else if (!email || email === '' || this.validateInputs('email', email) === false) {
      this.setState({ error: true, errorMessage: 'Please enter a valid email' });
    } else if (!password || password === '') {
      this.setState({ error: true, errorMessage: 'Please enter a valid password' });
    } else {
      this.setState({ error: false, successPage: true });
    }
  }

  render() {
    const { error, firstName, lastName, email, password, errorMessage, successPage } = this.state;
    return(
  <div className="app">
    {!successPage && <div className="box">
      <div className="box-header">
        <h7>Get started today!</h7>
      </div>
      <div className="box-content">
        <div className="box-content-row">
          <div className="box-content-row-item">
            <div className="label">First name</div>
            <input type="text" value={firstName} onChange={(e) => this.setState({ firstName: e.target.value })} className="input" />
          </div>
          <div className="box-content-row-item">
            <div className="label">Last Name</div>
            <input type="text" value={lastName} onChange={(e) => this.setState({ lastName: e.target.value })} className="input" />
          </div>
        </div>
        <div className="box-content-row">
          <div className="box-content-row-item">
            <div className="label">Email address</div>
            <input type="email" value={email} onChange={(e) => this.setState({ email: e.target.value })} className="input" />
          </div>
          <div className="box-content-row-item">
            <div className="label">Password</div>
            <input type="password" value={password} onChange={(e) => this.setState({ password: e.target.value })} className="input" />
          </div>
        </div>
        <div className="box-content-row" style={{ padding: '40px 10px 10px 10px', flexDirection: 'column' }}>
          {error && <div className="error">{errorMessage}</div>}
          <button className="button" onClick={() => this.handleSubmit()}>Claim Your Free Trial</button>
          <div className="footer-note">You are agreeing to our <span className="link-text">Terms and Services</span></div>
        </div>
      </div>
    </div>}
    {successPage && <div className="success">Congratulations! Enjoy our services.</div>}
  </div>)
  };
};

export default GetStarted;