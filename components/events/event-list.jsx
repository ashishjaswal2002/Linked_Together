import React from 'react'
import { Eventitem } from './event-item'
import classes from './event-list.module.css';

export const Eventlist = (props) => {
  return (
    <ul className={classes.list}>
    {props.items.map((event)=><Eventitem 
    key = {event.id}
    id ={event.id}
    title= {event.title}
    location = {event.location}
    date = {event.date}
    image = {event.image}
    ></Eventitem>)}

    </ul>
  )
}
