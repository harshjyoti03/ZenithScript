function CharacterCard({ char, onSelect }) {
  return (
    <div
      onClick={() => onSelect(char)}
      className="bg-gray-700 p-2 rounded cursor-pointer hover:bg-gray-600"
    >
      <img src={char.img} className="h-24 w-full object-cover rounded" />
      <h3 className="text-sm mt-1">{char.name}</h3>
    </div>
  );
}

export default CharacterCard;