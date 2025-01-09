
import React from 'react';

const Museumcard = (props) => {
  function showalert() {
    document.getElementById('alert').style.display = 'block';
    // Add backend code to save ticket data to database or local storage.
  }

  function hide() {
    document.getElementById('alert').style.display = 'none';
  }

  return (
    <div className="bg-white flex  w-full justify-center items-center text-black ">
      <div className="flex-col  justify-center items-center w-[100%] p-4  md:p-6">
        <div className=" flex-col w-[100%] items-center justify-center px-8 py-6 md:flex-row md:gap-8">
          {/* Image Section */}
          <div className="">
            <img src={props.url} className="w-screen h-auto object-cover rounded-lg" alt={props.name} />
          </div>

          {/* Details Section */}
          <div className="flex flex-col w-full  text-xl mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-amber-600">{props.name}</h2>
            <p className="text-gray-700">
              {props.description}
              <br />
              <span className="font-semibold">Activities:</span> {props.activities}
            </p>
            <p className="text-red-800">Location: {props.location}</p>
            <p className="text-red-800">
              Opening Hours: {props.openingHours} - {props.closingHours}
            </p>
            <p className="text-red-800">Ticket: {props.ticket}</p>
            <button
              className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg mt-4"
              onClick={showalert}
            >
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Alert Modal */}
      <div
        className="hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center w-11/12 max-w-md h-auto p-6 shadow-xl bg-slate-800 text-white rounded-lg"
        id="alert"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-center mb-4">
            To buy a ticket, please go through the Chatbot.
          </h2>
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
            onClick={hide}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Museumcard;

