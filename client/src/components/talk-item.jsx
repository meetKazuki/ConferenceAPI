import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const TalkItem = ({ talk, handleAddAttendeeToTalk, handleDeleteTalk }) => (
  <ListGroup.Item style={{ display: 'flex', width: '100%' }}>
    <section
      style={{ display: 'block', width: '100%', justifyItems: 'flex-start' }}
    >
      <p>{talk.topic}</p>
      <p>{talk.location}</p>
      <p>{talk.hostId}</p>
    </section>
    <section className="" style={{ justifyItems: 'flex-end' }}>
      <Badge variant="secondary" onClick={handleAddAttendeeToTalk}>
        +
      </Badge>
      <Badge variant="secondary" onClick={handleDeleteTalk}>
        X
      </Badge>
    </section>
  </ListGroup.Item>
);

export default TalkItem;
