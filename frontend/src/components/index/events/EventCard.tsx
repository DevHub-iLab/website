import React from 'react';
import { Button } from '@/components/ui/button';
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';

interface EventCardProps {
  id: string;
  imgSrc: ImageMetadata; // Use Astro ImageMetadata type
  imgAlt: string;
  icon: React.ReactElement;
  title: string;
  timing: string;
  writeup: string;
  ctaTitle: string;
  ctaHref: string;
  className?: string; // Optional className prop
}

export default function EventCard({
  id,
  imgSrc,
  imgAlt,
  icon,
  title,
  timing,
  writeup,
  ctaTitle,
  ctaHref,
  className
}: EventCardProps) {
  return (
    <div id={id} className={className}>
      <img src={imgSrc.src} alt={imgAlt} />
      <h3 className='text-[--yellow] text-3xl font-semibold font-display mt-4'>
        <span className="inline-block mr-1">{icon}</span>
        {title}
      </h3>
      <p className="text-[--red] my-1">{timing}</p>
      <p className="mb-4">
        {writeup}
      </p>
      <a href={ctaHref}><Button >{ctaTitle}</Button></a>
    </div>
  );
};
