import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Router from "./router/routes"

function App() {
  return (
    <div>
      <Header/>
      <Router/>
      <Footer/>
    </div>
    
  )
}

export default App;
