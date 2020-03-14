
function calculateScore(player) {
  const position = player.position

  switch (position) {

    case 'QB':
      return calculatePassing(player) + calculateRushing(player)
      break

    case 'RB':
      return calculateRushing(player) + calculateReceiving(player) + calculateKickreturn(player) + calculatePuntreturn(player)
      break
    case 'WR':
      return calculateRushing(player) + calculateReceiving(player) + calculateKickreturn(player) + calculatePuntreturn(player)
      break
    case 'TE':
      return calculateReceiving(player)
      break
    default: return 0
      break
  }
  function calculatePassing(player) {
    const passingYards = player.stats.passing.yards / 25
    const passingTDS = player.stats.passing.touchdowns * 6
    const passingINT = player.stats.passing.interceptions * -3

    return passingYards + passingTDS + passingINT
  }

  function calculateRushing(player) {
    const rushingYards = player.stats.rushing.yards / 10
    const rushingTDS = player.stats.rushing.touchdowns * 6
    const rushingFumbles = player.stats.rushing.fumbles * -3
    return rushingYards + rushingTDS + rushingFumbles
  }
  function calculateReceiving(player) {
    const receptions = player.stats.receiving.receptions + 0
    const receivingYards = player.stats.receiving.yards / 10
    const receivingTDS = player.stats.receiving.touchdowns * 6
    const receivingFumbles = player.stats.receiving.fumbles * -3
    return receptions + receivingYards + receivingTDS + receivingFumbles
  }
  function calculateKickreturn(player) {
    const kickYards = player.stats.return.kickreturn.yards / 15
    const kickTDS = player.stats.return.kickreturn.touchdowns * 6
    const kickFumbles = player.stats.return.kickreturn.fumbles * -3
    return kickYards + kickTDS + kickFumbles
  }
  function calculatePuntreturn(player) {
    const puntYards = player.stats.return.puntreturn.yards / 15
    const puntTDS = player.stats.return.puntreturn.touchdowns * 6
    const puntFumbles = player.stats.return.puntreturn.fumbles * -3
    return puntYards + puntTDS + puntFumbles
  }
}


module.exports = calculateScore