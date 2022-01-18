let handleId = 0;
const h1 = document.getElementById("time")
const go = document.getElementById("go")
const stop = document.getElementById("stop")

function getTime() {
  const date = new Date()
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hour}:${minutes}:${seconds}`
  h1.textContent = time;
}

go.onclick = function() {
  if(handleId == 0) {
    handleId = setInterval(getTime, 1000)
  }
}

stop.onclick = function() {
  clearInterval(handleId)
  handleId = 0;
}