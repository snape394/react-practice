
import React, { useEffect, useState } from 'react'
import { from, Observable, Subscription } from 'rxjs'
import { TypedJSON } from 'typedjson'
import {UserDetail} from './responses/user-detail.response'





export const SecondComponent:React.FC = () => {

    const [userData, setUserData] = useState<Subscription>()
    const [userDetail, setuserDetail] = useState<UserDetail>()
    const serializer = new TypedJSON(UserDetail);
    

    const apiCall = (): Observable<any> => {
       return from(fetch('https://jsonplaceholder.typicode.com/users').then(response => {return response.json()}))
        
    }
 

    const getData = () =>
    {
        setUserData(apiCall().subscribe( response=>{response.forEach((e:any) => {
            const a = serializer.parse(e)
            console.log(a)
        });}));
    }


    useEffect(() => {
        return () => {
            if (userData) {
                userData.unsubscribe()
            }
        }
    }, [userDetail]);



    return (
        <div>
            <h1>Second Component</h1>
            <button onClick={getData}>Subscribe!</button>
            {userDetail}
            

        
       
     
        </div>
    )
}
