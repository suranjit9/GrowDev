import Link from 'next/link';
import React from 'react';
import { Badge } from "@/components/ui/badge"

interface Props {
    _id:number;
    name:string;
    totalQustion?:number;
    showCount?:boolean
}
const RenderTags = ({_id, name, totalQustion, showCount}:Props) => {
    return (
        <div>
            {/* <h1>{name}</h1> */}
            <Link href={`/tags/${_id}`} className='flex justify-between gap-4'>
            <Badge className='rounded-lg px-4 py-4 uppercase' variant="outline">{name}</Badge>
            {
               showCount&& (
                <p className='font-medium'>{totalQustion}</p>
               ) 
            }
            </Link>
        </div>
    );
};

export default RenderTags;