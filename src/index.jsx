import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
    <div>
      <h1>The Speedy Snail</h1>
      <h2>Sending email is more than a million times faster than snail mail!</h2>
      <form action="https://postmail.invotes.com/send" method="post" id="email_form">
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="text" placeholder="Message"></textarea>
        <input type="hidden" name="access_token" value={this.state.token} />
        <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
        <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
        <input type="text" name="reply_to" placeholder="Your Email" /> 
        <input id="submit_form" type="submit" value="Send" />
      </form>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));