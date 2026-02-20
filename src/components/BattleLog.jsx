function BattleLog({ logs }) {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl mb-2">Battle Logs</h2>

      {logs.length === 0 ? (
        <p className="text-gray-400">No battle yet</p>
      ) : (
        logs.map((log, i) => (
          <p key={i} className="text-green-400 text-sm">
            {log}
          </p>
        ))
      )}
    </div>
  );
}

export default BattleLog;