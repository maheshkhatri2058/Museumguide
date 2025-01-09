import React from 'react'
import List from './museum.json';
import Card from'../Museumcard';



const Pune = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-rose-700 bg-white text-center p-4'>Kolkata Best Museums to Explore</h2>
    {List.slice(20,25).map((museum,index)=>(
      <Card key={index} name={museum.name} 
      openingHours={museum.opening_time}
 closingHours= {museum.closing_time}
      activities={museum.activities} url={museum.url} description={museum.description} location={museum.location} ticket={museum.tickets}/>
    ))}
    {/*chatbot*/}
    <div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
    <df-messenger
      intent="Welcome"
      chat-title="musey-chatbot"
      agent-id="af7e29ba-8b3c-49fe-b22b-5052e147e0f5"
      language-code="en"
      chat-icon="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"
    ></df-messenger>
    
      
    </div>
    </div>
  )
}

export default Pune

