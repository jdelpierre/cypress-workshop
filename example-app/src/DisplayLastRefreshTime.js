

function DisplayLastRefreshTime () {

  let time = new Date().toLocaleString();
  return (
    <p>Last refresh : {time}</p>
  )
}

export { DisplayLastRefreshTime };