import "../contact/style.css";
import { Header } from "../../webPages/header/index"
import { Footer } from "../../webPages/footer/index"
import {About} from "../../about/index"

export const Contact = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Footer />
    </div>
  );
};
