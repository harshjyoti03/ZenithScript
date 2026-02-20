export function calculateTeamPower(team) {
  return team.reduce((sum, char) => sum + char.power, 0);
}

export function calculateWinner(teamA, teamB) {
  const powerA = calculateTeamPower(teamA);
  const powerB = calculateTeamPower(teamB);

  const total = powerA + powerB;

  const probA = total === 0 ? 0 : Math.round((powerA / total) * 100);
  const probB = 100 - probA;

  let winner = "Draw";

  if (powerA > powerB) winner = "Team A";
  else if (powerB > powerA) winner = "Team B";

  return { winner, probA, probB };
}

export function generateCommentary(teamA, teamB, winner) {
  if (winner === "Draw") {
    return "Both teams clash with equal force, resulting in a stalemate.";
  }

  const winTeam = winner === "Team A" ? teamA : teamB;
  const strongest = winTeam.reduce((a, b) =>
    a.power > b.power ? a : b
  );

  const lines = [
    `${strongest.name} dominates the battlefield with overwhelming strength.`,
    `${strongest.name}'s power turns the tide of battle.`,
    `The fight ends swiftly as ${strongest.name} proves unstoppable.`,
    `${strongest.name} leads the team to a decisive victory.`,
  ];

  return lines[Math.floor(Math.random() * lines.length)];
}
