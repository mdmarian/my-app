import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const navigate = useNavigate();

  const navigateToCardLink = (event) => {
    event.preventDefault();
    navigate(props.collectionUrl);
  };

  return (
    <div className="card">
      <div className={props.imgClass || "card-img"}>
        <img src={props.imgUrl} alt="CardImg" />
      </div>
      {props.title ? <div className="card-title">{props.title}</div> : null}
      {props.description ? (
        <div className="card-description">{props.description}</div>
      ) : null}
      {props.buttonName ? (
        <Button onClick={navigateToCardLink}>{props.buttonName}</Button>
      ) : null}
    </div>
  );
};
export default Card;
