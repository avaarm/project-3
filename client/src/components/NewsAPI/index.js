// import React, { useEffect, useState } from "react";
// import { Row, Col } from "react-materialize";
// import NewsCard from "../NewsCard";
// import axios from "axios";
// import "./style.css";

// function News(props) {
//   const [news, setNews] = useState([]);
//   // const [newsSearch, setNewsSearch] = useState("environment")
//   // // toggling between 5 vs all the results
//   const [seeAll, toggleSeeAll] = useState(false);

//   useEffect(() => {
//     loadNews(props.search);
//   }, [props.search]);

//   function loadNews(query) {
//     axios.get("/api/news/getnews/" + query)
//       .then((response) => {
//         setNews(response.data);
//       })
//       .catch((err) => console.log("error is caught" + err));
//   }

//   function handleToggleSeeAll() {
//     toggleSeeAll(!seeAll);
//   }

//   return (
//     <Row>
//       <Col>
//           <Row>
//             <Col
//               m={6}
//               s={12}>
//               {!seeAll
//                 ? news
//                     .slice(0, 4)
//                     .map((item, index) => (
//                       <NewsCard
//                         title={item.title}
//                         source={item.source.name}
//                         author={item.author}
//                         description={item.description}
//                         url={item.url}
//                         urlToImage={item.urlToImage}
//                         publishedAt={item.publishedAt}
//                         key={index}
//                       />
//                     ))
//                 : news
//                     .slice(4, 8)
//                     .map((item, index) => (
//                       <NewsCard
//                         title={item.title}
//                         source={item.source.name}
//                         author={item.author}
//                         description={item.description}
//                         url={item.url}
//                         urlToImage={item.urlToImage}
//                         publishedAt={item.publishedAt}
//                         id={index}
//                       />
//                     ))}
//             </Col>
//           </Row>
//           <Row>
//             <Col s={12} className="buttonCol">
//               {/* can make a react router link here  */}
//               {!seeAll ? (
//                 <button
//                   className="waves-effect waves-light btn newsButton"
//                   onClick={handleToggleSeeAll}
//                 >
//                   See More
//                 </button>
//               ) : (
//                 <button
//                   className="waves-effect waves-light btn newsButton"
//                   onClick={handleToggleSeeAll}
//                 >
//                   See Less
//                 </button>
//               )}
//             </Col>
//           </Row>
//       </Col>
//     </Row>
//   );
// }
// export default News;
