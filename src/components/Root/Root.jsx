import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import style from "./Root.module.css";

export default function Root() {
  const location = useLocation();

  const isLocalMichiCardsRoute = location.pathname === "/local-michi-cards";
  const isCreatedCardRoute = location.pathname === "/card-created";

  return (
    <div
      className={`${style.root} ${
        isLocalMichiCardsRoute
          ? style.localMichiCards
          : isCreatedCardRoute
          ? style.localMichiCards
          : ""
      }`}
    >
      <Outlet />
    </div>
  );
}
