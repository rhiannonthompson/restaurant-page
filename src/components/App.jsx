import "../styles/index.scss";
import Navbar from "./Navbar";
import homeImage from "../images/testHome.jpg";

export default function App() {
  return (
    <>
      <Navbar />
      <section>
        <h1>this is the home page</h1>
      </section>
      <img src={homeImage} alt="home image" width="100%"/>
    </>
  )
}