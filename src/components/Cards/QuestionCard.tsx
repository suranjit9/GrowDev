import Link from "next/link";
import React from "react";
import RenderTags from "../shared/RenderTags/RenderTags";
import Metric from "../shared/Metric/Metric";
import { formatAndDivideNumber, getTimeStamp } from "@/lib/utils";
interface props {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    image: string;
  };
  upvotes: number;
  view: number;
  answers: Array<object>;
  createdAt: Date;
}
const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  view,
  answers,
  createdAt,
}: props) => {
  console.log(createdAt)
  return (
    <div className="bg-light-900 dark:dark-gradient shadow-light-100 dark:shadow-light-100 p-9 sm:px-11 rounded-[10px]">
      <div className="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">
        <div>
          <span className="line-clamp-1 flex md:hidden lg:hidden">
            {getTimeStamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:font-medium  text-xl flex-1 line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* if signed in add edit delete action and upvote */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
    {
        tags.map((tag)=>{
            return(
                <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              showCount={false}
            />
            )
        })
    }
      </div>
      <div className="mt-6 flex flex-wrap w-full gap-3 items-center justify-between">
      <Metric
        imgurl='/public/likelike.svg'
        alt='user'
        value={author.name}
        href={`/profile/${author._id}`}
        title={`${getTimeStamp(createdAt)}`}
        isAuthor
        textStyle= "text-base font-medium text-zinc-400 dark:text-zinc-500"
        />
        <Metric
        imgurl='/public/likelike.svg'
        alt='upvote'
        value={formatAndDivideNumber(upvotes)}
        title=' Votes'
        textStyle= "text-base font-medium text-zinc-400 dark:text-zinc-500"
        />
        <Metric
        imgurl='/public/likelike.svg'
        alt='upvote'
        value={formatAndDivideNumber(answers.length)}
        title=' Votes'
        textStyle= "text-base font-medium text-zinc-400 dark:text-zinc-500"
        />
        <Metric
        imgurl='/public/likelike.svg'
        alt='upvote'
        value={formatAndDivideNumber(view)}
        title=' Votes'
        textStyle= "text-base font-medium text-zinc-400 dark:text-zinc-500"
        />
        
        <div></div>
           
    </div>
    </div>
  );
};

export default QuestionCard;
