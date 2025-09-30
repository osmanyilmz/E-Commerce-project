import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import EditorsPick from "./components/EditorsPick";
function App() {
  return (
    <>
      <Header />
      <PageContent>
        <HomePage />
      </PageContent>
      <Footer />
    </>
  );
}

export default App;
