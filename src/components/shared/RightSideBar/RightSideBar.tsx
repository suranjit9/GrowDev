import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import RenderTags from "../RenderTags/RenderTags";

const hotQusetions = [
  {
    _id: '1',
    title:
      "How to grow your Skile in webDevlopment?How to grow your Skile in webDevlopment?",
  },
  {
    _id: '2',
    title: "How to grow your Skile in webDevlopment?",
  },
  {
    _id: '13',
    title: "How to grow your Skile in webDevlopment?",
  },
  {
    _id: '139',
    title: "How to grow your Skile in webDevlopment?",
  },
  {
    _id: '14',
    title: "How to grow your Skile in webDevlopment?",
  },
];
const populerTag =[
  {
    _id:'1',
    name:'Js',
    totalQustion:5
  },
  {
    _id:'2',
    name:'React Js',
    totalQustion:4
  },
  {
    _id:'13',
    name:'Next Js',
    totalQustion:50
  },
  {
    _id:'14',
    name:'Css',
    totalQustion:5
  },
  {
    _id:'15',
    name:'SadSdn ui',
    totalQustion:50
  },
]
const RightSideBar = () => {
  return (
    <section className="right-0 dark:bg-[#151821]  top-0 flex flex-col  h-screen overflow-y-auto  pt-20 p-2 lg:w-[350px] max-xl:hidden">
      <div className="pt-2 p-4">
        <h3 className="text-xl font-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-6">
          {hotQusetions.map((item) => {
            return (
              <Link key={item._id} href={`/qusetions/${item._id}`}
              className="flex cursor-pointer items-center justify-between gap-6"
              >
                <p className="text-sm">{item.title} </p>
                <FaAngleRight />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-8 p-4 flex flex-col gap-5">
        <h3 className="text-xl font-bold">
          Popular Tags
        </h3>
        <div className="mt-7 flex flex-col gap-4">
          {
            populerTag.map((tag)=>{
              return(
                <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQustion={tag.totalQustion}
              showCount
              />
              )
            })
          }
         
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
