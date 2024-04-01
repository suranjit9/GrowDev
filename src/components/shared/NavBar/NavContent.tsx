// "use client";
// import { SheetClose } from "@/components/ui/sheet";
// import { sidebarLinks } from "@/constants/sidebarLink";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

//  const NavContent = () => {
//     const pathname = usePathname();
//     return (
//       <section className="flex  flex-col gap-6 text-center mt-4 mb-4">
//         {sidebarLinks.map((item) => {
//           const isactive =
//             (pathname.includes(item.route) && item.route.length > 1) ||
//             pathname === item.route;
//           return (
//             <SheetClose asChild key={item.route}>
//               <Link
//                 href={item.route}
//                 className={`${
//                   isactive
//                     ? `rounded-lg bg-[#FF7000] p-4`
//                     : `text-dark-100 dark:text-light-900`
//                 } flex items-center justify-start gap-4`}
//               >
//                 {/* <Image src={item.imgURL} alt={item.label} width={20} height={20}/> */}
//                 <p>{item.label}</p>
//               </Link>
//             </SheetClose>
//           );
//         })}
//       </section>
//     );
//   };

// export default NavContent;