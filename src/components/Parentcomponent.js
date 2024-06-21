import React from 'react'
import Childcomponent from './Childcomponent'

export default function Parentcomponent() {
  return (
    <div> 
    <p>It is parent component</p>
    <Childcomponent/>
    </div>
  )
}
