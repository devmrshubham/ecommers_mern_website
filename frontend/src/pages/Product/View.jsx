import { useEffect, useState, useContext } from "react";
import { GetData, DeleteData } from "../../Api/Product";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { MainContext } from "../../Context/ContextHolder";
import { Link } from "react-router-dom"
import parse from 'html-react-parser';


const View = () => {
  const [ProductData, setProductData] = useState([]);
  const [imagePath, setImagePath] = useState("");
  console.log(imagePath)


  let num = 0;
  const { setLoader, notify } = useContext(MainContext);


  const DeletHandler = (id, ImgName) => {
    DeleteData(id, ImgName)
      .then((success) => {
        notify(success.data.msg, success.data.status)
        if (success.data.status === 1) {
          GetData()
            .then((success) => {
              setProductData(success.data.category);
              setImagePath(success.data.path);
              setLoader(false);
            })
            .catch((error) => {
              setProductData([]);
              setLoader(false);
            });

        }

      }).catch((error) => {

        notify(error.data.msg, error.data.status)
      })
  };




  useEffect(() => {
    setLoader(true);
    GetData()
      .then((success) => {
        console.log(success)
        setProductData(success.data.product);
        setImagePath(success.data.path);
        setLoader(false);
      })
      .catch((error) => {
        setProductData([]);
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
            <th>description</th>
            <th>Original Price</th>
            <th>Discounted Price</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ProductData?.map((d) => {
            num++
            return <TableRow key={d._id} data={d} del={() => DeletHandler(d._id, d.image)} image={imagePath} num={num} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ data, num, image, del }) => {


  return (
    <tr className="py-6">
      <td>{num}.</td>
      <td>{data.name}</td>
      <td>{
        parse(data.description)
      } </td>
      <td>{data.original_price} </td>
      <td>{data.discounted_price} </td>
      <td>
        <img src={image + data.image} className="w-[100px] h-[100px] mx-auto " alt="" />
      </td>
      <td>
        <Link to={`/admin/product/edit/${data._id}`} ><ModeEditIcon className="text-green-500 cursor-pointer " /></Link>
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
