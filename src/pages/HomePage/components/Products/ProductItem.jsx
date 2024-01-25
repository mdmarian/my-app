import Card from "../../../../components/UI/Card/Card";

const CardItem = (props) => {
  return (
    <Card
      imgUrl={props.imgUrl}
      title={props.title}
      description={props.description}
      collectionUrl={props.collectionUrl}
    />
  );
};
export default CardItem;
