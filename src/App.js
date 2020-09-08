import React, { useEffect, useState } from 'react';

import './App.css';
//importing hooks
import useVisualMode from './hooks/UseVisualMode';
import useApplicationData from "./hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
import VisitorContext from "./hooks/VisitorContext";
<<<<<<< HEAD
import TrailContext from "./hooks/TrailContext";
=======
>>>>>>> 4f21580b420f8bec808c6a29c3ad2557c0f5b6f6

// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList';
import MyBookings from './components/MyBookings';
import Entry from "./components/EntryForm/Index";
import DateSelector from "./components/DateSelector";
import Register from "./components/Register";
import Confirm from './components/Confirm';
<<<<<<< HEAD
import Login from './components/Login';
import BookingsButton from "./components/Button";
=======
import Slider from './components/Slider';
>>>>>>> 4f21580b420f8bec808c6a29c3ad2557c0f5b6f6
// import EntryForm from "components/EntryForm/Index"; 

import "./components/NavBar.scss";

const INITIAL = "INITIAL";
const REGISTER = "REGISTER";
<<<<<<< HEAD
const BOOKINGS = "BOOKINGS";
const FORM = "FORM";
=======
>>>>>>> 4f21580b420f8bec808c6a29c3ad2557c0f5b6f6

// export default App;
export default function App() {

  const { state, cancelPass, newPass } = useApplicationData();
  console.log('app state:', state)
  console.log('app state passes:', state.pass_entries)

  const { mode, transition, back } = useVisualMode(INITIAL
    // onRegister ? REGISTER : INITIAL
  );
  console.log('app mode:', mode)
  
  const [park, setPark] = React.useState({});

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [selectedTrail, setSelectedTrail] = React.useState({});

  const [selectedVisitor, setSelectedVisitor] = React.useState({});
  console.log('app selected visitor:', selectedVisitor)
  
  console.log('app:', state.parks )

  const onMyBookings = () => {
    transition(BOOKINGS);
  };
  
  return (
          <DateContext.Provider value={{selectedDate, setSelectedDate}}>
            <ParkContext.Provider value={{park, setPark}}>
            <TrailContext.Provider value={{selectedTrail, setSelectedTrail}}>
              <VisitorContext.Provider value={{selectedVisitor, setSelectedVisitor}}> 
                <main className="App">
                  <nav>
                    <NavBar
                      visitors={state.visitors}
                      onRegister={()=> transition(REGISTER)}
                      />
                  </nav>
                  <Slider/>
                    <h2>Welcome to BC Parks and Recreation.</h2>
                    <h5> Some of our most popular parks regularly experience high visitor volumes, resulting in crowding of facilities, packed parking lots, and safety issues.To ensure the health and safety of our visitors and staff, to meet health and safety guidelines, and as part of a pilot project, free day-use passes are required to access the trails/parks below.</h5>
                    
                    <h4>Step 1: Choose a date for your hike.
                        Step 2: Choose a mountain.
                        Step 3: Chose a trail.
                        Step 4: To book for a pass, insert your guests' information.
                    </h4>
                  { mode === INITIAL && (
                    <div className='main-body'>
                        <DateSelector></DateSelector>
                        {/* <Confirm /> */}
                        <ParksList
                          parks={state.parks} 
                          // setPark={setPark}
                          >
                          {/* parks={state.parks}  */}
                          {/* {selectedVisitor.email &&(  */}
                          <BookingsButton 
                          onClick={() => onMyBookings()}
                          ></BookingsButton>
                          {/* )} */}
                        </ParksList>

                        { park.name && (
                          <TrailList 
                            trails={state.trails}
                            pass_entries={state.pass_entries} onForm={() => transition(FORM)}
                          />
                        )}
                        { selectedTrail.name && (
                         <Entry 
                         visitors={state.visitors}
                          trails={state.trails}
                          date={selectedDate}
                          vistor={selectedVisitor}
                          newPass={newPass}
                          />
                        )}

<<<<<<< HEAD
            <Slider/>
            <h2>Welcome to Hiking Day-Pass Program for BC Parks</h2>
            <h5> Some of our most popular parks regularly experience high visitor volumes, resulting in crowding of facilities, packed parking lots, and safety issues.To ensure the health and safety of our visitors and staff, to meet health and safety guidelines, and as part of a pilot project, free day-use passes are required to access the trails/parks below.</h5>
            
            <h4>Step 1: Choose a date for your hike. </h4>
            <h4> Step 2: Choose a mountain.</h4>
            <h4>Step 3: Chose a trail.</h4>
            <h4>Step 4: To book for a pass, insert your guests' information.</h4>
           
            { mode === INITIAL && (
              <div className='main-body'>
                  <DateSelector></DateSelector>
                  {/* <Confirm /> */}
                  <ParksList
                    parks={state.parks} 
                    // setPark={setPark}
                    >
                    {/* parks={state.parks}  */}
                    
                  </ParksList>
                  { park.name && (
                    <TrailList 
=======
                    {/* <MyBookings 
                      visitor={selectedVisitor}
                      visitors={state.visitors}
                      mybookings={state.mybookings}
>>>>>>> b25453c63274a1c0c0ed3e64a3451a336171ce79
                      trails={state.trails}
                      // onNewBooking={() => transition(INITIAL)}
                    /> */}
                    </div>
                  )}
                  { mode === REGISTER && (
                    <Register 
                      onSetVerify={() => transition(INITIAL)}
                    />
                  )}
                  {/* { mode === BOOKINGS && ( */}
                    <MyBookings
                      visitor={selectedVisitor}
                      visitors={state.visitors}
                      mybookings={state.mybookings}
                      trails={state.trails}
                      cancelPass={cancelPass} 
                      onNewBooking={() => transition(INITIAL)}
                    />
                  {/* )} */}
                  {/* { mode === INITIAL && (
                    <Login 
                      visitors={state.visitors}
                      onMyBooking={() => transition(BOOKINGS)}
                    />
                  )} */}

<<<<<<< HEAD
            {/* // <h1>{ this.state.message }</h1> */}
            {/* // <button onClick={this.fetchData} > */}
            {/* //   Fetch Data */}
            {/* // </button>         */}
          </main>
        </VisitorContext.Provider>
      </ParkContext.Provider>
    </DateContext.Provider>
  )
=======

                  {/* // <h1>{ this.state.message }</h1> */}
                  {/* // <button onClick={this.fetchData} > */}
                  {/* //   Fetch Data */}
                  {/* // </button>         */}
                </main>
              </VisitorContext.Provider>
              </TrailContext.Provider>
            </ParkContext.Provider>
          </DateContext.Provider>
  )       
>>>>>>> b25453c63274a1c0c0ed3e64a3451a336171ce79
};