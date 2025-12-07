import React from 'react'
import { DesignationContext, EmailContext, NameContext } from './Parent'


export default function Child5() {
  return (
    <>
        <h1>This is Child5 Component</h1>
    <NameContext.Consumer>
        {(value)=>{
            return<h3>Name: {value}</h3>
        }}
    </NameContext.Consumer>
    <EmailContext.Consumer>
        {(value)=>{
            return<h3>Email: {value}</h3>
        }}
    </EmailContext.Consumer>
    <DesignationContext.Consumer>
        {(value)=>{
            return<h3>Dsg: {value}</h3>
        }}
    </DesignationContext.Consumer>
    </>
  )
}
