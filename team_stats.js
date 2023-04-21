const team = {
  _players: [
    {firstName: 'Bob', lastName: 'Smith', age: 50}, 
    {firstName: 'Fred', lastName: 'Jones', age: 50},
    {firstName: 'George', lastName: 'Jefferson', age: 48}
  ],
  _games: [
    {opponent: 'Raptors', teamPoints: 92, opponentPoints: 73},
    {opponent: 'Grizzlies', teamPoints: 93, opponentPoints: 83},
    {opponent: 'Rough Riders', teamPoints: 94, opponentPoints: 93},
  ],
  get players() {
    return this._players;
  }, 
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  }

};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team.players);
console.log(team.games);
