import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Issue = ({issues, loading, history}) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  
  return (
    <ListGroup className = "mb-4">
      {issues.map(issues => (
        <ListGroup.Item>
        <div className = "container">
        <div class = "child">
         <Card border = "info" style={{ width: '55rem'}} className="mb-2" bg = "light">
             <Card.Body>
              <Card.Title>Title: "{issues.title}" Issue #:{issues.number} State:{issues.state}</Card.Title>
              {/* <Card.Text>
                <p>Issue #: </p>
                <p>State: </p>
              </Card.Text> */}
                <Button variant="primary" onClick = {() => history.push({pathname:`/${issues.number}`, state:{detail:issues}})}> More Info</Button>
              </Card.Body>
         </Card> 
         </div>
         </div>
         </ListGroup.Item>
      ))}
    </ListGroup>
    );
}

export default Issue;
