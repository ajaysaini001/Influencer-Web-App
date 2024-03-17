import React, { useEffect, useState } from 'react'
import { MyContext } from './MyContext'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { fireDB, storage } from '../firebasConfig/FirebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

const MyState = ({ children }) => {
  const [imageName, setImageName] = useState(""); // State for storing the selected image file
  const [title,setTitle]=useState("");
  const [category,setCategory]=useState("");
  const [price,setPrice]=useState("");
  const [tags,setTags]=useState("");
  const [keypoints,setKeypoints]=useState("");
  const [img,setImg]=useState("");
  const [desc,setDesc]=useState("");
  
  
  const addService = async () => {
    if (!imageName) return; // Ensure imageName is not empty before proceeding
    const imagesRef = ref(storage, `images/${imageName.name}`);
     const user={
      title:title,
      category:category,
      price:price,
      tags:tags,
      keypoints:keypoints,
      desc:desc,
      imageUrl:img,
      
     }
     
    try {
      await uploadBytes(imagesRef, imageName).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
          setImg(url);
          // console.log(url);
        });
      })
      console.log("Image uploaded successfully");

      const addRef=collection(fireDB,"service");
      await addDoc(addRef,user);
      console.log("data added sucessfully")
      
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

// Getdata from firebase
 const getService=async()=>{
  try {
    const addRef=collection(fireDB,"service");
      const snapshot= await getDocs(addRef);
 const res= snapshot.docs.map((doc)=>{
    return{
      ...doc.data(),
      id:doc.id,
    }
  }
  )
  console.log(res);
  // console.log(collectData);
  
  } catch (error) {
    console.log(error);
  }
 }

useEffect(()=>{
  getService();
},[]
)
    return (
        <MyContext.Provider value={{ 
          addService, title,setTitle,category,setCategory,price,setPrice,tags,setTags,desc,setDesc,imageName, setImageName,keypoints,setKeypoints }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyState;
