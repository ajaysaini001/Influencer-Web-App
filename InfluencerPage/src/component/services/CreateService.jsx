import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'

const CreateService = ({ open, setOpen }) => {
  const context = useContext(MyContext);
  const { addService, title,setTitle,category,setCategory,price,setPrice,tags,setTags,
    desc,setDesc,imageName, setImageName,keypoints,setKeypoints  } = context;

  

  return (
    <div className='w-full p-5 rounded-md'>
      <div className='bg-white flex gap-10 h-auto p-8 w-full'>
        <div className='w-full flex flex-wrap bg-transparent items-center gap-5'>
          <div className={`flex flex-col gap-1 w-${open ? 72 : 72}`}>
            <label htmlFor="title" className='font-mono text-xs'>Title <span className='text-red-500'>*</span></label>
            <input
              type="text"
              id='title'
              placeholder='Enter Title'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value )}
              className='w-full border h-auto p-2 rounded-md placeholder:font-sans text-xs outline-none focus:border-2 focus:border-blue-100'
            />
          </div>

          <div className={`flex flex-col gap-1 w-${open ? 60 : 72}`}>
            <label htmlFor="category" className='font-mono text-xs'>Category <span className='text-red-500'>*</span></label>
            <input
              type="text"
              id='category'
              placeholder='Enter Category'
              required
              value={category}
              onChange={(e) => setCategory(e.target.value )}
              className='w-full border h-auto p-2 rounded-md placeholder:font-sans text-xs outline-none focus:border-2 focus:border-blue-100'
            />
          </div>

          <div className={`flex flex-col gap-1 w-${open ? 72 : 72}`}>
            <label htmlFor="title" className='font-mono text-xs'>Title <span className='text-red-500'>*</span></label>
           
          <input
              type="text"
              id='price'
              placeholder='Enter price'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value )}
              className='w-full border h-auto p-2 rounded-md placeholder:font-sans text-xs outline-none focus:border-2 focus:border-blue-100'
            />
            </div>
          <div className={`flex flex-col gap-1 w-${open ? 60 : 72}`}>
            <label htmlFor="tags" className='font-mono text-xs'>Tags <span className='text-red-500'>*</span></label>
            <input
              type="text"
              id='tags'
              placeholder='Enter Tags'
              required
              value={tags}
              onChange={(e) => setTags(e.target.value )}
              className='w-full border h-auto p-2 rounded-md placeholder:font-sans text-xs outline-none focus:border-2 focus:border-blue-100'
            />
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor="keypoints" className='font-mono text-xs'>Key Points <span className='text-red-500'>*</span></label>
            <div className='flex'>
              <input
                type="text"
                id='keypoints'
                placeholder=''
                required
                value={keypoints}
              onChange={(e) => setKeypoints(e.target.value )}
              className='w-11/12 border h-auto p-2 rounded-md placeholder:font-sans text-xs outline-none focus:border-2 focus:border-blue-100'
              />
              <button className='font-bold bg-sky-500 p-1 text-white text-xl'>+</button>
            </div>
          </div>

          <div className='flex flex-col w-full gap-1'>
            <label htmlFor="desc" className='font-mono text-xs'>Description</label>
            <textarea
              id="desc"
              placeholder='Write your description...'
              value={desc}
              onChange={(e) => setDesc(e.target.value )}className='border w-full h-auto pl-3 pt-2 p-16 rounded-md outline-none focus:border-sky-100'
            ></textarea>
          </div>

          <div className='w-full flex justify-end'>
            <button
              onClick={addService}
              className='bg-sky-500 p-2 text-white text-lg font-semibold w-28 rounded-md hover:bg-sky-700'
            >
              Create
            </button>
          </div>
        </div>

        {/* Image Upload */}
        <div className='w-1/5'>
          <div className='w-36 h-auto p-10 border '>5456x897</div>
          <input 
            type="file" 
            onChange={(e)=>setImageName(e.target.files[0])} 
            // className='flex-block' 
          />
        </div>
      </div>
    </div>
  )
}

export default CreateService;
