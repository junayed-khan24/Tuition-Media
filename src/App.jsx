import Blog from "./Components/Blog"
import Footer from "./Components/Footer"
import Slider from "./Components/Slider"
import Team from "./Components/Team"


function App() {

  return (
   <div className="App">
      <h1 className="text-7xl font-bold text-center text-red-900">Welcome to Tuition Media</h1>
      <Slider></Slider>
      <Team></Team>
      <Blog></Blog>
      <Footer></Footer>
   </div>
  )
}

export default App
