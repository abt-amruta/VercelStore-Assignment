import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import SideBar from "@/components/SideBar";

const Nav = () => {
  return (
    <div className="top-0 left-0 right-0 z-50 w-full bg-white lg:py-5">
      {/* small devices */}
      <div className="min-[430] lg:hidden m-3 flex items-center my-5 max-[391]:w-90">
        <span className="flex flex-1 md:flex-1/6">
          <SideBar />
        </span>
        <span className="font-bold text-xl flex flex-2">coursesindoha</span>
        <button className=" text-white bg-[#5b20e4] py-4 px-7 rounded-[40px] text-2xl md:text-sm md:py-2 md:px-5  hidden min-[760px]:max-[775px]:block">
          Talk to an Advisor
        </button>
      </div>

      {/* big screens */}
      <NavigationMenu className="max-w-full">
        {/* <NavigationMenuLink></NavigationMenuLink> */}
        <NavigationMenuList>
          <div className=" w-full lg:flex max-[768]:hidden md:hidden items-center justify-around px-4 py-2">
            <div>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />}>
                  <span className="font-bold lg:text-3xl">coursesindoha</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
            <div className="flex gap-10">
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />}>
                  <div className="flex items-center gap-1" flex-row>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <span className="lg:text-3xl">Adult </span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="lg:w-50 lg:m-2 lg:p-5">
                        <DropdownMenuGroup>
                          <DropdownMenuLabel className="text-xl">
                            Explore
                          </DropdownMenuLabel>
                          <DropdownMenuItem className="text-lg">
                            Communication
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-lg">
                            Designing
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem className="text-lg">
                            Team Collaboration
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-lg">
                            Leadership
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <ChevronUp size={24} />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/" />}>
                  <span className="lg:text-3xl font-['Arial'] font-normal">
                    Junior
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/about" />}>
                  <span className="lg:text-3xl font-['Arial'] font-normal">
                    About
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/contact" />}>
                  <span className="lg:text-3xl font-['Arial'] font-normal">
                    Groups
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
            <div>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <Dialog>
                    <form>
                      <DialogTrigger
                        render={
                          <button className="text-white bg-[#5b20e4] py-4 px-7 rounded-[40px] text-2xl">
                            Talk to an Advisor
                          </button>
                        }
                      />
                      <DialogContent className="sm:max-w-sm lg:max-w-fit lg:max-h-100 flex flex-col">
                        <DialogHeader>
                          <DialogTitle className="lg:text-3xl font-bold text-center mt-3">
                            Tell Us About You !{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <FieldGroup className="flex lg:w-120 m-3">
                          <Field>
                            {/* <Label htmlFor="name-1">Name</Label> */}
                            <Input
                              id="name-1"
                              name="name"
                              placeholder="Full Name"
                              className="lg:text-lg p-6 m-1"
                            />
                          </Field>
                          <Field>
                            {/* <Label htmlFor="username-1">Username</Label> */}
                            <Input
                              id="username-1"
                              name="username"
                              placeholder="Email"
                              className="lg:text-lg p-6 m-1"
                            />
                          </Field>
                          <Field>
                            {/* <Label htmlFor="username-1">Username</Label> */}
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="Phone Number"
                              className="lg:text-lg p-6 m-1"
                            />
                          </Field>
                        </FieldGroup>
                        <DialogFooter className="bg-white flex justify-center sm:justify-center">
                          <button
                            type="submit"
                            className="text-white bg-blue-600 lg:p-2 lg:text-lg rounded-lg m-2 font-bold"
                          >
                            Save changes
                          </button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Nav;
