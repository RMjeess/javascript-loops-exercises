

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

function getParkingLotState(parkingLot) {
  const state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0,
  }
  for (let i=0; i<parkingLot.length; i++){
    for(let j=0; j<parkingLot[i].length; j++){
      if (parkingLot[i][j] == 1) {
        state.totalSlots = state.totalSlots + 1;
        state.occupiedSlots = state.occupiedSlots + 1;
      } else if (parkingLot[i][j] == 2){
        state.totalSlots = state.totalSlots + 1;
        state.availableSlots = state.availableSlots + 1;
      }
    }
  }
  return state;
}


console.log(getParkingLotState(parking_state))