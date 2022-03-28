// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <div className="navbar">
//         {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
//         {/* Example: 
//             <button className="history"> Link to history here  </button>  */}
//         {/* Home component will have `/` route and classname as `home`  */}

//         <button><Link to="/">Home</Link></button>
//         <button><Link to="Section/History">History</Link></button>
//         <button><Link to="Section/Mystery">Mystery</Link></button>
//         <button><Link to="Section/Mythology">Mythology</Link></button>
//         <button><Link to="Section/Technology">Technology</Link></button>
//       </div>
//     </>
//   );
// };


import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
        <Link to={"/"}>
          {"/"}
          <button className="home">home</button>{" "}
        </Link>
        <Link to={"/section/history"}>
          <button className="history">History</button>
        </Link>
        <Link to={"/section/mystery"}>
          <button className="mystery">Mystery</button>
        </Link>
        <Link to={"/section/mythology"}>
          <button className="mythology">Mythology</button>
        </Link>
        <Link to={"/section/technology"}>
          <button className="technology"> Technology</button>
        </Link>
      </div>
    </>
  );
};