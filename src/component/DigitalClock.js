import React , {useState} from 'react';

const DigitalClock = () => {
    
    // fetching "live time" and storing it in "currTime" variable
    let currTime = new Date().toLocaleTimeString();
    
    // useState to " display time "
    const [time, setTime] = useState(currTime);
    
    // this is the callBack function (from "setInterval") which is repeatedly "updating the time"
    const updateTime = () =>{
        currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }

    // function to repeat a specified function at every given time-interval 
    // here time-interval = 1000ms (1 sec).
    setInterval(updateTime , 1000);

    return(
        <div>
            <div className='heading'>
            <h1> {time} </h1>
            </div>


            <h2>The above running time is generated by one of the JS function :-</h2>
            <h4>- new Date().toLocaleTimeString()</h4>
            <h2>It is constantly updating with a function :- </h2>
            <h4>- setInterval()- it expects two argument.  </h4>
            <h4>1) callBack function</h4>
            <h4>2) In what time interval, this function needs to be executed</h4>
        </div>
    );
}

export default DigitalClock
