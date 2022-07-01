import "bootstrap/dist/css/bootstrap.min.css";
import Carss from "./components/Cars";
import Navbarr from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";


const carsinfo = [
  {
    name: "Mercedes-Benz SL Class",
    price: 20000,
    imgSrc: "./img/car1.jpeg",
  },
  {
    name: "Mercedes-Benz AMG GT",
    price: 40000,
    imgSrc: "./img/car2.jpeg",
  },
  {
    name: "Mercedes-Benz A Class",
    price: 50000,
    imgSrc: "./img/car3jpeg.jpeg",
  },
];

function App() {
  return (
    <div className="App">
       <Navbarr/> 
       <Carss carsinfo={carsinfo}/>
       <Footer/>
    </div>
  );
}

export default App;
