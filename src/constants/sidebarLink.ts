import img1 from '@/assets/Content.svg';
import img2 from '@/assets/Contentask.svg';
import img3 from '@/assets/Contentcommunities.svg';
import img4 from '@/assets/Contentjob.svg';
import img5 from '@/assets/List Manu.svg';
import img6 from '@/assets/Vectorhome.svg';

interface SidebarLink {
    imgURL: any;
    route: string;
    label: string;
}

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: {img1},
        route: "/",
        label: "Home",
    },
    {
        imgURL: '/public/vercel.svg',
        route: "/community",
        label: "Community",
    },
    {
        imgURL: '/public/vercel.svg',
        route: "/collection",
        label: "Collections",
    },
    {
        imgURL: '/public/vercel.svg',
        route: "/jobs",
        label: "Find Jobs",
    },
    {
        imgURL: '/public/vercel.svg',
        route: "/tags",
        label: "Tags",
    },
    {
        imgURL: '/public/vercel.svg',
        route: "/profile",
        label: "Profile",
    },
    {
        imgURL: '/public/vercel.svg',
        route: "/ask-question",
        label: "Ask a question",
    },
];
