import * as style from "./Footer.module.css";

import Nav from "./Nav";

export default function Footer() {
  const data = [
    "Home",
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
    "Tip",
  ];
  return (
    <footer className={style.header}>
      <Nav data={data} isTomato={true} />
      <span>2013 Valet Industrie. Inc</span>
    </footer>
  );
}
