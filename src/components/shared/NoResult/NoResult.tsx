"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import noresult from '@/assets/llustration.png';
import noresult1 from '@/assets/llustrationlight (1).png';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
interface props {
    title:string, 
    discription:string, 
    linktitle:string
}
const NoResult = ({title, discription, linktitle}:props) => {
    const {theme} = useTheme();
    return (
        <div className='space-y-2 mt-6 w-full flex flex-col items-center justify-center'>
            {
               theme === 'dark' ? <Image src={noresult} alt='noresult' width={200} height={100}/>:<Image src={noresult1} alt='noresult-light' width={200} height={100}/>
            }
           <h2 className='text-2xl font-bold'>{title}</h2>
            <div className='w-1/2 text-base text-zinc-400 dark:text-zinc-500'>
            <p>
             💡{discription}
            </p>
            </div>
            <Link href={'/'}>
            <Button className='min-h-[46px] px-4 py-3 bg-gradient-to-r from-[#FF7000] to-[#E2985E] dark:text-white'>{linktitle}</Button>
            </Link>
        </div>
    );
};

export default NoResult;