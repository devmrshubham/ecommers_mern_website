import { useEffect, useState ,useContext } from "react";
import { Link ,useNavigate  } from "react-router-dom";

import { MainContext } from "../Context/ContextHolder";



const Sidebar = () => {
const {admin} = useContext(MainContext)
const Navigate = useNavigate()
const menus = [
    {
      name: "Dashbord",
      path: "/admin",
      multi: false,
    },
    {
      name: "Category",
      multi: true,
      items: [
        {
          route: "Add",
          path: "/admin/category/add",
        },
        {
          route: "View",
          path: "/admin/category/view",
        },
      ],
    },
    {
      name: "Products",
      multi: true,
      items: [
        {
          route: "Add",
          path: "/admin/product/add",
        },
        {
          route: "View",
          path: "/admin/product/view",
        },
      ],
    },
    
  ];
   
  useEffect(()=>{
    if(admin ===true){
      Navigate("/admin/login")
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    
 
  return (

    <div className=" w-[100%] sticky top-0  h-screen bg-blue-500 p-2 ">

      <div className=" text-3xl text-center text-white font-[500] py-2 ">
       <Link to={"/"}>iShop</Link> 
        </div>

      <ul className=" text-white p-2 ">

        {menus.map((menu,i) => {

          return <MenuList options={menu} key={i} />

        })}

      </ul>
    </div>
  );
};

const MenuList = ({ options }) => {

  const [show, setShow] = useState(false);

  return (

    <li className="  cursor-pointer select-none my-2 " onClick={() => setShow(!show)}>

      {options.multi === false ? (<Link to={options.path}>{options.name}</Link>) : (<span>{options.name}</span>)}

      {options.multi ? 

      ( <ul className={` bg-white my-2 shadow-md ${show ? "d-block" : "hidden"} p-2 text-black `}>

          {options.items.map((i,id) => {

            return (

              <li key={id}>
                <Link to={i.path}>{i.route}</Link>
              </li>

            );

          })}

        </ul>

      ) 
      
      :

       (<div></div>)}
       
    </li>
  );
};

export default Sidebar