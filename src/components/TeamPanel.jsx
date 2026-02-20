function TeamPanel({ title, team, onRemove }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg min-h-[220px]">
      <h3 className="text-lg font-semibold mb-3 text-purple-300">
        {title}
      </h3>

      {team.length === 0 ? (
        <p className="text-gray-500">No characters selected</p>
      ) : (
        team.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center mb-2 bg-gray-800 p-2 rounded"
          >
            <span>{c.name}</span>
            <button
              onClick={() => onRemove(c.id)}
              className="text-red-400 hover:text-red-600"
            >
              ✕
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TeamPanel;
