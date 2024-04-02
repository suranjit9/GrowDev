"use client"
import { HomePageFilters } from "@/constants/Filters";
import { Button } from "../ui/button";


const HomeFilter = () => {
    const isActive = 'newest';
    return (
        <div className="mt-8 hidden flex-wrap gap-3 md:flex">
            {
                HomePageFilters.map((item)=>{
                    return(
                        <Button 
                        className={`font-medium rounded-lg px-6 py-3 capitalize shadow-none ${isActive === item.value ? 'bg-[#E2985E] text-white'
                        :'shadow bg-light-500 text-blue-400 dark:text-white  dark:hover:bg-slate-800 hover:text-white'}`}
                        key={item.value} >{item.name}</Button>
                    )
                })
            }
        </div>
    );
};

export default HomeFilter;