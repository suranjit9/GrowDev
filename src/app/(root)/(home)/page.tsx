import HomeFilter from "@/components/Home/HomeFilter";
import Filter from "@/components/shared/Filter/Filter";
import NoResult from "@/components/shared/NoResult/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/Filters";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const questions = [
  // {
  //   _id: 1,
  //   title: "hello title",
  //   tags: [
  //     {
  //       _id: 1,
  //       name: "next js",
  //     },
  //     {
  //       _id: 2,
  //       name: "reaxt js",
  //     },
  //   ],
  //   author: "roki vai",
  //   upvotes: 10,
  //   view: 10099,
  //   answers: 2,
  //   createdAt: "",
  // },
  // {
  //   _id: 2,
  //   title: "hello titlgggggggge",
  //   tags: [
  //     {
  //       _id: 1,
  //       name: "next js",
  //     },
  //     {
  //       _id: 2,
  //       name: "reaxt js",
  //     },
  //   ],
  //   author: "roki vai",
  //   upvotes: 10,
  //   view: 10099,
  //   answers: 2,
  //   createdAt: "",
  // },
];

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
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClass="py-4 "
          contnerClassName="hidden max-md:flex"
        />
      </div>
      <HomeFilter />
      <div className="mt-8 flex flex-col gap-4">
        {questions.length > 0
          ? questions.map((qus) => {
              return <h1 key={qus._id}>{qus.title}</h1>;
            })
          : <NoResult
          title="There’s no question to show"
          discription="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved!"
          linktitle="Ask a Question"
          />}
      </div>
    </div>
  );
}
