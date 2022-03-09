
import Slider from "../components/Slider";
import Movie from "../components/Movie";
import Trailer from "../components/Trailer";
import News from "../components/News";


const Home =() =>{
  return (
    <div className="App">
      <Slider />
      <Movie />
      <Trailer />
      <News />
    </div>
  );
}

export default Home;
