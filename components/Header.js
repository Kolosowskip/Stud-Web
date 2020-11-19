// components/Header.js
import Link from "next/link";

import "./scss/header.scss";

const Header = props => (
  <Link href="/">
    <div className="Header">{props.appTitle}</div>
  </Link>
);

export default Header;
