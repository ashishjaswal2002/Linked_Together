
import { Eventlist } from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data"
export default function HomePage() {
  const featuredEvent= getFeaturedEvents();
  return (
    <div>
  <ul>
    <Eventlist  items={featuredEvent}/>
  </ul>
    </div>
  )
}
