// import { useParams } from "react-router";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BookCard } from "../BookCard/BookCard";
// import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
// import styled from "styled-components";

// export const Section = () => {
//   // you will receive section name from URL here.
//   // Get books for only this section and show
//   //   Everything else is same as Home page
//   const {id}=useParams();
//   console.log("Section:",id)



//   const Main = styled.div`
//     /* Same as Homepage */
//   `;

//   return (
//     <>
//       <h2 style={{ textAlign: "center" }}>
//         {
//           //   Show section name here
//         }
//       </h2>
//       <SortAndFilterButtons handleSort={"give sorting function to component"} />

//       <Main className="sectionContainer">
//         {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
//       </Main>
//     </>
//   );
// };



import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = ({ sectionP }) => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  console.log(sectionP);
  const [sectionD, setSectionD] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/books").then(({ data }) => {
      let arr = [];
      data.map((e) => {
        if (e.section == sectionP) {
          arr.push(e);
        }
      });
      console.log(arr);
      setSectionD([...arr]);
    });
  }, []);
  // console.log("section", sectionD);
  const handleSort = (key, n) => {
    console.log(key);

    if (n == -1) {
      sectionD.sort((a, b) => b[key] - a[key]);
      setSectionD([...sectionD]);
    } else {
      sectionD.sort((a, b) => a[key] - b[key]);
      setSectionD([...sectionD]);
    }
    // console.log(data);n
  };
  const Main = styled.div`
    /* Same as Homepage */
  `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
        {sectionD.map((e) => (
          <BookCard
            key={e.id}
            id={e.id}
            imageUrl={e.imageUrl}
            title={e.title}
            price={e.price}
          />
        ))}
      </Main>
    </>
  );
};