const getDate = (date) => {
  let day = date.getDate()
  let dateFormat = day < 10 ? `0${day}` : day
  let month = date.getMonth() + 1
  let monthFormat = month < 10 ? `0${month}` : month
  let year = date.getFullYear()
  return [year, monthFormat, dateFormat].join("-")
}

export default getDate
