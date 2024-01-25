import CollectionItem from "./CollectionItem";
import menImg from "../../../../assets/images/men/img1.jfif";
import womenImg from "../../../../assets/images/women/img1.jfif";
import womenImg2 from "../../../../assets/images/women/img2.jfif";
import "./CollectionList.css";

const mockCollections = [
  {
    id: "c1",
    title: "Men Shoes Collection",
    description:
      "Bine ați venit în lumea Nike - acolo unde performanța întâlnește stilul și inovația se îmbină cu confortul. Explorați colecția noastră variată de încălțăminte Nike, creată pentru a vă îmbunătăți performanțele sportive și a vă oferi un stil inconfundabil în fiecare zi.",
    imgUrl: menImg,
    collectionUrl: "/men",
    buttonName: "Shop Men",
  },
  {
    id: "c2",
    title: "Women Shoes Collection",
    description:
      "Bine ați venit în lumea Nike - acolo unde performanța întâlnește stilul și inovația se îmbină cu confortul. Explorați colecția noastră variată de încălțăminte Nike, creată pentru a vă îmbunătăți performanțele sportive și a vă oferi un stil inconfundabil în fiecare zi.",
    imgUrl: womenImg,
    collectionUrl: "/women",
    buttonName: "Shop Women",
  },
  {
    id: "c3",
    title: "Women Shoes Collection",
    description:
      "Bine ați venit în lumea Nike - acolo unde performanța întâlnește stilul și inovația se îmbină cu confortul. Explorați colecția noastră variată de încălțăminte Nike, creată pentru a vă îmbunătăți performanțele sportive și a vă oferi un stil inconfundabil în fiecare zi.",
    imgUrl: womenImg2,
    collectionUrl: "/women",
    buttonName: "Shop Women",
  },
];

const CollectionList = () => {
  return (
    <div className="collection-list">
      {mockCollections.map((collection) => (
        <CollectionItem
          key={collection.id}
          imgUrl={collection.imgUrl}
          title={collection.title}
          description={collection.description}
          buttonName={collection.buttonName}
          collectionUrl={collection.collectionUrl}
        />
      ))}
    </div>
  );
};

export default CollectionList;
