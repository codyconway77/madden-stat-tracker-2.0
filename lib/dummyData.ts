const dummyData = [{
    id: 1,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  }, 
  {
    id: 2,
    win: true,
    opponent: 'Cody',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 3,
    win: false,
    opponent: 'Stephanie',
    score: 17,
    opponentScore: 31,
    team: 'Chiefs',
    opposingTeam: 'Colts',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 4,
    win: true,
    opponent: 'Dillon',
    score: 55,
    opponentScore: 7,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 5,
    win: true,
    opponent: 'Tyler',
    score: 21,
    opponentScore: 3,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 6,
    win: false,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 24,
    team: 'Cowboys',
    opposingTeam: 'Packers',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 7,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 8,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 9,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
  {
    id: 10,
    win: true,
    opponent: 'Tyler',
    score: 17,
    opponentScore: 13,
    team: 'Raiders',
    opposingTeam: 'Broncos',
    passingYards: 200,
    opponentPassingYards: 130,
    rushingYards: 100,
    opponentRushingYards: 40,
    passingTds: 2,
    opponentPassingTds: 1,
    rushingTds: 1,
    opponentRushingTds: 0,
    forcedFumbles: 0,
    opponentForcedFumbles: 1,
    interceptions: 1,
    opponentInterceptions: 2 
  },
]

export type Game = {
    id: number
    win: Boolean,
    opponent: String,
    score: Number,
    opponentScore: Number,
    team: String,
    opposingTeam: String,
    passingYards: number,
    opponentPassingYards: number,
    rushingYards: number,
    opponentRushingYards: number,
    passingTds: number,
    opponentPassingTds: number,
    rushingTds: number,
    opponentRushingTds: number,
    forcedFumbles: number,
    opponentForcedFumbles: number,
    interceptions: number,
    opponentInterceptions: number
}

export default dummyData