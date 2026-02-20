function CharacterCard({ character, onSelect }) {
  return (
    <div
      onClick={() => onSelect(character)}
      className="bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition transform hover:shadow-lg hover:shadow-purple-700/40"
    >
      <img
        src={character.img}
        alt={character.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-3">
        <h3 className="font-semibold">{character.name}</h3>
        <p className="text-sm text-gray-400">{character.anime}</p>
        <p className="text-purple-400 mt-1">Power: {character.power}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
