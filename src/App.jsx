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

  // SELECT CHARACTER
  const handleSelect = (char) => {
    if (teamA.length < 3 && !teamA.includes(char)) {
      setTeamA([...teamA, char]);
    } else if (teamB.length < 3 && !teamB.includes(char)) {
      setTeamB([...teamB, char]);
    }
  };

  // REMOVE FROM TEAM
  const removeFromA = (id) => {
    setTeamA(teamA.filter((c) => c.id !== id));
  };

  const removeFromB = (id) => {
    setTeamB(teamB.filter((c) => c.id !== id));
  };

  // START BATTLE
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

  // RESET BATTLE
  const resetBattle = () => {
    setTeamA([]);
    setTeamB([]);
    setResult(null);
  };

  // RANDOM BATTLE
  const randomBattle = () => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    setTeamA(shuffled.slice(0, 3));
    setTeamB(shuffled.slice(3, 6));
    setResult(null);
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
          <h2 className="text-xl mb-4 text-purple-300">
            Character Pool
          </h2>

          <div className="grid gap-4">
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

          {/* TEAM PANELS */}
          <div className="grid grid-cols-2 gap-6">
            <TeamPanel
              title="Team A"
              team={teamA}
              onRemove={removeFromA}
            />
            <TeamPanel
              title="Team B"
              team={teamB}
              onRemove={removeFromB}
            />
          </div>

          {/* CONTROLS */}
          <div className="flex gap-4 justify-center">
            <BattleControls onBattle={startBattle} />

            <button
              onClick={resetBattle}
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-semibold"
            >
              Reset
            </button>

            <button
              onClick={randomBattle}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold"
            >
              Surprise Me 🎲
            </button>
          </div>

          {/* RESULT PANEL */}
          {result && (
            <div className="bg-gray-900 p-6 rounded-lg text-center space-y-3">

              <h2 className="text-2xl text-purple-400 font-bold">
                Winner: {result.winner}
              </h2>

              <p>
                Team A Win Chance:{" "}
                <span className="text-purple-300">
                  {result.probA}%
                </span>
              </p>

              <p>
                Team B Win Chance:{" "}
                <span className="text-purple-300">
                  {result.probB}%
                </span>
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
