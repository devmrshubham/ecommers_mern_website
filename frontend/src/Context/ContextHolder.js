import { useEffect, useState } from "react";
import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const MainContext = createContext();

const ContextHolder = (props) => {

  const [admin, setAdmin] = useState(false)
  const notify = (msg, type) => {

    if (type === 1) {
      toast.success(msg)
    } else {
      toast.error(msg)
    }
  }

  const [loader, setLoader] = useState();
  useEffect(() => {
    const admin = localStorage.getItem("admin");
    const admin_expire = localStorage.getItem("admin_expire")
    if (admin && admin_expire !== undefined) {
      const currentTimetap = new Date().getTime();
      if (admin_expire > currentTimetap) {
        setAdmin(true)
      }
    }

  }, [])

  return (
    <MainContext.Provider value={{ notify, setLoader, admin, setAdmin }}>
      <ToastContainer />
      <div className="loader  " style={{ display: loader ? "flex" : "none" }}>
        <div></div>
      </div>

      {props.children}
    </MainContext.Provider>
  );
};

export default ContextHolder;

export { MainContext };
