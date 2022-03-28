// import { useEffect, useState } from "react";
// import axios from "axios";


// export const SortAndFilterButtons = ({handleSort}) => {
//   // const [allbooks, setAllBooks]=useState([])
//   // const [data, setData]=useState([])

//   // useEffect(()=>{
//   //   getData()
//   // },[setData])


//   // const getData=()=>{
//   //   axios.get("http://localhost:8080/data").then((res)=>{
//   //     // console.log("res:",res.data)
//   //     setAllBooks(res.data)
//   //   })
//   // }
//   // console.log("allbooks:",allbooks)

//   return (
//     <div className="sortButtons">
//       {/*
//         Create 4 sorting buttons here to sort by following criteria:

//         sort title in Ascending order  class: sortByTitleAsc
//         sort title in Descending order class: sortByTitleDesc
//         sort price asending order      class: sortByPriceAsc
//         sort price descending order    class: sortByPriceDesc

//         on every button click, call the reusable sorting function
//         you received from Parent component, 
//         and sort the data
//       */}

//         <button className="sortByTitleAsc" onClick={()=>{
//           // const sorted=allbooks.sort((a,b)=>{return a.title-b.title})
//           // setData([...sorted])
//           // // getData(sorted)
//           // console.log("sorted",sorted)
//           handleSort()
//         }}>Sort by title Asc</button>

//         <button className="sortByTitleAsc" onClick={()=>{
//           // const sorted=allbooks.sort((a,b)=>{return a.title-b.title})
//           // setData([...sorted])
//           // // getData(sorted)
//           // console.log("sorted",sorted)
//         }}>Sort by title Asc</button>

//         <button className="sortByPriceAsc" onClick={()=>{
//           // const sorted=allbooks.sort((a,b)=>{return a.price-b.price})
//           // setData([...sorted])
//           // // getData(sorted)
//           // console.log("sorted",sorted)
//         }}>Sort by price Asc</button>

//         <button className="sortByPriceDsc" onClick={()=>{
//           // const sorted=allbooks.sort((a,b)=>{return a.price-b.price})
//           // setData([...sorted])
//           // // getData(sorted)
//           // console.log("sorted",sorted)
//         }}>Sort by price Dsc</button>

//     </div>
//   );
// };



export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      <button
        className="sortByTitleAsc"
        onClick={() => {
          handleSort("title", 1);
        }}
      >
        sort By Title Asc
      </button>

      <button
        className="sortByTitleDesc"
        onClick={() => {
          handleSort("title", -1);
        }}
      >
        sort By Title Desc
      </button>

      <button
        className="sortByPriceAsc"
        onClick={() => {
          handleSort("price", 1);
        }}
      >
        sort By Price Asc
      </button>
      
      <button
        className="sortByPriceDesc"
        onClick={() => {
          handleSort("price", -1);
        }}
      >
        sort By Price Desc
      </button>
    </div>
  );
};
/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */