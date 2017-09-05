const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index=0
  document.body.addEventListener('keydown', function(element){
    const key = parseInt(element.detail || element.which)
    if (code[index] === key){
      index++;

      if (index === code.length){
      alert("Success!")
      }
    } else{
        index = 0
    }
  })
  }