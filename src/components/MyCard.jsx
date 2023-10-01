import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

function MyCard({Img, Name, Desc, ColorBadge, TextBadge}) {
  
  const ImgConfg={
    height: "40hv",
  };
  const TextConfg={
    display: "grid",
    justifyContent:"center",
  };
  const CardConfg={
    width:"27rem",
  
    
};
  
  return (
    <Card style={CardConfg}>
      <Card.Img variant="top" src= {Img} style={ImgConfg} />
      <Card.Body style={TextConfg}>
        <Card.Title style={TextConfg}> {Name} </Card.Title>
        <Card.Text> {Desc} </Card.Text>
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
      <Badge bg={ColorBadge}>{TextBadge}</Badge>
    </Card>
  );
}

export default MyCard;
