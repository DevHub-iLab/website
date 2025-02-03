//
// Devhub Website
// Components
// Events Component
//

import codingPrepImg from "@/assets/coding_prep.png"
import summerBuildImg from "@/assets/summer_build.png"
import mockInterviewImg from "@/assets/mock_interviews.png"
import { LucideDumbbell, LucideHardHat, LucideScale } from "lucide-react"
import { Route } from "@/pages/routes"
import EventCard from "@/components/index/events/EventCard";

const events = [
  {
    id: "coding-prep",
    title: "CodingPrep",
    imgSrc: codingPrepImg,
    imgAlt: "CodingPrep Session",
    icon: (<LucideDumbbell />),
    timing: "Weekly on Wednesday",
    writeup: "Looking for like-minded peers who are also trying to up their technical interview skills? Look no further! CodingPrep is a weekly meet where we spend half the time doing LeetCode problems, and the other half explaining solutions in mini groups.",
    // Call To Action (CTA) button
    ctaTitle: "Join Us",
    ctaHref: Route.SignUp,
  },
  {
    id: "mock-interview",
    title: "Mock Interviews",
    imgSrc: mockInterviewImg,
    imgAlt: "Mock Interview Session",
    icon: (<LucideScale />),
    timing: "As Announced",
    writeup: "Got an interview coming up? Sign up for our virtual mock interview session to prepare for your technical interviews! You will be paired with another student to act as both the interviewer and the interviewee, swapping roles halfway through. This also gives you the chance to step into the interviewer's shoes and gain valuable insights!",
    // Call To Action (CTA) button
    ctaTitle: "Join Us",
    ctaHref: Route.SignUp,
  },
  {
    id: "summer-build",
    title: "Summer Build",
    imgSrc: summerBuildImg,
    imgAlt: "Summer Build Session",
    icon: (<LucideHardHat />),
    timing: "TBC",
    writeup: "Eager to start learning software development? SummerBuild is a self-directed program where you and your team take charge of creating your own software projects. It's a hands-on, collaborative experience designed to help you develop your skills, learn at your own pace, and build something amazing-all in a fun, pressure-free environment.",
    // Call To Action (CTA) button
    ctaTitle: "Sign Up",
    ctaHref: Route.SignUp,
  },
]


export default function Events() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 my-8">
      {events.map(props => <EventCard {...props} />)}
    </div>
  );
}
