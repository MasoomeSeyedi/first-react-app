import './App.css';
import Logo from './components/logo/logoComponent';
import Header from './components/header/header';
import Title from './components/title/title';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
    return ( 
        <div className = "container" >
        <Logo />
        <Header />
        <Title />
        < Main />
        <Footer />


        </div>
    );
}

export default App;