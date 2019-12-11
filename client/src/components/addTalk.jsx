import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddTalk = () => {
  const [show, setShow] = useState(false);
  const [topic, setTopic] = useState('');
  const [hostId, setHostId] = useState('');
  const [location, setLocation] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Talk
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Talk and Speaker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              type="text"
              placeholder="Topic"
              required
              value={topic}
              onChange={e => {
                setTopic(e);
              }}
              className="form-control"
            />{' '}
            <br />
            <input
              type="text"
              value={location}
              placeholder="Location"
              className="form-control"
              onChange={e => {
                setLocation(e.target.value);
              }}
              required
            />
            <input
              type="text"
              value={hostId}
              placeholder="hostId"
              className="form-control"
              onChange={e => {
                setHostId(e);
              }}
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
  );
};

export default AddTalk;
