"use client";
//
// DevHub Website
// Components
// Copy Email Button
//

import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";

/** Copies email to the user's clipboard, showing toast as visual indication */
export default function CopyEmail({
  email,
  children,
}: React.PropsWithChildren<{ email: string }>) {
  const { toast } = useToast();
  return (
    <Button
      onClick={() => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(email);
        toast({
          description: "Copied Email to clipboard.",
        });
      }}
    >
      {children}
    </Button>
  );
}
