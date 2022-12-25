import { Eventlist } from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage(){
    const allEvents = getAllEvents();
    return (
        <div>
            <Eventlist items={allEvents}/>
        </div>
    )
}
export default AllEventsPage;