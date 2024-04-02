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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filter = ({ filters, otherClass, contnerClassName }: Props) => {
  return (
    <div className={`relative ${contnerClassName}`}>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
