import moment from "moment/moment"

export function getBlockTime(){
  const date = new Date()
  const dateFormat =moment(date).format('MMMM Do YYYY, h:mm:ss a')
    return dateFormat
}
// требуется поменять еще формат времени, но это уже в др итерации

