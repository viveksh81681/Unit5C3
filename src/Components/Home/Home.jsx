// import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import styled from "styled-components";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./Home.css"

// export const Home = () => {
//   // get all books when user lands on the page
//   // populate them as mentioned below
//   const [allbooks, setAllBooks]=useState([])
//   const [data, setData]=useState([])

//   useEffect(()=>{
//     axios.get("http://localhost:8080/data").then((res)=>{
//       // console.log("res:",res)
//       setAllBooks([...res.data])
//     })
//   },[setData])
//   console.log("allbooks:",allbooks)


//   const Main = styled.div`
//     /* Apply some responsive styling to children */
//   `;



//   return (
 
//     <div className="homeContainer">
//       <h2 style={{ textAlign: "center" }}>Home</h2>
//       {/* <SortAndFilterButtons
//         handleSort={
//           "give handleSort function to this component, that sorts books"
           
//         }
//       /> */} 

//        <button className="sortByTitleAsc" onClick={()=>{
//          let sorted=allbooks.sort((a,b)=> a.title-b.title)
//          setData([...sorted])
//          console.log("sorted:",sorted)
//       }}>sortByTitleAsc</button>
    
//     <button className="sortByTitleDesc" onClick={()=>{
//         let sorted=allbooks.sort((a,b)=> b.title-a.title)
//         setData([...sorted])
//          console.log("sorted:",sorted)
//       }}>sortByTitleDsc</button>

//       <button className="sortByPriceAsc" onClick={()=>{
//          let sorted=allbooks.sort((a,b)=> a.price-b.price)
//          setData([...sorted])
//       }}>sortByPriceAsc</button>
    
//     <button className="sortByPriceDesc" onClick={()=>{
//         let sorted=allbooks.sort((a,b)=> b.price-a.price)
//         setData([...sorted])
//          console.log("sorted:",sorted)
//       }}>sortByPriceDsc</button>





//       <Main className="mainContainer">
//         {/* style={{display:"grid"}} */}
//             {/* Iterate over books that you get from network
//             populate a <BookCard /> component
//             pass down books id, imageUrl, title, price and anything else that you want to 
//             show in books Card.
//         */}
           
//            {allbooks.map((el) => {
//         return (
//           <div>
//             <div key={el.id}><img src={el.imageUrl} alt="img" /></div>
//             <div className="name">{"title: " + el.title}</div>
//             <div className="price">{"price: "+ el.price}</div>
//           </div>
//         );
//       })}

//       </Main>
//     </div>
//   );
// };



import "./Home.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import { styled } from "styled-components";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
      setData([...data]);
    });
  }, []);
  // console.log(data);

  const handleSort = (key, n) => {
    console.log(key);

    if (n == -1) {
      data.sort((a, b) => b[key] - a[key]);
      setData([...data]);
    } else {
      data.sort((a, b) => a[key] - b[key]);
      setData([...data]);
    }
    console.log(data);
  };
  // get all books when user lands on the page
  // populate them as mentioned below

  // const Main = styled.div`
  //   /* Apply some responsive styling to children */
  // `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <div className="mainContainer">
        {data.map((e) => (
          <BookCard
            key={e.id}
            id={e.id}
            imageUrl={e.imageUrl}
            title={e.title}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

// {/*
// Iterate over books that you get from network
// populate a <BookCard /> component
// pass down books id, imageUrl, title, price and anything else that you want to
// show in books Card.
// */}