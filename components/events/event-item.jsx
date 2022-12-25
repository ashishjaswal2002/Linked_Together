
import classes from './event-item.module.css';

import Button from '../ui/button';
import Dateicon from '../icons/date-icon';
import Locationicon from '../icons/Location-icon';
import RightIcon from '../icons/Right-icon';
export const Eventitem = (props) => {
   const {title,image,date,location,id} = props;
   const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
    day:'numeric',
    month:'long',
    year:'numeric',
   });
   const formattedAddress =  location.replace(',','\n')
   const exploreLink = `/events/${id}`
  return (
    <li className={classes.item}>
  <img src={image} alt={title}/>
  <div className={classes.content}>
    <div className={classes.summary}>
  <h2>{title}</h2>

    <div className={classes.date}>
      <Dateicon/>
      <time>
    {humanReadableDate}
      </time>
    </div>
    <div className={classes.address}>
    <Locationicon/>
      <address>
        {formattedAddress}
      </address>
    </div>
    </div>
    <div  className={classes.actions}>
     <Button link={exploreLink}><span>Explore Event</span>
     <span className={classes.icon}> 
      <RightIcon/>
      </span></Button>
    </div>
  </div>
    </li>
  )
}
