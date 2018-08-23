const element = document.getElementById('dodger')
document.addEventListener('keydown', (event) => {
  console.log(event) //this is just to see what is happening
  if(event.which === 37) {
    // 180px
    let previousLeft = element.style.left
    // 180
    let previousLeftNumber = parseInt(previousLeft.replace('px', ''), 10)
    if(previousLeftNumber > 0) {
      let newLeftNumber = (previousLeftNumber - 10) + 'px'
      element.style.left = newLeftNumber
    }
  }
  if(event.which === 39) {
    // we can't do element.style.right because we're not given a 'right' styling
    let previousRight = element.style.left 
    // 180
    let previousRightNumber = parseInt(previousRight.replace('px', ''), 10)
    if(previousRightNumber > 0) {
      let newRightNumber = (previousRightNumber + 10) + 'px'
      element.style.right = newRightNumber
    }
  }
})

// To pass this test, we'll use the following, but the above method is ideal.
