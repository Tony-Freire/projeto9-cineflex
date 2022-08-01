import "./style.css"

export default function Session({id, weekdays, date, times})
{
   return(
       <div className="session">
          <span className="date">
              {weekdays} - {date}
          </span> 
       <div>
         {times.map((time) =>(
             <div className="session-time" key={time.id}><p>{time.name}</p></div>))}
       </div>
       </div>
   )
}
