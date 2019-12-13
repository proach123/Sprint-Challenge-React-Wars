import React from 'react';
import {Card,CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const peopleCard = (props) => {

    if (!props.name) return <h3>Loading...</h3>;

  return (
    
       <div className="card">
           <Card >
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.birthyear}</CardSubtitle>
           </Card>
       </div>
  );
}

export default peopleCard;