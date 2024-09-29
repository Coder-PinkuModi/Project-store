import { BrowserRouter as Router } from 'react-router-dom'
// import Header from "./components/Header/Header.jsx"
// import Carousel from "./components/Carousel-items-category/carousel-category.jsx";
// // import groceryImage from "../public/grocery-carousel.jpg"
// // import stationaryImage from "../ppublic/stationary-carousel.jpg"
// // import cosmeticsImage from "../public/electronics-carousel.jpg"
import Layout from "./routes/StaticRoute.jsx";

function App() {
  // const images = [
  //   { src: groceryImage, alt: 'First slide' },
  //   { src: stationaryImage, alt: 'Second slide' },
  //   { src: cosmeticsImage, alt: 'Third slide' },
  // ];

  return (
    // <div className="App">
    //   <Header />
    //   {/* <Carousel images={images} /> */}
    // </div>
    <Router>
      <Layout />
    </Router>
  );
  // return (
  //   <div className="w-screen h-screen">
  //     {/* <p className="text-3xl font-bold underline">Hello world</p> */}
  //     <Header />
  //   </div>
  // )
}

export default App