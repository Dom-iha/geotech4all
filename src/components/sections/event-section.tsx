import React from 'react';
import MaxWidthWrapper from '../shared/max-width-wrapper';
import EventCard from '../cards/event';
import { Event } from '@prisma/client';

function EventSection({ events }: { events: Event[] }) {
  if (!events.length) return null;

  return (
    <MaxWidthWrapper>
      <h2 className='font-bold text-2xl lg:text-4xl mb-6 md:mb-12'>Upcoming Events</h2>
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-8 md:gap-12 lg:gap-16 justify-center'>
        {events.map((event) => (
          <EventCard
            key={event.id}
            slug={event.slug}
            name={event.name}
            time={event.time}
            venue={event.venue}
            location={event.location}
            link={event.link}
            image={event.image}
            date={event.date}
          />
        ))}
      </ul>
    </MaxWidthWrapper>
  );
}

export default EventSection;
