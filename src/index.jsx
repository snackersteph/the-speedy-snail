import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Container, Header, Image, Form, Button, Grid  } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      token: '',
      status: 'Submit Token'
    }
    this.setState = this.setState.bind(this);
    this.updateToken = this.updateToken.bind(this);
    this.handleToken = this.handleToken.bind(this); 
  }

  handleToken(e) {
    this.setState({
      token: e.target.value
    });
  }

  updateToken() {
    if (this.state.token !== '') {
      this.setState({
        status: 'Done!'
      });
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

        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column>
              <Form >
                <Form.Input  required onChange={this.handleToken}>
                  <input placeholder='Access Token' />
                </Form.Input>
              </Form>            
            </Grid.Column>
            <Grid.Column>
              <Button type='submit' basic color='orange' onClick={this.updateToken}>{this.state.status}</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));