
import HeroSection from "./components/heroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import LatestProducts from "./components/LatestProducts";
import ShopexOffer from "./components/ShopexOffer";
import Homes from "./components/homes";
import TopCategories from "./components/topCategories";
import NewsletterSection from "./components/Newsletter";
import LogoSection from "./components/logos";
import LatestBlog from "./components/LatestBlog";

export default function Home() {
  return (
    <div>
    <HeroSection/>
    <FeaturedProducts/>
    <LatestProducts/>
    <ShopexOffer/>
    <Homes/>
    <TopCategories/>
    <NewsletterSection/>
    <LogoSection/>
    <LatestBlog/>
    </div>
  );
}
