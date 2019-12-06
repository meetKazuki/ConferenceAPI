import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import AddAttendee from './addAttendee';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import AddTalk from './addTalk';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      location: '',
      hostId: '',
      firstName: '',
      lastName: '',
      top: '',
      show: false,
    };
  }

  onChange = e => {
    console.log(e.target.value);
    this.setState({
      top: e.target.value,
    });
  };
  onTopicChange = e => {
    console.log(e.target.value);
    let nTopic = e.target.value;
    this.setState({ topic: nTopic });
  };

  onLocationChange = e => {
    this.setState({ location: e.target.value });
  };

  onHostIdChange = e => {
    this.setState({ hostId: e.target.value });
  };

  onFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  onLastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  onSubmit = () => {
    console.log('submitted');
    fetch('localhost:3000/talks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: this.state.topic }),
    })
      .then(response => response.json())
      .then(response =>
        response.status === 'success'
          ? (alert('Added Successfully'),
            setTimeout(() => {
              window.location.reload(true);
            }, 3000))
          : alert('Error Adding'),
      );
  };

  render() {
    return (
      <nav className="navigation">
        <Navbar>
          <Navbar.Brand href="#home">
            <h1 className="logo">MyLawConfrence </h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                +
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <>
                    <Button
                      variant="primary"
                      onClick={() => {
                        this.setState({ show: !this.state.show });
                      }}
                    >
                      Add Talk
                    </Button>

                    <Modal
                      show={this.stateshow}
                      onHide={() => {
                        this.setState({ show: !this.state.show });
                      }}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Enter Talk and Speaker</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          <input
                            type="text"
                            placeholder="Topic"
                            required
                            value={this.state.topic}
                            onChange={this.onTopicChange}
                            className="form-control"
                          />{' '}
                          <br />
                          <input
                            type="text"
                            value={this.state.location}
                            placeholder="Location"
                            className="form-control"
                            onChange={this.onLocationChange}
                            required
                          />
                          <input
                            type="text"
                            value={(this, state.hostId)}
                            placeholder="hostId"
                            className="form-control"
                            onChange={this.onHostIdChange}
                            required
                          />
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                          Add
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                  >
                </Dropdown.Item>
                <Dropdown.Item>
                  <AddAttendee
                    lastName={this.onLastNameChange}
                    firstName={this.onFirstNameChange}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
        <input
          type="text"
          value={this.state.top}
          onChange={e => this.onChange(e)}
        />
      </nav>
    );
  }
}

export default Header;
