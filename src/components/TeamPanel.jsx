function TeamPanel({ title, team }) {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl mb-2">{title}</h2>

      {team.length === 0 ? (
        <p className="text-gray-400">No fighters</p>
      ) : (
        team.map((c) => (
          <p key={c.id} className="text-sm">
            {c.name}
          </p>
        ))
      )}
    </div>
  );
}

export default TeamPanel;