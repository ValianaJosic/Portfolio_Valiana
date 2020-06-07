import React, {Fragment} from 'react';
import './contact.css';
import Desktop from '../../assets/images/desktop1.jpeg'


export default class MyForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }


  render() {
    
    const { status } = this.state;

    return (
      <Fragment>
      <div><img alt='' src={Desktop} className='desktop'></img></div>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mwkrelqj"
        method="POST"
        className='form'
      > 
        <label className='form-label'>NAME</label>
        <input className='form-input'type="text" name="name" />
        <label  className='form-label'>EMAIL</label>
        <input className='form-input' type="email" name="email" />
        <label  className='form-label'>MESSAGE</label>
        <textarea className='form-area' type="textarea" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className='form-btn'>SUBMIT</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </Fragment>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}