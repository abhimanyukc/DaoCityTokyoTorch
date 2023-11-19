'use client'
import './wallet.css'

import {useState} from 'react';
export default function Wallet(){
    const[formData,setFormData]=useState({
    name:'',
    email:'', 
    });
    const handleChange = (e) =>{
        const{name,value}=e.target;
      
        setFormData((preData)=>({
            ...preData,
            [name]:value,
        }));
    };

const handleSubmit = (e)=>{
   e.preventDefault();
   
   setFormData({
    name:'',
    email:'',
});

};


    return(
        <div className="wallet-container" >
         <form className="wallet" onSubmit={handleSubmit}>
            <div className='inside'>
            <label className='l1'>
                Name:
                <input className='name' type="text" name="name" value={formData.name} onChange={handleChange} ></input>
            </label>
            <label className='l2'>
                Email:
                <input className='email' type="text" name="email" defaultValue={formData.email} onChange={handleChange} />
            </label>
            <button type="submit" >Submit</button>
            </div>

         </form>
        </div>

    )
}