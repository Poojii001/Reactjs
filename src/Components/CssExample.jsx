import React from 'react'

// import "../assets/css/style.css"   //for component level css

let myStyle = {
    heading: {
        background: "black",
        color: "white",
        textAlign: "center",
        padding:10
    },
    paragraph: {
        background: "green",
        color: "white",
        textAlign: "justify",
        padding:10
    },
    purple:{
        backgroundColor:"purple"
    },
    orange:{
        backgroundColor:"orange"
    },
    bluevoilet:{
        backgroundColor:"bluevoilet"
    },
    navy:{
        backgroundColor:"navy"
    }
}
export default function CssExample() {
  return (
     <div className="main">
        <div className="center">
            <h1 style={{backgroundColor:"red",color: "white",textAlign:"center"}}></h1>
            <h2 style={myStyle.heading}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis. Accusantium, aliquam delectus? Quidem quis accusantium assumenda tempore numquam. Corrupti.</h2>
            <h2 style={{...myStyle.heading,...myStyle.purple}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={{...myStyle.heading,...myStyle.orange}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={{...myStyle.heading,...myStyle.bluevoilet}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={{...myStyle.heading,...myStyle.navy}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={myStyle.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, reiciendis. Accusantium, aliquam delectus? Quidem quis accusantium assumenda tempore numquam. Corrupti.</h2>
            <h2 style={{...myStyle.paragraph,...myStyle.purple}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={{...myStyle.paragraph,...myStyle.orange}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={{...myStyle.paragraph,...myStyle.bluevoilet}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
            <h2 style={{...myStyle.paragraph,...myStyle.navy}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet est eos dignissimos maxime accusamus quasi reprehenderit voluptates repellendus consequatur molestiae?</h2>
        </div>
     </div>
  )
}
