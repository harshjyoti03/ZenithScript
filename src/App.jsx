import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import TeamPanel from "./components/TeamPanel";
import BattleLog from "./components/BattleLog";
import { characters } from "./data/characters";

function App() {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [activeTeam, setActiveTeam] = useState("A");
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");

  const addCharacter = (char) => {
    if (activeTeam === "A") {
      if (!teamA.find((c) => c.id === char.id))
        setTeamA([...teamA, char]);
    } else {
      if (!teamB.find((c) => c.id === char.id))
        setTeamB([...teamB, char]);
    }
  };

  const resetBattle = () => {
    setTeamA([]);
    setTeamB([]);
    setLogs([]);
  };

  const randomBattle = () => {
    const shuffled = [...characters].sort(() => 0.5 - Math.random());
    setTeamA(shuffled.slice(0, 2));
    setTeamB(shuffled.slice(2, 4));
    setLogs([]);
  };

  const startBattle = () => {
    if (teamA.length === 0 || teamB.length === 0) {
      alert("Both teams must have at least 1 fighter!");
      return;
    }

    let totalA = teamA.reduce(
      (sum, c) => sum + c.power + c.speed + c.intelligence,
      0
    );

    let totalB = teamB.reduce(
      (sum, c) => sum + c.power + c.speed + c.intelligence,
      0
    );

    let newLogs = [];

    newLogs.push(`Team A Power: ${totalA}`);
    newLogs.push(`Team B Power: ${totalB}`);

    if (totalA > totalB) {
      newLogs.push("🔥 Team A dominates the battlefield!");
    } else if (totalB > totalA) {
      newLogs.push("⚡ Team B overwhelms with strength!");
    } else {
      newLogs.push("🤝 It's a DRAW!");
    }

    setLogs(newLogs);
  };

  const filteredChars = characters.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        ZenithScript ⚔️
      </h1>

      {/* Controls */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <button
          onClick={() => setActiveTeam("A")}
          className={`px-4 py-2 rounded ${
            activeTeam === "A" ? "bg-red-600" : "bg-gray-700"
          }`}
        >
          Add to Team A
        </button>

        <button
          onClick={() => setActiveTeam("B")}
          className={`px-4 py-2 rounded ${
            activeTeam === "B" ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          Add to Team B
        </button>

        <button
          onClick={randomBattle}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          🎲 Surprise Me
        </button>

        <button
          onClick={resetBattle}
          className="bg-yellow-600 px-4 py-2 rounded"
        >
          Reset
        </button>

        <button
          onClick={startBattle}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Start Battle
        </button>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          placeholder="Search characters..."
          className="px-4 py-2 rounded text-black w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Character Pool */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl mb-3">Character Pool</h2>
          <div className="grid grid-cols-2 gap-3">
            {filteredChars.map((char) => (
              <CharacterCard
                key={char.id}
                char={char}
                onSelect={addCharacter}
              />
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="space-y-4">
          <TeamPanel title="Team A" team={teamA} />
          <TeamPanel title="Team B" team={teamB} />
        </div>

        {/* Battle Logs */}
        <BattleLog logs={logs} />
      </div>
    </div>
  );
}

export default App;