import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function Get() {
    const [origintext, originUpdate] = useState('먼저 마중옴');

    useEffect( async () => {
      const getdate = await  axios.get('/get')
        originUpdate(getdate)
    }
        ,[])

  return (
    <div>{origintext}</div>
  )
}
