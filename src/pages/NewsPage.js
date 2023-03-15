import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $api from "../api";
import { getNews } from "../store/newsReducer";
import { getNewsList } from "../helpers/news";

const NewsPage = () => {
  const news = useSelector((news) => news.news.news);
  const dispatch = useDispatch();
  //   const [news, setNews] = useState([]);
  useEffect(() => {
    dispatch(getNewsList());
  }, []);
  return (
    <div className="news">
      {news &&
        news.map((one_news) => (
          <div className="one_news">
            <div className="news_img">
              <img src={one_news.img} alt="" />
            </div>
            <div className="news_info">
              <div className="news_title">{one_news.title}</div>
              <div className="news_desc">{one_news.description}</div>
              <div className="news_auth">{one_news.author}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default NewsPage;
