import React from 'react'
import { Eventitem } from './event-item'


export const eventlist = (props) => {
  return (
    <ul>
    {props.items.map((event)=><Eventitem></Eventitem>)}

    </ul>
  )
}
