export const Navbar = (() => {
   
  const navTabItems = ["Home", "Menu", "Contact"];

  function handlePageRemove() {
    const elements = document.querySelectorAll(".page");
    elements.forEach(element => element.remove())
  }

  function handlePageChange(e) {
    const menuSelection = e.target.textContent;
    const header = document.querySelector(".header");
    const page = document.createElement("h1");
    page.classList.add("page");
    header.insertAdjacentElement("afterend", page);

    switch (menuSelection) {
      case "Home":
        page.textContent = "Home page";      
        break;
      case "Menu":
        page.textContent = "Menu page";
        break;
      case "Contact":
        page.textContent = "Contact page";
        break;
      default:
        page.textContent = "Home page";
    }
  }
  
  function handleToggleMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function handleCloseMobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  function createHamburger() {
    
  }
  
  function createComponent() {
    
    const header = document.createElement("header");
    header.classList.add("header");
    
    const nav = document.createElement("nav");
    nav.classList.add("navbar");
    
    const logo = document.createElement("a");
    logo.classList.add("nav-logo");
    logo.text = "Cheesy Chops";
    
    const navMenu = document.createElement("ul");
    navMenu.classList.add("nav-menu");

    const hamburgerMenu = document.createElement("button");
    hamburgerMenu.classList.add("hamburger");
    hamburgerMenu.addEventListener("click", handleToggleMobileMenu);

    header.appendChild(nav);
    nav.appendChild(logo);
    nav.appendChild(navMenu);
    nav.appendChild(hamburgerMenu);
    
    navTabItems.forEach((item) => {
      const navItem = document.createElement("li");
      navItem.setAttribute("id", item);
      navItem.classList.add("nav-item");
      const navLink = document.createElement("a");
      navLink.href = "#";
      navLink.classList.add("nav-link");
      navLink.textContent = item;
      navLink.addEventListener("click", handleCloseMobileMenu);
      navLink.addEventListener("click", handlePageRemove);
      navLink.addEventListener("click", handlePageChange);

      navMenu.appendChild(navItem);
      navItem.appendChild(navLink);
    });


    for (let i = 0; i < 3; i++) {
      const bar = document.createElement("span");
      bar.setAttribute("id", i);
      bar.classList.add("bar");
      hamburgerMenu.appendChild(bar);
    }
 
    return header;
  }

  return {
    createComponent,
  }
})();
