// document.addEventListener('DOMContentLoaded', () => {
  let nav_bar = document.getElementById('navbar');
  let menu = document.getElementById('menubtn');

  menu.addEventListener('click', () => {
      nav_bar.classList.toggle('hidden')
});
// });

// document.setTimeout(() => {
  let icon=document.getElementById('sicon')
  let bar=document.getElementById('first')
  icon.addEventListener('click',() =>{
    bar.classList.toggle("hidden")  
  })
// },3000);