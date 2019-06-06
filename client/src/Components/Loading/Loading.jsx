import React from 'react';
import './Loading.css'
 

function Loading() {

    return (
        <div className="Loading">
            <div className='Loading-left-card'></div>
            <div className='loading-right-card'>
           <div className="hrbar">
           <div className="whitebar"></div>
           </div>
           <div className='loading-menu-cards'>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
           </div>
           <div className="hrbar">
           <div className="whitebar"></div>
           </div>
               <div className='loading-menu-cards '>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
               <div className="Loadbox">
                   <div className="whitebar"></div>
               </div>
           </div>
           </div>
 </div>
    )
}

export default Loading;