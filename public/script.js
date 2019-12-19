async function remove (element) {

  const todo = element.dataset.todo
  const parent = element.parentNode

  const response = await axios.post('/todo/delete', { todo })

  if(response.data.todo) {
    parent.classList.add('animated', 'fadeOutLeft')
    parent.addEventListener('animationend',  () => document.location = 'http://localhost:3333/')
  }  
 
}
