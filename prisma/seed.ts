import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    
    const bob = await prisma.user.upsert({
      where: { userName: 'bob' },
      update: {},
      create: {
        id: 1,
        userName: 'bob',
        hashedPassword: 'bob-3478-afeaerasdfewfa-ekjofpaore',
      },
    })

    const raiders = await prisma.team.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            userId: 1
        }
    })

    const game1 = await prisma.game.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            userId: 1,
            teamId: 1,
            teamName: 'Raiders',
            opponent: 'Bob',
            oppTeam: '49ers',
            win: true,
            score: 27,
            oppScore: 3,
            passingYards: 268,
            oppPassingYards: 148,
            rushingYards: 87,
            oppRushingYards: 29,
            passingTds: 3,
            oppPassingTds: 0,
            rushingTds: 0,
            oppRushingTds: 0,
            interceptions: 3,
            oppInterceptions: 1,
            forcedFumbles: 0,
            oppForcedFumbles: 1
        },
    })
    
    console.log({ bob, raiders, game1 })
    }
    
    main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
  .finally(async () => {
    await prisma.$disconnect()
  })