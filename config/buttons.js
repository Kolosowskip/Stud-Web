// config/buttons.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faMap,
  faInfo
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Wyszukaj",
    path: "/explore",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  // {
  //   label: "W pobliżu",
  //   path: "/nearme",
  //   icon: <FontAwesomeIcon icon={faMap} />
  // },
  {
    label: "O Nas",
    path: "/mycart",
    icon: <FontAwesomeIcon icon={faInfo} />
  },
  {
    label: "Kontakt",
    path: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;