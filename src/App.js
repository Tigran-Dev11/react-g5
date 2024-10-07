import "./App.css";
import { Router } from "../src/router/routes";
import Header from "./components/header";
import { Footer } from "./components/footer";
function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
