import { MdOutlineHome } from "react-icons/md";

interface SidebarLink {
    imgURL: string;
    route: string;
    label: string;
   }
   
export const sidebarLinks:SidebarLink[] = [
    {
      // imgURL: "../assets/Vectorhome.svg",
      imgURL: "/public/vercel.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/src/assets/Contentcommunities.svg",
      route: "/community",
      label: "Community",
    },
    {
      imgURL: "/src/assets/List Manu.svg",
      route: "/collection",
      label: "Collections",
    },
    {
      imgURL: "/src/assets/Content.svg",
      route: "/jobs",
      label: "Find Jobs",
    },
    {
      imgURL: "/src/assets/Content.svg",
      route: "/tags",
      label: "Tags",
    },
    {
      imgURL: "/src/assets/Content.svg",
      route: "/profile",
      label: "Profile",
    },
    {
      imgURL: "/src/assets/Content.svg",
      route: "/ask-question",
      label: "Ask a question",
    },
   ];