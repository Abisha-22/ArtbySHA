import Nav from './components/Nav'; 
import Hero from './components/Hero'; 
import Gallery from './components/Gallery'; 
import About from './components/About'; 
import CustomArt from './components/CustomArt'; 
import Contact from './components/Contact';
 import Footer from './components/Footer';
  import './App.css'; 
  export default function App() { 
      return (    
         <>      
          <Nav />   
          <Hero />   
          <Gallery />     
          <About />       
          <CustomArt />       
          <Contact />       
          <Footer />     
          </>  
          ); 
        }