import React from 'react';

const AlertBox: React.FC = () =>{
    return(
        <div className='font-semibold border border-white bg-white  p-8 rounded shadow-lg'>
            Looks like our backend server is taking a snooze. <br />
            Don't fret, it's just the quirks of being on a free server! <br />
            But hey, good news: it's turning on as we speak. 
            So sit tight <br /> and we'll have things running in a jiffy! 🚀💤
        </div>
    )
}

export default AlertBox;