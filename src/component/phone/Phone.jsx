import axios from "axios";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phone = () => {
    const[phone,setphone]=useState([])
    const[spin,setspin]=useState(true)
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const allPhones = data.data.data;
            const newob = allPhones.map(phon => {
                const obj = {
                    name : phon.phone_name,
                    price:parseFloat(phon.slug.split('-')[1])
                }
                return obj
            })
            setphone(newob)
            setspin(false)
            
        })
    },[])
    return (

        

        <div>
            <div>
                
                { spin && 
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="color-ring-loading"
                        wrapperStyle={{}}
                        wrapperClass="color-ring-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                     />
                }
            </div>
            <BarChart width={1900} height={400} data={phone}>
            <Bar dataKey={'price'}></Bar>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
           </BarChart>
        </div>


    );
};

export default Phone;