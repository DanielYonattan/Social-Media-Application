
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  const loginAction = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
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

//export const useAuth = () => {
  //return useContext(AuthContext);
//};