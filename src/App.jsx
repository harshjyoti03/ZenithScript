import { useState } from "react";
import characters from "./data/characters";
import CharacterCard from "./components/CharacterCard";
import TeamPanel from "./components/TeamPanel";
import BattleControls from "./components/BattleControls";

import {
  calculateWinner,
  generateCommentary,
} from "./utils/battleEngine";

function App() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const [result, setResult] = useState(null);

  const handleSelect = (char) => {
    if (teamA.length < 3) {
      setTeamA([...teamA, char]);
    } else if (teamB.length < 3) {
      setTeamB([...teamB, char]);
    }
  };

  const startBattle = () => {
    if (teamA.length === 0 || teamB.length === 0) {
      alert("Select characters for both teams!");
      return;
    }

    const battle = calculateWinner(teamA, teamB);

    const commentary = generateCommentary(
      teamA,
      teamB,
      battle.winner
    );

    setResult({ ...battle, commentary });
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

          <div className="grid gap-3">
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

          {/* RESULT PANEL */}
          {result && (
            <div className="bg-gray-900 p-6 rounded-lg text-center space-y-3">

              <h2 className="text-2xl text-purple-400 font-bold">
                Winner: {result.winner}
              </h2>

              <p>
                Team A Win Chance: <span className="text-purple-300">{result.probA}%</span>
              </p>

              <p>
                Team B Win Chance: <span className="text-purple-300">{result.probB}%</span>
              </p>

              <p className="italic text-gray-300">
                "{result.commentary}"
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
