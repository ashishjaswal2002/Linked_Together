import {useRouter} from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import { Eventlist } from '../../components/events/event-list';

function FilteredEventsPage(){
    const router = useRouter();

    const filterData = router.query.slug;
    console.log(filterData)
    if(!filterData){
        return <p className='center'>Loading......</p>
    }
    const filteredYear = filterData[0];
    const filterdMonth = filterData[1];
    const numyear = +filteredYear;
    const numMonth = +filterdMonth;
    if(isNaN(numyear)|| isNaN(numMonth)||numyear>2040||numyear<2021||numMonth<1||numMonth>12){
        return <p>Invalid Filter. Please adjust your filter...</p>
    }

  const filteredEvents = getFilteredEvents({
    year:numyear,
    month:numMonth,

  });

  if(!filteredEvents || filteredEvents.length===0){
    return <p>No Events Fonund for the chpse fuck Macximmilanb</p>
  }

 return (
    <div>
    <Eventlist items={filteredEvents}/>
    </div>
 )   
}
export default FilteredEventsPage; 