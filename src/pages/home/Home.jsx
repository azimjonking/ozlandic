import "./Home.css";
import styles from "./Home.module.css";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Main Content</h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
