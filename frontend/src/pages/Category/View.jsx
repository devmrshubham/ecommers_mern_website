import { useEffect, useState, useContext } from "react";
import { getCategory ,DeletData} from "../../Api/Category";
import "../../Style/CategoryView.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MainContext } from "../../Context/ContextHolder";
import {Link} from "react-router-dom"

const View = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [imagePath, setImagePath] = useState("");
  

  let num = 0;
  const { setLoader ,notify } = useContext(MainContext);
  

  const DeletHandler = (id,imageName) => {
       DeletData(id,imageName)
       .then((success)=>{
            notify(success.data.msg,success.data.status)
            if(success.data.status){
              getCategory()
              .then((success) => {
                setCategoryData(success.data.category);
                setImagePath(success.data.path);
                setLoader(false);
              })
              .catch((error) => {
                setCategoryData([]);
                setLoader(false);
              });

            }
           
       }).catch((error)=>{

        notify(error.data.msg,error.data.status)
       })
  };




  useEffect(() => {
    setLoader(true);
    getCategory()
      .then((success) => {
        setCategoryData(success.data.category);
        setImagePath(success.data.path);
        setLoader(false);
      })
      .catch((error) => {
        setCategoryData([]);
        setLoader(false);
      });
  }, [setLoader]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categoryData?.map((d) => {
           num++
            return <TableRow key={d._id} data={d} del={()=>DeletHandler(d._id,d.image)} image={imagePath}   num={num} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ data, num, image,del }) => {


  return (
    <tr className="py-6">
      <td>{num}.</td>
      <td>{data.name}</td>
      <td>{data.slug} </td>
      <td>
        <img src={image + data.image}className="w-[100px] h-[100px] mx-auto " alt="" />
      </td>
      <td>
        <Link to={`/admin/category/edit/${data._id}`} ><ModeEditIcon className="text-green-500 cursor-pointer " /></Link>
      </td>
      <td>
        <button onClick={del} className="border p-1 text-white bg-red-500 rounded-md">
          
          <DeleteIcon className="text-white cursor-pointer " />
          Delete
        </button>
      </td>
    </tr>
  );
};

export default View;
