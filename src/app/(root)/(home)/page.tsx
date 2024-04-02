import Filter from "@/components/shared/Filter/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/Filters";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen pt-20 pl-3 pr-2">
      <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-xl font-bold">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="min-h-[46px] px-4 py-3 bg-gradient-to-r from-[#FF7000] to-[#E2985E] dark:text-white">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        {/* Local SerBar */}
        <LocalSearch
        route="/"
        iconPosition="Left"
        placeholder="Search for questions"
        otherClasses= "flex-1"
        />
        <Filter
        filters={HomePageFilters}
        otherClass="min-h-[56px] sm:min-w-[170px]"
        contnerClassName="hidden max-md:flex"
        />
      </div>
    </div>
  );
}
