import { Eventlist } from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "./events-search";
import { useRouter } from "next/router";
function AllEventsPage(){
    const allEvents = getAllEvents();
    const router= useRouter();
    function findEvents(year,month){
      const fullPath = `/events/${year}/${month}`;
     
        router.push(fullPath);
}
    return (
        <div>
            <EventSearch onSearch={findEvents}/>
            <Eventlist items={allEvents}/>
        </div>
    )
}
export default AllEventsPage;