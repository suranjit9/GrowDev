import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const hotQusetions = [
  {
    _id: 1,
    title:
      "How to grow your Skile in webDevlopment?How to grow your Skile in webDevlopment?",
  },
  {
    _id: 2,
    title: "How to grow your Skile in webDevlopment?",
  },
  {
    _id: 13,
    title: "How to grow your Skile in webDevlopment?",
  },
  {
    _id: 13,
    title: "How to grow your Skile in webDevlopment?",
  },
  {
    _id: 14,
    title: "How to grow your Skile in webDevlopment?",
  },
];
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
      <div className="mt-8 flex flex-col gap-5">
        <h3 className="text-xl font-bold"></h3>
      </div>
    </section>
  );
};

export default RightSideBar;
