import React, { useState } from 'react';

const Time = () => {
    let datte = new Date().toLocaleTimeString();

    const [ctime,setctime] = useState(datte)

    const updatetime = () => {
        let datte = new Date().toLocaleTimeString();
        setctime(datte)

    }

    setInterval(updatetime,1000)

   
    return(
        <>
            {datte}
        </>
    )
}

export default Time;