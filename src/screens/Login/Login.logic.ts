import { MethodTypes } from "@/enums";
import { fetcher } from "@/http";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginLogic = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errorText, setErrorText] = useState<string>("");

  const navigate = useNavigate();

  const handleClick = async () => {
    setErrorText("");
    const response = await fetcher({
      method: MethodTypes.POST,
      url: "/login",
      data: {
        username: username,
        password: password,
      },
    });
    console.log({ loginlogicici: response });
    if (response?.success) {
      localStorage.setItem("jwt", response?.token);
      navigate("/products");
    } else {
      setErrorText(response?.data?.message);
    }
  };

  return {
    handleClick,
    setUsername,
    setPassword,
    errorText,
  };
};

export default LoginLogic;
