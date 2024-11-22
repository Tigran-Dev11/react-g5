import Header from "./components/header";
import { Router } from "./router/routes";
import { Footer } from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;

