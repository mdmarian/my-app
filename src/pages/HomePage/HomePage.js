import React from "react";

import ProductsList from "./components/Products/ProductsList";
import DiscountBanner from "./components/DiscountBanner";
import CollectionList from "./components/Collections/CollectionList";
import Header from "../../components/Header";

function HomePage() {
  return (
    <div>
      <DiscountBanner />
      <CollectionList />
      <ProductsList />
    </div>
  );
}

export default HomePage;
