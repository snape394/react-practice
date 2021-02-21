import React, { useState , useEffect } from 'react'
import { interval, Subscription } from 'rxjs'



export const Homepage:React.FC = () =>
{

    useEffect(() => {
      
        console.log('56')
    }, [])
    
    const inter = interval(0.1)
    const [sub1, setsub1] = useState<Subscription>()
    const [sub2, setsub2] = useState<Subscription>()

    
    const [counter, setcounter] = useState(0)

    const moveDirection = (direction : string) =>{
        switch(direction){
            case 'left':
                setsub1(inter.subscribe((res)=>{
                    setcounter(counter-res)
                }))
                break
            case 'right':
                setsub1(inter.subscribe((res)=>{
                    setcounter(counter+res)
                })) 
                break
            default:
                console.log(direction)
        }
    }
 

    const updateCountAdd = () =>{
        if(sub2){
            sub2.unsubscribe()
        }
        setsub1(inter.subscribe((res)=>{
        setcounter(counter-res)
       
    })) 
        
        
    }
    const updateCountSub = () =>{
        if(sub1){
            sub1.unsubscribe()
        }
        setsub2(inter.subscribe((res)=>{
            setcounter(counter+res)
        })) 
     
    }

    let inputStyle = {
        marginLeft: counter
      };
    


    return (
        <div>
            <h2 style={inputStyle} >@=========@</h2>
            <button onClick={()=>{updateCountAdd()}}>&lt;&lt;&lt;&lt;&lt;</button>
            <button onClick={()=>{updateCountSub()}}>&gt;&gt;&gt;&gt;&gt;</button><br/>
            ------------------------------------------------------------------------<br/>
            <button onClick={()=>{moveDirection('left')}}>&lt;&lt;&lt;&lt;&lt;</button>
            <button onClick={()=>{moveDirection('right')}}>&gt;&gt;&gt;&gt;&gt;</button>
            <h1 >{counter}</h1>
        </div>

    )

}