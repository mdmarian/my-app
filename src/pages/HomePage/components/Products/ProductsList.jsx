import ProductItem from "./ProductItem";
import menImg from "../../../../assets/images/men/img1.jfif";
import menImg2 from "../../../../assets/images/men/img2.jfif";
import womenImg1 from "../../../../assets/images/women/img2.jfif";
import womenImg2 from "../../../../assets/images/women/img3.jfif";
import "./ProductsList.css";

const mockProducts = [
  {
    id: "c1",
    title: "Nike Air Force 1",
    description: "$200",
    imgUrl: menImg,
    collectionUrl: "/men",
    buttonName: "Shop Men",
  },
  {
    id: "c2",
    title: "Nike Air Dunk",
    description: "$195",
    imgUrl: menImg2,
    collectionUrl: "/women",
  },
  {
    id: "c3",
    title: "Nike W Air Force 1",
    description: "$190",
    imgUrl: womenImg1,
    collectionUrl: "/women",
  },
  {
    id: "c4",
    title: "Nike W Air Max",
    description: "$210",
    imgUrl: womenImg2,
    collectionUrl: "/women",
  },
];

const ProductsList = () => {
  return (
    <div className="products-list">
      {mockProducts.map((products) => (
        <ProductItem
          key={products.id}
          imgUrl={products.imgUrl}
          title={products.title}
          description={products.description}
          collectionUrl={products.collectionUrl}
        />
      ))}
    </div>
  );
};

export default ProductsList;
