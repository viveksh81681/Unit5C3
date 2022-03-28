// export const BookDetailsPage = () => {
//   // Get book details based on ID whenever user lands on the page
//   // ID will come from route

//   return (
//     <>
//       <div className="bookContainer">
//         <h2 className="title">{"show book tile here"}</h2>
//         <img className="image" src={"show book image here"} alt="#" />
//         <div className="author">{"show book Author here"}</div>
//         <div className="description">{"show book Description here"}</div>
//         <div className="price">{"show book Price here"}</div>
//         <div className="section">{"show book section name here"}</div>
//         <div className="isbnNumber">{"show book ISBN number here"}</div>
//         <ul className="reviews">
//           {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
//         </ul>
//       </div>
//     </>
//   );
// };



import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BookDetailsPage = () => {
  const { id } = useParams();
  const [idData, setIdData] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then(({ data }) => {
      setIdData(data);
    });
  }, []);

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{idData.title}</h2>
        <img className="image" src={idData.imageUrl} alt="#" />
        <div className="author">{idData.author}</div>
        <div className="description">{idData.description}</div>
        <div className="price">{idData.price}</div>
        <div className="section">{idData.section}</div>
        <div className="isbnNumber">{idData.isbnNumber}</div>
        <ul className="reviews">
          {/* {idData.reviews.map((e) => {
            return <li>{e}</li>;
          })} */}
        </ul>
      </div>
    </>
  );
};