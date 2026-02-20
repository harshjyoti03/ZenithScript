function TeamPanel({ title, team }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg min-h-[200px]">
      <h3 className="text-lg font-semibold mb-3 text-purple-300">
        {title}
      </h3>

      {team.length === 0 ? (
        <p className="text-gray-500">No characters selected</p>
      ) : (
        team.map((c) => (
          <div key={c.id} className="text-sm mb-2">
            • {c.name}
          </div>
        ))
      )}
    </div>
  );
}

export default TeamPanel;
