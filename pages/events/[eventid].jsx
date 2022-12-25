import { useRouter } from "next/router";
import { getEventId } from "../../dummy-data";

function EventDetailPage(){
    const router = useRouter();

   const eventID =  router.query.eventid;

   const event = getEventId(eventID);
   if(!event){
    return <p>No Event found!</p>
   }
   
    return (
        <div>
            <h1>Event Detail</h1>
        </div>
    )
}
export default EventDetailPage;