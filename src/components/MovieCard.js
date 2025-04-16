import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = ({element,index}) => {
    const{title,description,poster,rating}=element
    const navigate=useNavigate()
    return (
        <Card style={{width:"17vw",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Card.Img src={poster} style={{height:"50vh"}}/>
            <Card.Body>
                <Card.Text><b>{title}</b></Card.Text>
            </Card.Body>
            <ListGroup variant="flush" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <ListGroupItem>{description}</ListGroupItem>
                <ListGroupItem><b><i>Rating:</i></b> {rating}</ListGroupItem>
            </ListGroup>
            <button className="btn btn-outline-danger m-1" onClick={()=>navigate(`/trailerpage/${index}`)}>Watch Trailer</button>
        </Card>
    );
};

export default MovieCard;