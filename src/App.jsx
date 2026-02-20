function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <header className="h-16 border-b border-gray-800 flex items-center px-6">
        <h1 className="text-2xl font-bold tracking-wide text-purple-400">
          ZenithScript 🚀
        </h1>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT PANEL — CHARACTER SELECT */}
        <div className="w-1/3 border-r border-gray-800 p-6 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">
            Character Pool
          </h2>

          <div className="space-y-3">
            <div className="bg-gray-900 p-4 rounded-lg">
              Character cards will appear here
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — BATTLE AREA */}
        <div className="flex-1 p-6 flex flex-col">

          <h2 className="text-xl font-semibold text-purple-300 mb-4">
            Battle Arena
          </h2>

          <div className="flex-1 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400">
            Select characters to begin battle
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
