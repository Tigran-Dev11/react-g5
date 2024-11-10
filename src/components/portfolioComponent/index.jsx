import { InfoComponent } from "../portfolioComponent/infoComponent";
import { Info } from "./Info";

export const PortfolioComponent = () => {
  return (
    <div>
      <InfoComponent/>   
      <div>
        <video width="500px" height="400px" controls="controls">
          <source
            src="https://media.geeksforgeeks.org/wp-content/uploads/20231020155223/
Full-Stack-Development-_-LIVE-Classes-_-GeeksforGeeks.mp4"
            type="video/mp4"
          />
        </video>

        <div>
          <h1>Lorem Ipsum is simply dummy text.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy .
          </p>
        </div>
      </div>
      <Info/>
    </div>
  );
};
