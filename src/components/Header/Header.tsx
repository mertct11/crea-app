import React from "react";
import "./Header.style.scss";

interface IHeader {
  appNameClick: () => void;
  logoutClick: () => void;
  isLogged: boolean;
  isBgGradient: boolean;
}

const Header = ({ appNameClick, isLogged,isBgGradient, logoutClick }: IHeader) => {
  return (
    <header className="header">
      <div className="left-content">
        <div onClick={appNameClick} className={"logo" + (isBgGradient ?' ' : ' text-gradient')}>
          <h1>CREA-APP</h1>
        </div>
      </div>
      <div className="right-content">
        {isLogged && (
          <button onClick={logoutClick} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
