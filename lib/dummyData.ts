const dummyData = [{
    id: 1,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  }, 
  {
    id: 2,
    win: true,
    opponent: 'Cody',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
  {
    id: 3,
    win: false,
    opponent: 'Stephanie',
    score: 17,
    opponentScore: 31,
    team: 'Chiefs',
    opposingTeam: 'Colts' 
  },
  {
    id: 4,
    win: true,
    opponent: 'Dillon',
    score: 55,
    opponentScore: 7,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
  {
    id: 5,
    win: true,
    opponent: 'Tyler',
    score: 21,
    opponentScore: 3,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
  {
    id: 6,
    win: false,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 24,
    team: 'Cowboys',
    opposingTeam: 'Packers' 
  },
  {
    id: 7,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
  {
    id: 8,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
  {
    id: 9,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
  {
    id: 10,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos' 
  },
]

export type Game = {
    id: number
    win: Boolean,
    opponent: String,
    score: Number,
    opponentScore: Number,
    team: String,
    opposingTeam: String
}

export default dummyData