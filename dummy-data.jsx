
const DUMMY_Events  = [

    {
        id:'e1',
        title:'Two Humans',
        description:'Everyone can lear to code! Yes everyone! In this live event,we are going'
      ,location:'Somstreet 35,1235 San Somwhere',
      date:'2022-05-12',
      image: 'images/coding.jpg',
      isFeautred:true,

    }
    ,
    {
        id:'e2',
        title:'This man',
        description:'Everyone can lear to code! Yes everyone! In this live event,we are going'
      ,location:'Somstreet 35,1235 San Somwhere',
      date:'2021-05-12',
      image:'images/codingchair.jpg',
      isFeautred:false,

    },
    {
        id:'e3',
        title:'That Girl',
        description:'Everyone can lear to code! Yes everyone! In this live event,we are going'
      ,location:'Somstreet 35,1235 San Somwhere',
      date:'2021-05-12',
      image:'images/intro.jpg',
      isFeautred:true,

    }
]
export function getFeaturedEvents(){
return DUMMY_Events.filter((event)=>event.isFeautred);      
}
export function getAllEvents(){
    return DUMMY_Events;
}
 export function getFilteredEvents(dataFilter){
    const{year,month} = dataFilter;


    let filteredEvents = DUMMY_Events.filter((event)=>{
        const eventDate = new Date(event.data);

        return eventDate.getFullYear()===year && eventDate.getMonth()===month-1
    });
    return filteredEvents;
 }

 export function getEventId(id){
  return DUMMY_Events.find((event=> event.id===id));
 }

