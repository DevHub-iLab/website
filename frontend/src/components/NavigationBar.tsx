import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { LucideDumbbell, LucideHardHat, LucideScale } from "lucide-react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "w-80 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-[--highlight]">
            <span className="inline-block px-2">{props.icon}</span>
            <span className="leading-none text-lg font-medium">{title}</span>
          </div>
          <p className="pl-2 line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
// TODO(mrzzy): extract out Navigation menu content into
export default function NavigationBar() {
  const iconSize = 15;
  return (
    <NavigationMenu>
      <NavigationMenuList className="text-sm">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Events</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ListItem
              title="CodingPrep"
              icon=<LucideDumbbell size={iconSize} />
            >
              Weekly meet where we practice solving and explaining LeetCode
              Problems
            </ListItem>
            <ListItem
              title="Mock Interviews"
              icon=<LucideScale size={iconSize} />
            >
              Stave off the interview pressure with our mock interviews.
            </ListItem>
            <ListItem
              title="Summer Build "
              icon=<LucideHardHat size={iconSize} />
            >
              Safe space to build, experiment and learn.
            </ListItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink>About</NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>Contact</NavigationMenuItem>

        {/* TODO(mrzzy): link to Registration */}

        <NavigationMenuItem>
          <Button>Join Us</Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
