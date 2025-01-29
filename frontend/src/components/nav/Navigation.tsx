/*
 * Devhub Website
 * Components
 * Navigation Menu
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  LucideDumbbell,
  LucideHardHat,
  LucideMenu,
  LucideScale,
} from "lucide-react";
import Logo from "./logo/Logo";
import { buttonVariants } from "@/components/ui/button"
import {Route} from "@/pages/routes";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="py-2">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "w-80 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-[--yellow]">
            <span className="inline-block px-2">{props.icon}</span>
            <span className="leading-none text-lg font-semibold">{title}</span>
          </div>
          <p className="pl-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

export default function Navigation() {
  const [isCollapsed, setCollapsed] = React.useState(true);

  const iconSize = 16;
  const itemStyle = "py-4 md:px-8";
  return (
    <nav className="p-4 flex flex-row justify-between">
      <a href={Route.Home}>
        <Logo className={itemStyle} />
      </a>

      <div className="flex flex-col items-end">
        {/* Hamburger Toggle for Navigation Menu for mobile devices */}
        <LucideMenu
          className={`m-5 block md:hidden`}
          onClick={() => setCollapsed(!isCollapsed)}
        />

        <NavigationMenu
          className={`${isCollapsed ? "hidden" : "inline-block"} md:inline-block`}
        >
          <NavigationMenuList className="text-sm flex-col md:flex-row">
            <NavigationMenuItem className={cn("screen md:w-auto", itemStyle)}>
              <NavigationMenuTrigger className="w-full">
                Events
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ListItem
                  title="CodingPrep"
                  icon=<LucideDumbbell size={iconSize} />
                  href={Route.CodingPrep}
                >
                  Weekly meet where we practice solving and explaining LeetCode
                  Problems
                </ListItem>
                <ListItem
                  title="Mock Interviews"
                  icon=<LucideScale size={iconSize} />
                  href={Route.MockInterview}
                >
                  Stave off the interview pressure with our mock interviews.
                </ListItem>
                <ListItem
                  title="Summer Build"
                  icon=<LucideHardHat size={iconSize} />
                  href={Route.SummerBuild}
                >
                  A safe space to build, experiment and learn.
                </ListItem>
              </NavigationMenuContent>
              <NavigationMenuViewport />
            </NavigationMenuItem>

            <NavigationMenuItem className={itemStyle}>
              <NavigationMenuLink className="p-4"><a href={Route.Contact}>Contact</a></NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className={itemStyle}>
              <a className={buttonVariants({ variant: "default" })} href={Route.SignUp}> Join Us</a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    </nav >
  );
}
