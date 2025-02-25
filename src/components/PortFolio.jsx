import React from "react";
import LoginPage from "../../public/LoginPage.png";
import Virat from "../../public/Virat.png";
import TastyBurger from "../../public/TastyBurger.png";
import HomeServices from "../../public/HomeServices.jpeg";
import Portfolio from "../../public/Portfolio.png";
import TodoList from "../../public/TodoList.png";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: TastyBurger,
      name: "TastyBurger",
      about: "Tasty Burger is a React-based food ordering app.",
      live: "https://food-app-react-henna.vercel.app/",
      link: "https://github.com/Pratham-3326/food-app_React"
    },
    {
      id: 2,
      logo: HomeServices,
      name: "HomeServicesApp",
      about: "HomeServices is a full-stack home maintenance booking app.",
      live:"https://home-services-two.vercel.app/",
      link:"https://github.com/Pratham-3326/Home-Services"
    },
    {
      id: 3,
      logo: Portfolio,
      name: " Personal Portfolio",
      about: "A portfolio website showcasing skills and projects.",
      live: "https://pratham-3326.github.io/portfolio/",
      link: "https://github.com/Pratham-3326/portfolio"
    },
    {
      id: 4,
      logo: TodoList,
      name: "TodoList",
      about: "A simple to-do list app for managing tasks efficiently.",
      live: "https://to-do-application-react.vercel.app/",
      link: "https://github.com/Pratham-3326/ToDo-Application-React"
    },
    {
      id: 5,
      logo: Virat,
      name: "ViratAnimation",
      about: "Virat Animation is a dynamic motion graphics project.",
      live: "https://pratham-3326.github.io/ViratKohliAnimation/",
      link: "https://github.com/Pratham-3326/ViratKohliAnimation"
    },
    {
      id: 6,
      logo: LoginPage,
      name: "LoginPage",
      about: "A login page for user authenti-cation and secure access.",
      live: "https://animated-loginpage.vercel.app/",
      link: "https://github.com/Pratham-3326/Animated_Loginpage"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, about, link, live }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {about}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <a href={live || "#"} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Preview
                  </button>
                </a>
                <a href={link || "#"} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
