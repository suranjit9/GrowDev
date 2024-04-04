import React from 'react';
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";
const GlobalSearch = () => {
    return (
        <div className='relative w-full max-sm:hidden'>
            <div className='flex text-xl'>
            <CiSearch className='absolute mt-2 ml-3' />
            <Input 
            className='pl-8 w-full dark:border-white'
            placeholder='Search.....'
            type='text'
            value=""
            // onChange={()=>{}}
            />

            </div>
        </div>
    );
};

export default GlobalSearch;