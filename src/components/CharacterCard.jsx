function CharacterCard({ character, onSelect }) {
  return (
    <div
      onClick={() => onSelect(character)}
      className="bg-gray-900 p-4 rounded-lg cursor-pointer hover:bg-purple-800 transition"
    >
      <h3 className="font-semibold text-lg">{character.name}</h3>
      <p className="text-sm text-gray-400">{character.anime}</p>
      <p className="text-purple-400 mt-2">Power: {character.power}</p>
    </div>
  );
}

export default CharacterCard;
