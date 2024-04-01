import { SidebarLink } from "@/types/index";
type SidebarLinks = SidebarLink[];
export const sidebarLinks = [
    {
      imgURL: "../assets/Vectorhome.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "../assets/Contentcommunities.svg",
      route: "/community",
      label: "Community",
    },
    {
      imgURL: "../assets/List Manu.svg",
      route: "/collection",
      label: "Collections",
    },
    {
      imgURL: "../assets/Contentjob.svg",
      route: "/jobs",
      label: "Find Jobs",
    },
    {
      imgURL: "../assets/Content.svg",
      route: "/tags",
      label: "Tags",
    },
    {
      imgURL: "/assets/icons/user.svg",
      route: "/profile",
      label: "Profile",
    },
    {
      imgURL: "../assets/Contentask.svg",
      route: "/ask-question",
      label: "Ask a question",
    },
   ];
   export const BADGE_CRITERIA = {
    QUESTION_COUNT: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
    },
    ANSWER_COUNT: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
    },
    QUESTION_UPVOTES: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
    },
    ANSWER_UPVOTES: {
      BRONZE: 10,
      SILVER: 50,
      GOLD: 100,
    },
    TOTAL_VIEWS: {
      BRONZE: 1000,
      SILVER: 10000,
      GOLD: 100000,
    },
   };