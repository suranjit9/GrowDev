"use client"
import { Input } from "@/components/ui/input";
import React from "react";
import { CiSearch } from "react-icons/ci";
interface CoustomIputProps{
    route:string;
    iconPosition:string;
    placeholder:string;
    otherClasses?:string;

}
const LocalSearch = ({
    route,
    iconPosition,
    placeholder,
    otherClasses,
}:CoustomIputProps) => {
  return (
    
    <div className={`relative w-full flex min-h-[56px] items-center rounded-sm px-4 ${otherClasses}`}>
         <div className='flex text-xl grow'>
            <CiSearch className='absolute mt-2 ml-3' />
            <Input 
            className='pl-8 w-full dark:border-white '
            placeholder={placeholder}
            type='text'
            // value=""
            onChange={()=>{}}
            />

            </div>
    </div>
  );
};

export default LocalSearch;
