import QuestionCard from "@/components/Cards/QuestionCard";
import HomeFilter from "@/components/Home/HomeFilter";
import Filter from "@/components/shared/Filter/Filter";
import NoResult from "@/components/shared/NoResult/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/Filters";
import { getQuestions } from "@/lib/action/question.action";
// import { getQuestions } from "@/lib/action/question.action";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const result = await getQuestions({});
  return (
    <div className="h-screen pt-24 pl-12 pr-24">
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
        {result.length > 0 ? (
          result.map((qus) => {
            return (
              <QuestionCard
                key={qus._id}
                _id={qus._id}
                title={qus.title}
                tags={qus.tags}
                author={qus.author}
                upvotes={qus.upvotes}
                view={qus.view}
                answers={qus.answers}
                createdAt={qus.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There’s no question to show"
            discription="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved!"
            linktitle="Ask a Question"
          />
        )}
      </div>
    </div>
  );
}
