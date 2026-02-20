function BattleControls({ onBattle }) {
  return (
    <button
      onClick={onBattle}
      className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
    >
      Start Battle ⚔️
    </button>
  );
}

export default BattleControls;
