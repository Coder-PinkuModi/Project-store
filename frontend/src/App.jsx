import Header from "./components/Header/Header.jsx"
import Carousel from "./components/Carousel-items-category/carousel-category.jsx";
// import groceryImage from "../public/grocery-carousel.jpg"
// import stationaryImage from "../ppublic/stationary-carousel.jpg"
// import cosmeticsImage from "../public/electronics-carousel.jpg"

function App() {
  // const images = [
  //   { src: groceryImage, alt: 'First slide' },
  //   { src: stationaryImage, alt: 'Second slide' },
  //   { src: cosmeticsImage, alt: 'Third slide' },
  // ];

  return (
    <div className="App">
      <Header />
      {/* <Carousel images={images} /> */}
    </div>
  );
  // return (
  //   <div className="w-screen h-screen">
  //     {/* <p className="text-3xl font-bold underline">Hello world</p> */}
  //     <Header />
  //   </div>
  // )
}

export default App