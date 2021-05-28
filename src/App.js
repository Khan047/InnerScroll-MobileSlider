import "./App.css";
import AppContainer from "./components/util/AppContainer";
import AppWrapper from "./components/util/AppWrapper";
import Aside from "./components/util/Aside";
import Banners from "./components/banner/Banners";
import ChefCards from "./components/chef/ChefCards";
import TopBar from "./components/TopBar";
import ChefSlider from "./components/slider"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <TopBar/>
        <Banners/>
        <ChefCards />  
        {/* <ChefSlider /> */}
      </AppContainer>
      <Aside img="images/1.png" />
    </AppWrapper>
  );
}

export default App;
