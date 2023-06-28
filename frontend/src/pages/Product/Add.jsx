import { useRef, useEffect, useState ,useContext } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MainContext } from '../../Context/ContextHolder';
import {getCategory} from "../../Api/Category"
import {AddData} from "../../Api/Product"

const Add = () => {

  const descBox = useRef()
  const [category,setCategory] = useState([])
  const {setLoader , notify} = useContext(MainContext)
   
  const submitForm = (event) =>{

    
      
     event.preventDefault()
     
    
     const formData = new FormData();
     formData.append("name",event.target.name.value);
     formData.append("description",event.target.description.value);
     formData.append("category_id",event.target.category_id.value);
     formData.append("o_price",event.target.o_price.value);
     formData.append("d_price",event.target.d_price.value);
     formData.append("image",event.target.image.files[0]);
     console.log(formData)
     AddData(formData)
     .then(
      (success)=>{
        notify(success.data.msg,success.data.status)
        if(success.data.status===1){
          event.target.reset()
        }
      }
     ).catch(
      (error)=>{
        console.log(error)
      notify(error.data.msg,error.data.status)
      }
     )
    }
  
  useEffect(() => {
    setLoader(true);
    getCategory()
      .then((success) => {
        setCategory(success.data.category);
        
        setLoader(false);
      })
      .catch((error) => {
        setCategory([]);
        setLoader(false);
      });
  }, [setLoader]);

  return (
    <div className="w-full h-[100vh] pt-10 px-10  ">

    <div className="  shadow-lg border-2 px-8  w-full">
      
      <div className=" text-2xl my-2 ">Add Product</div>

      <hr className=" shadow-lg" />

      <form className="w-full pt-4" encType="multipart/form-data" onSubmit={submitForm}>

      <div className="">
          <label className=" text-xl" htmlFor="">Products Name :</label>
          <input type="text"  required="please fill data" name="name" className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 " 
          placeholder="Category Name"  />
        </div>
        <div className=" w-full  flex  items-center my-4 justify-between ">
          <div  className='flex  flex-col '>
            <label htmlFor="" className='text-xl'>Select Option:</label>
            <select name="category_id" required className=" w-[300px] py-2 px-4 outline-none border-2 rounded shadow-md " id="">
              <option  value={null}>select a category</option>
              {
                category.map((d,i)=>{
                  return <option  value={d._id} key={d._id}>{d.name} </option>
                })
              }
            </select>
          </div>

          <div className="w-[300px]">
            <label className='text-xl'>Original Price</label>
            <input type="number" name='o_price' className='w-full py-2 px-4 outline-none border-2 rounded shadow-md '  />
          </div>

          <div className='w-[300px]'>
          <label htmlFor="" className='text-xl'>Discounted Price</label>
            <input type="number" name='d_price' className='w-full py-2 px-4 outline-none border-2 rounded shadow-md '  />
          </div>

        </div>


        <div className="">
          <label className=" text-xl" htmlFor="">Product Image :</label>
          <input type="file" required="please fill data" name="image" className="w-full outline-none border rounded-sm shadow-md my-2 py-2 px-6 " 
          placeholder="Category Name"  />
        </div>

        <div className="mt-2">
          <label className=" text-xl" htmlFor="">Description :</label>
          <CKEditor editor={ ClassicEditor }
              onChange={ ( event, editor ) => {
                const data = editor.getData();
              descBox.current.value = data
              
            } }  />
        </div>
        <textarea name="description"   ref={descBox} className='hidden' ></textarea>
        <button type="submit" className="px-10  bg-blue-500 text-white rounded-md my-6 py-2">Save</button>

     

      </form>
    </div>
  </div>
  )
}

export default Add
