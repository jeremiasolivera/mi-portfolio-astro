let cursor = document.querySelector('#cursor')

console.log(cursor)

document.addEventListener('mousemove', function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
})


