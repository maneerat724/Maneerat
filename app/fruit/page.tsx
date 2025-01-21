"use client"
import { useState ,useEffect } from "react"
import Card from "../components/Card"

export default function Page() {
    const [fruit , setFruit] = useState('apple')
    const toBanana = () => {
        setFruit('Banana')

        useEffect(() => {
            document.title = ' My fruit is ${fruit}'
        } )

    
    }
    const toWatermelon = () => {
        setFruit('Watermelon')
    }
    const toOrange = () =>{
        setFruit('Orange')
    }
     return (
        <div>
            {fruit}
         <ul>
            <button onClick={toBanana}>Banana</button> 
            <button onClick={toWatermelon}>Watermelon</button> 
            <button onClick={toOrange}>Orange</button> 
            
            <Card src="/333.jpg" title="CatCat1"/>
            <Card src="/5555.jpg" title="CatCat2"/>
            <Card src="/11111.jpg" title="CatCat3"/>
           
            </ul>  
    
           
        </div>
    );
}