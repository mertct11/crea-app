import React from "react";
import "./GlobalLayout.style.scss";
import { IGlobalLayout } from "@/interfaces/IGlobalLayout";
import GlobalLayoutLogic from "./GlobalLayout.logic";
import { Header } from "@/components";
const GlobalLayout = (props: IGlobalLayout) => {
  const { children, isBgGradient } = props;
  const { appNameClick, logoutClick, isLogged } = GlobalLayoutLogic();

  return (
    <div
      className={"global-layout " + (isBgGradient ? "bg-gradient" : "bg-white")}
    >
      <Header
        appNameClick={appNameClick}
        logoutClick={logoutClick}
        isLogged={isLogged}
        isBgGradient={isBgGradient}
      />
      {children}
    </div>
  );
};

export default GlobalLayout;
