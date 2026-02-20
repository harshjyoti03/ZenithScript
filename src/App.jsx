import { useState } from "react";
import characters from "./data/characters";
import CharacterCard from "./components/CharacterCard";
import TeamPanel from "./components/TeamPanel";
import BattleControls from "./components/BattleControls";

function App() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const handleSelect = (char) => {
    if (teamA.length < 3) {
      setTeamA([...teamA, char]);
    } else if (teamB.length < 3) {
      setTeamB([...teamB, char]);
    }
  };

  const startBattle = () => {
    alert("Battle simulation coming in next phase!");
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <header className="h-16 border-b border-gray-800 flex items-center px-6">
        <h1 className="text-2xl font-bold text-purple-400">
          ZenithScript 🚀
        </h1>
      </header>

      <div className="flex flex-1">

        {/* CHARACTER POOL */}
        <div className="w-1/3 border-r border-gray-800 p-6 overflow-y-auto">
          <h2 className="text-xl mb-4 text-purple-300">Character Pool</h2>

          <div className="grid grid-cols-1 gap-3">
            {characters.map((char) => (
              <CharacterCard
                key={char.id}
                character={char}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 p-6 flex flex-col gap-6">

          <div className="grid grid-cols-2 gap-6">
            <TeamPanel title="Team A" team={teamA} />
            <TeamPanel title="Team B" team={teamB} />
          </div>

          <div className="flex justify-center">
            <BattleControls onBattle={startBattle} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
