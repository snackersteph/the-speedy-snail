import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Container, Header, Image  } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
    <div>

      <Container text className='bodyContainer'>
        <Image src="http://cdn.allthingsnuclear.org/wp-content/uploads/2016/01/DBD-15-Figure-1-snail-front-from-www-snail-world-com.jpg" size='large' centered />
        <Header as='h1' textAlign='center' color='orange'>THE SPEEDY SNAIL</Header>
        <Header as='h3' textAlign='center'>Sending email is more than a million times faster than snail mail!</Header>

        <p> 
          To send your first email, please generate an access token with <a href="https://postmail.invotes.com/" target="_blank"> Postmail</a>. 
          You will need to enter your access token with each visit to this page. After you receive your token, please enter it here:
        </p>

      </Container>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));