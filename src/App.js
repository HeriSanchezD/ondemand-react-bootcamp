import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePageComponent from './components/HomePageComponent';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header> */}
      <header>
        <HeaderComponent/>
      </header>
      <HomePageComponent/>
      <footer>
        <FooterComponent/>
      </footer>
      
    </div>
    
  );
}

export default App;
