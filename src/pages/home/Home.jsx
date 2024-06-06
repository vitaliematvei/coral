import Banner from "../../components/Banner";
import Category from "./Category";
import Products from "./Products";
import Collection from "./Collection";
import BestSellers from "./BestSellers";
import SingleProduct from "./SingleProduct";
import Newsletter from "./Newletters";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Collection />
      <BestSellers />
      {/* <SingleProduct /> */}
      <Newsletter />
    </div>
  );
};

export default Home;
