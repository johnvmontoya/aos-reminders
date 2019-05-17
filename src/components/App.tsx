import React, { useState } from 'react'
import './App.css'
import Reminders from './info/reminders'
import * as SeraphonArmy from '../army/seraphon/index'
import { SERAPHON } from 'meta/factions'
import { ArmyBuilder } from './input/select_army'



const App = () => {
  const [selections, setSelections] = useState({units: [] as string[], artifacts: [] as string[], battalions: [] as string[]})

  // TODO: Have ArmyBuilder update `selections` for real-time reminders!
  return (
    <div className="App">
      <header className="App-header">
        <h2>Age of Sigmar Reminders</h2>
        <p className="App-header-p">By Davis E. Ford</p>
        <p className="App-header-p">Right now, this tool offers personalized gameplay reminders for Seraphon. Other armies may be added if there is demand.</p>
      </header>
      <ArmyBuilder army={SeraphonArmy} setSelections={setSelections} />
      <Reminders factionName={SERAPHON} selections={selections} />
    </div>
  )
}

export default App