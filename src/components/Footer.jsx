import * as style from "./Footer.module.css";

import Nav from "./Nav";

export default function Footer() {
  return (
    <footer className={style.header}>
      <Nav isTomato={true} />
      <span>2013 Valet Industrie. Inc</span>
    </footer>
  );
}
