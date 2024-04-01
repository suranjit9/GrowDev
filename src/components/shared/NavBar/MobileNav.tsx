import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenuAlt4 } from "react-icons/hi";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild><HiMenuAlt4 className="text-xl sm:hidden"/></SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
