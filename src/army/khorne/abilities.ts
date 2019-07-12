import { HERO_PHASE, DURING_GAME, START_OF_HERO_PHASE, END_OF_MOVEMENT_PHASE } from 'types/phases'
import { IEffects } from 'types/data'

// General Allegiance Abilities (always active regardless of army composition)
const Abilities: IEffects[] = [
  {
    name: `Blood for the Blood God!`,
    desc: `A KHORNE army generates Blood Tithe points during the course of each battle; the controlling player must keep a record of how many points their army accrues. A Blood Tithe point is generated each time a unit belonging to either player is wiped out. The maximum number of Blood Tithe points an army can have at any one time is 8; any additional points generated are lost.`,
    when: [DURING_GAME],
  },
  {
    name: `Blood for the Blood God!`,
    desc: `Blood Tithe points can be expended at the start of either player's hero phase, but only once per phase. To do so, pick one reward on the Blood Tithe table that has a value equal to or less than your current number of Blood Tithe points and immediately resolve its effects. When one or more Blood Tithe points are expended, any remaining points are lost, though more points can be generated later in the game as normal.`,
    when: [START_OF_HERO_PHASE],
  },
  {
    name: `Summon Daemons of Khorne`,
    desc: `If you have 2 or more Blood Tithe points at the end of your movement phase, you can summon one more more units onto the battlefield. If you summon any units in this manner, your Blood Tithe points total is reset to zero immediately after the last unit has been set up (you cannot save any Blood Tithe points you did not use).
    
    Summoned units must be set up wholly within 12" of a friendly KHORNE HERO and more than 9" away from any enemy units.`,
    when: [END_OF_MOVEMENT_PHASE],
  },
  {
    name: `Blood Blessings of Khorne`,
    desc: `KHORNE PRIESTS can attempt to bestow their blood blessing in each of your hero phases in addition to any prayers they may know. To do so, roll a dice, adding 1 to the result if the priest slew any enemy models in the previous turn. If the result is 4+, the effect takes place. If the result is 1, the priest suffers D3 mortal wounds.`,
    when: [HERO_PHASE],
  },
]

export default Abilities