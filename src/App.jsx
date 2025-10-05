import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;
