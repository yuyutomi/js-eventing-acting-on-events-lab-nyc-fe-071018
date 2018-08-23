const element = document.getElementById('dodger')
document.addEventListener('keydown', (event) => {
  console.log(event) //this is just to see what is happening
  if(event.which === 37) {
    let previousLeft = element.style.left
  }
})