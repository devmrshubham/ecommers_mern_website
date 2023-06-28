import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../Context/ContextHolder";
import { updateCategory, getCategory } from "../../Api/Category";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const slugBox = useRef();
  const { notify } = useContext(MainContext);
  const { id } = useParams();
  const Navigate = useNavigate();
  const [oldData, setOldData] = useState({});

  const GetData = (e) => {
    console.clear();
    slugBox.current.value = e.target.value.toLowerCase().split(" ").join("-");
  };

  const submitForm = (event) => {
    event.preventDefault();

 

    const formData = new FormData();
    formData.append("name", event.target.category_name.value);
    formData.append("slug", event.target.category_slug.value);
    formData.append("image", event.target.image.files[0]);
    formData.append("old_image_name", event.target.old_image_name.value);

    updateCategory(id, formData)
      .then((success) => {
        notify(success.data.msg, success.data.status);
        console.log(success);
        Navigate("/admin/category/view");
      })
      .catch((error) => {
        notify(error?.data.msg, error.data.status);
      });
  };

  useEffect(() => {
    if (id !== undefined) {
      getCategory(id)
        .then((success) => {
          if (success.data.status === 1) {
            setOldData({ path: success.data.path, ...success.data.category });
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [id]);

  return (
    <div className="w-full h-[100vh] pt-10 px-10  ">
      <div className="  shadow-lg border-2 px-8  w-full">
        <div className=" text-2xl my-2 ">Update Category</div>

        <hr className=" shadow-lg" />

        <form className="w-full pt-4" encType="multipart/form-data" onSubmit={submitForm}>
          <div className="">
            <label className=" text-xl" htmlFor=""> Category Name :</label>


            <input type="text" required="please fill data" name="category_name" 
              className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 "
              placeholder="Category Name" onKeyUp={GetData} value={oldData?.name}
              onChange={(e) => {
                setOldData({ ...oldData, name: e.target.value });
              }}/>
          </div>

          <div className="">
            <label className=" text-xl" htmlFor=""> Category Slug : </label>
            <input type="text" resource="" ref={slugBox} name="category_slug" value={oldData?.slug} 
            className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 " placeholder="Category Slug"/>
          </div>

          <input type="hidden" name="old_image_name" value={oldData.image} />

          <div className="">
            <label className=" text-xl" htmlFor=""> Category Image : </label>
            <input type="file" required name="image" className="w-full outline-none border form-control rounded-sm shadow-md my-2 py-2 px-6 "placeholder=""/>
          </div>

          <div className="">
            <label className=" text-xl" htmlFor=""> Old Image : </label>
            <img src={`${oldData?.path}/${oldData.image}`} className="block w-[200px] h-[200px] " alt=""/>
          </div>

          <button type="submit" className="px-10  bg-blue-500 text-white rounded-md my-6 py-2" >Save </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
