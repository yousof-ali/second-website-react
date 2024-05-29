import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phone = () => {
    const[phone,setphone]=useState([])
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
            
        })
    },[])
    return (

        <BarChart width={1900} height={400} data={phone}>
            <Bar dataKey={'price'}></Bar>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </BarChart>


    );
};

export default Phone;