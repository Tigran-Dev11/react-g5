import "./style.css"
import { IMAGES } from "../../assets/Images";
export const Info = () => {
  return (
    <div className="container">
      <h1>Սարգիս Գուրգենի Բաղդյան</h1>
      <ul className="info">
        <li>PhoneNumber: 37498185654</li>
        <li>email: baghdyan2000@gmail.com</li>
      </ul>
      <div className="infoPlace">
        <p>
          Ես Սարգիսն եմ ծնվել եմ 2000 թվականի փետրվարի 21-ին սովորել եմ
          Բյուրեղավանի թիվ 2-րդ միջնակարգ դպրոցում 2006-2014 թվականներին դպրոցը
          ավարտելուց հետո ընդունվել եմ Բյուրեղավանի արհեստագործական ուսումնարանը
          2014-2017 թվականներին որպես ավտոփականագործ 2015 թվականին
          համատեղությամբ սովորել եմ Թումո ստեղծարար տեխնոլոգիաների կենտրոնում։
        </p>
        <img src={IMAGES.myPhoto} alt="MyPhoto" />
      </div>
    </div>
  );
};
