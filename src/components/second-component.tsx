
import { makeStyles } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import React, { useEffect, useState } from 'react'
import { from, Observable, Subscription } from 'rxjs'
import { TypedJSON } from 'typedjson'
import {UserDetail} from './responses/user-detail.response'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }));


export const SecondComponent:React.FC = () => {

    const styles = useStyles()
    const [userData, setUserData] = useState<Subscription>()
    const [userDetail, setUserDetail] = useState<UserDetail[]>()
    const [isLoading, setisLoading] = useState(true);
    const serializer = new TypedJSON(UserDetail);
    

    const apiCall = (): Observable<any> => {
       return from(fetch('https://jsonplaceholder.typicode.com/users').then(response => {return response.json()}))
        
    }
 

    const getData = () =>
    {
        setUserData(apiCall().subscribe( response=>{
                setUserDetail(response)}

        ))
           
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
            <div>
            
            <h1>Second Component</h1>
            <button onClick={getData}>Subscribe!</button></div>
            {userDetail?.map((response:UserDetail)=>
            <div key={response.id}  className={styles.root}>
                <Chip  label={`${response.id}----${response.name}`} />

            </div>
 
    )}
        
       
     
        </div>
        )
    
}
