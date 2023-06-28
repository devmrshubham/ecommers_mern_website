import  { useRef } from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/ContextHolder";
import { addCategory } from "../../Api/Category";


const Add = () => {

   const slugBox = useRef();
   const {notify} = useContext(MainContext)

   const GetData = (e) => {
     console.clear();
     slugBox.current.value = e.target.value.toLowerCase().split(" ").join("-");
   };

   const submitForm = (event) =>{
        
        event.preventDefault()

        const formData = new FormData()
        formData.append("name",event.target.category_name.value)
        formData.append("slug",event.target.category_slug.value)
        formData.append("image",event.target.image.files[0])

        
        

        addCategory(formData)
          .then((success) => {
            notify(success.data.msg, success.data.status);
            if(success.data.status===1){
              event.target.reset();
            }
        
          })
          .catch((error) => {
            notify(error.data.msg, error.data.status);
          });
   }


  return <div className="w-full h-[100vh] pt-10 px-10  ">

    <div className="  shadow-lg border-2 px-8  w-full">
      
      <div className=" text-2xl my-2 ">Add Category</div>

      <hr className=" shadow-lg" />

      <form className="w-full pt-4" encType="multipart/form-data" onSubmit={submitForm}>

        <div className="">
          <label className=" text-xl" htmlFor="">Category :</label>
          <input type="text" required="please fill data" name="category_name" className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 " 
          placeholder="Category Name" onKeyUp={GetData} />
        </div>

        <div className="">
          <label className=" text-xl" htmlFor="">Category Slug :</label>
          <input type="text" resource="" ref={slugBox} name="category_slug" className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 " 
          placeholder="Category Slug" />
        </div>

        <div className="">
          <label className=" text-xl" htmlFor="">Category Image :</label>
          <input type="file"  name="image" className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 " 
          placeholder="" />
        </div>


        <button type="submit" className="px-10  bg-blue-500 text-white rounded-md my-6 py-2">Save</button>

     

      </form>
    </div>
  </div>;
};

export default Add;
