import URL from './index.js'
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  const loginAction = async (username, password) => {
    try {
      const response = await fetch(`${URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
      });

      const res = await response.json();

      if (res != "false") {
        setUser(res);
        localStorage.setItem("userId", res.userId)
        localStorage.setItem("username", res.username)
        navigate("/home");
        return;
      }
      else {
        console.log("incorrect user/pass")
      }

    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUser(null);
    navigate("/login");
  };



  return (
    <AuthContext.Provider value={{ user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;
