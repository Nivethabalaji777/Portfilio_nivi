import food from "./proimage/food.jpg";
import zen from "./proimage/zen.jpg";
import note from "./proimage/Note.jpg";
import url from "./proimage/url.jpg";
import password from "./proimage/password.jpg";
import library from "./proimage/library.jpg";
import student from "./proimage/student.jpg";
import price from "./proimage/price.jpg";
import calc from "./proimage/calc.jpg";
import makeup from "./proimage/makeup.jpg";
import currency from "./proimage/currency.jpg";

export const projects = [
  {
    title: "Quick-Bites",
    image: food,
    category: "MERN-stack",
    github: process.env.REACT_APP_GITHUB_QUICK,
    webapp: process.env.REACT_APP_WEBAPP_QUICK,
  },
  {
    title: "Zen class_clone",
    image: zen,
    category: "MERN-stack",
    github: process.env.REACT_APP_GITHUB_ZEN,
    webapp: process.env.REACT_APP_WEBAPP_ZEN,
  },
  {
    title: "Note Making",
    image: note,
    category: "MERN-stack",
    github: process.env.REACT_APP_GITHUB_NOTE,
    webapp: process.env.REACT_APP_WEBAPP_NOTE,
  },
  {
    title: "tinify-URL",
    image: url,
    category: "MERN-stack",
    github: process.env.REACT_APP_GITHUB_URL,
    webapp: process.env.REACT_APP_WEBAPP_URL,
  },
  {
    title: "Auth App",
    image: password,
    category: "MERN-stack",
    github: process.env.REACT_APP_GITHUB_PSWD,
    webapp: process.env.REACT_APP_WEBAPP_PSWD,
  },
  {
    title: "Library Management",
    image: library,
    category: "Reactjs",
    github: process.env.REACT_APP_GITHUB_LIBRARY,
    webapp: process.env.REACT_APP_WEBAPP_LIBRARY,
  },
  {
    title: "Price cart",
    image: price, 
    category: "Reactjs",
    github: process.env.REACT_APP_GITHUB_PRICE,
    webapp: process.env.REACT_APP_WEBAPP_PRICE,
  },
  {
    title: "Student Teacher Management",
    image: student,
    category: "Reactjs",
    github: process.env.REACT_APP_GITHUB_STUDENT,
    webapp: process.env.REACT_APP_WEBAPP_STUDENT,
  },
  {
    title: "calculator",
    image: calc,
    category: "JavaScript",
    github: process.env.REACT_APP_GITHUB_CALC,
    webapp: process.env.REACT_APP_WEBAPP_CALC,
  },
  {
    title: "MakeUp App",
    image: makeup,
    category: "JavaScript",
    github: process.env.REACT_APP_GITHUB_MAKEUP,
    webapp: process.env.REACT_APP_WEBAPP_MAKEUP,
  },
  {
    title: "Currency Convertor",
    image: currency,
    category: "JavaScript",
    github: process.env.REACT_APP_GITHUB_CURRENCY,
    webapp: process.env.REACT_APP_WEBAPP_CURRENCY,
  },
];
