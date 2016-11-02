import React, { Component } from 'react';

export default class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0
    }
  }
  _deposit() {
    let input = this.refs.moneyField.value;
    this.setState({
      balance: this.state.balance + +input
    })
  }
  _withdraw() {
    let input = this.refs.moneyField.value;
    if (this.state.balance > input ) {
      this.setState({
        balance: this.state.balance - input
      })
    } else {
      alert('insufficient funds')
    }
  }

  render() {
    if (this.state.balance === 0) {
      //  this.setState({className: 'zero'});
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance" >${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="moneyField" />
        <input type="button" value="Deposit" onClick={() => this._deposit()} />
        <input type="button" value="Withdraw" onClick={() => this._withdraw()} />
      </div>
    )
  }
}
