import { EventDetails } from "@api/entities/events/types.ts";
import { EventDetailsProps } from "@widgets/events/components/event-info";

const noEventDetaultDefaultValue: EventDetailsProps = {
  title: "",
  startTime: "__.__.__",
  location: "--------",
  imageSrc: "",
};

const getNormalizedDate = (eventDetails: EventDetails): string => {
  if (!eventDetails) return "--.--.--";
  const { dates } = eventDetails;
  const { start, timezone } = dates;
  const { dateTime } = start;
  const eventDate = new Date(dateTime);
  const localeDate = eventDate.toLocaleString("en-GB", {
    timeZone: timezone,
    hour12: false,
    day: "numeric",
    year: "numeric",
    month: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
  });
  const [weekday, date, time] = localeDate.split(", ");
  const formattedDate = date.replaceAll("/", ".");
  return `${weekday}, ${formattedDate} @ ${time}`;
};

const geNormalizedLocation = (eventDetails: EventDetails): string => {
  if (!eventDetails) return "----";
  const [location] = eventDetails._embedded.venues;
  return `${location.name}, ${location.city.name}, ${location.country.name}`;
};

export const normalizeEventDetails = (
  eventDetails: EventDetails | null
): EventDetailsProps => {
  if (!eventDetails) return noEventDetaultDefaultValue;
  return {
    title: eventDetails.name,
    imageSrc: eventDetails.images[3].url,
    location: geNormalizedLocation(eventDetails),
    startTime: getNormalizedDate(eventDetails),
  };
};
