import React from "react";
interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClass: string;
  contnerClassName: string;
}
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = ({ filters, otherClass, contnerClassName }: Props) => {
  return (
    <div className={`relative ${contnerClassName} items-center px-4`}>
      <Select>
        <SelectTrigger
          className={`${otherClass} rounded-sm  dark:border-white `}
        >
          <div className="line-clamp-1">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item)=>{
                return(
                    <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
                )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
