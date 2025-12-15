import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "./redux/store";
import { initializeAuth } from "./redux/actions/authInit";
import { fetchCategories } from "./redux/actions/productActions";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ShoppingCartPage from "./components/ProductDetailPage/ShoppingCartPage";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId"
            component={ProductDetailPage}
          />
          <Route path="/product-detail/:id" component={ProductDetailPage} />
          <Route path="/cart" component={ShoppingCartPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}
