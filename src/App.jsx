import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product-detail" component={ProductDetailPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;
