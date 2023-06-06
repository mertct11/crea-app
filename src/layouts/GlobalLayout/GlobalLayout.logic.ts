import { MethodTypes } from "@/enums";
import { fetcher } from "@/http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GlobalLayoutLogic = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname !== "/login") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [window.location.pathname]);

  const appNameClick = () => {
    if (
      window.location.pathname !== "/products" &&
      window.location.pathname !== "/login"
    ) {
      navigate("/products");
    }
  };

  const logoutClick = () => {
    fetcher({ method: MethodTypes.POST, url: "/logout", data: {} })
      .then(() => {
        localStorage.removeItem("jwt");
        navigate("/login");
      })
      .catch((err) => {
        console.log({ logoutError: err });
      });
  };
  return {
    appNameClick,
    logoutClick,
    isLogged,
  };
};

export default GlobalLayoutLogic;
