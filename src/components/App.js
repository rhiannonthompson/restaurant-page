import { Navbar } from "./Navbar";


export const App = (() => {
  
  function render() {
    const root = document.querySelector("#root");
    root.appendChild(Navbar.createComponent());
  }

  return {
    render,
  }
})();


