import React, {Component} from 'react';
import Paypal from './PaypalButton';
import {OutlinedInput} from '@material-ui/core';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      checked: false,
      fee: 0,
      amount: 0 ,
      otherAmount: 0,
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOtherAmount = this.handleOtherAmount.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    let value = parseInt(target.value);
    const name = target.name;
    this.setState({[name]: value}); 
  }
  
  handleChecked = () => {
    this.setState({checked: !this.state.checked});
  } 
  handleOtherAmount = (event) => {
    this.setState({otherAmount: event.target.value});
  }
 update () {
   this.setState({total: this.state.amount});
 }
  render () {
    
  return (
    <React.Fragment>
      <div>
          <h1>Donate </h1>
          <p>Ensure that all children have the opportunity to realize their fullest potential.</p>
        </div>
      <div className="d-flex ">
        <div className="col-md-8">
          <h1 className="text-center">Donation Amount</h1>
          <div className="col-md-4"><input onChange={this.handleChange} type="radio" name="amount" value="100"/>
            <p>$100</p>
            <p>could fund a high schooler's SAT prep materials</p>
          </div>
          <div className="col-md-4"><input onChange={this.handleChange}  type="radio" name="amount" value="250"/>
            <p>$250</p>
            <p>could fund science needs for an early childhood class</p>
          </div>
          <div className="col-md-4"><input onChange={this.handleChange} type="radio" name="amount" value="500"/>
            <p>$500</p>
            <p>could fund a classroom's annual vision screening</p>
          </div></div>
          <div className="col-md-8">
          <div className="col-md-4"><input onChange={this.handleChange} type="radio" name="amount" value="1000"/>
            <p>$1000</p>
            <p>could fund a child's week at Wagon Road Camp</p>
          </div>
          <div className="col-md-4"><input onChange={this.handleChange} type="radio" name="amount" value="2500"/>
            <p>$2500</p>
            <p>could fund a career training for a teen in foster care</p>
          </div>
          <div className="col-md-4"><input onChange={this.handleChange} type="radio" name="amount" value={this.state.otherAmount}/>
            <p>Other</p>
            <p>
              <label>
              $<OutlinedInput 
                name="amount"
                value= {this.state.otherAmount} 
                onChange =  { this.handleOtherAmount} 
                onBlur={this.handleChange}               
              />              
              </label>
            </p><p>$25 minimum </p>
          </div>
          <div className="text-left">
            <label>
            <input        
              type="checkbox"
              onChange={this.handleChecked}/>$3.00
            </label>
            <p>I'd like to cover the transaction fee so 100% of my gift goes to Children's Aid</p>
          </div>
        <div className="text-left">
          <p>Donate ${this.state.amount}</p>
          <h3>Payment method</h3>
          <Paypal amount={this.state.amount}/>
          <p>Children's Aid is exempt from federal income tax under section 501(c)(3) of the Internal Revenue Code, and contributions are tax-deductable to the extent allowed by law. Our Federal Identification Number is 13-5562191</p>
        </div></div>
        <div className="more-ways col-md-4">More ways to give</div>
      </div>
    </React.Fragment>
  );

  }
}

export default Homepage;
