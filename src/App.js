import logo from './logo.svg';
import TopBar from './components/TopBar';
import styles from './app.module.css';
import Menu from './components/Menu';
import MainSlides from './components/MainSlides';
import Deps from './components/Deps';
import Appointment from './components/Appointment';
import Employees from './components/Employees';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <TopBar />
      <Menu />
      <MainSlides />
      <Deps />
      <Appointment />
      <Employees />
      <Footer />
    </div>
  );
}

export default App;
