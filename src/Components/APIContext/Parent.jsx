import React, { createContext } from 'react'
import Child1 from './Child1'

export const NameContext = createContext()
export const EmailContext = createContext()
export const DesignationContext = createContext()

export default function Parent() {
  return (
    <>
        <h1>Context API Example</h1>
        <h2>This is Parent Component</h2>
        <hr/>

        <NameContext.Provider value={"Pooja Pal"}>
            <EmailContext.Provider value={"poojapal@444gamil.com"}>
                <DesignationContext.Provider value={"Student"}>
                    <Child1/>
                </DesignationContext.Provider>
            </EmailContext.Provider>
        </NameContext.Provider>
    </>
  )
}
