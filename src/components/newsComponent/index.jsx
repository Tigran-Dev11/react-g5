import { NewComponent } from "./GalleryComponent/newComponent";
import { GalleryComponent } from "./GalleryComponent";
import { SearchComponent } from "../../common/searchComponent";
import { IMAGES } from "../../assets/images";
import * as S from "./styled";

export const NewsComponent = () => {
  const info = [
    {
      id: 1,
      image: IMAGES.BoxImage,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ",
      firstSubTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      secondSubTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 2,
      image: IMAGES.BoxImage2,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ",
      firstSubTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
  ];

  const news = [
    {
      id: 1,
      image: IMAGES.news1,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
    {
      id: 2,
      image: IMAGES.news2,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
    {
      id: 3,
      image: IMAGES.news3,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
    {
      id: 4,
      image: IMAGES.news4,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
    {
      id: 5,
      image: IMAGES.news5,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
    {
      id: 6,
      image: IMAGES.news6,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
    {
      id: 7,
      image: IMAGES.news7,
      name: "John smash",
      time: ".5min",
      title: "Lorem Ipsum is simply dummy text dummy text ? ",
    },
  ];

  return (
    <S.NewsPage>
      <S.Place>
        <S.Title>Lorem Ipsum is simply dummy text of the printing and.</S.Title>
        <S.SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.SubTitle>
        <S.SearchPlace>
          <S.Input type="text" placeholder="Search" />
          <S.Button>
            <S.SearchImage src={IMAGES.search} alt="Search" />
          </S.Button>
        </S.SearchPlace>
      </S.Place>
      <S.Section1>
        <S.GalleryPage>
          <div>
            {info.map((item) => {
              return <GalleryComponent item={item} key={item.id} />;
            })}
          </div>
        </S.GalleryPage>
        <S.NewsPlace>
          {news.map((item) => {
            return <NewComponent item={item} key={item.id} />;
          })}
        </S.NewsPlace>
      </S.Section1>
      <SearchComponent/>    
    </S.NewsPage>
  );
};
