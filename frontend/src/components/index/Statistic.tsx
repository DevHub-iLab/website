//
// Devhub Website
// UI Components
// Statistic
//

import * as React from "react";
import { useCountUp } from 'react-countup'

interface StatisticProps {
    title: string,
    icon: React.ReactElement,
    value: number,
    duration?: number
}

/** Display a statistic by animating a counting up counter over duration */
export default function Statistic({ title, icon, value, duration = 1.2 }: StatisticProps) {
    // setup count up element to display count up animation
    const ref = React.useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
    useCountUp({
        ref,
        duration,
        end: value,
        // trigger count up animation on user scroll into viewport
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true,
    });
    return (
        <div>
            <p className="text-7xl text-[--yellow] font-black" ref={ref}  />
            <p className=" text-[--red]">{icon} {title}</p>
        </div>
    );
}
