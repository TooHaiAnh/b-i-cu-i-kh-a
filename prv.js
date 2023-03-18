document.getElementById("myBtn").addEventListener("click", getData);
function getData() {
  fetch("https://provinces.open-api.vn/api/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let local = data;
      console.log(local);
      let output = "<h2><center>Những nơi có thể đi</center><h2>";
      local.forEach(function (list) {
        output += `
                <div class="container">
                   <div class="card mt-4 bg-light">
                       <ul class="list-group">
                           <li class="list-group-item"><h2>Name: ${list.name}</h2></li>
                           <li class="list-group-item"><h2>Name: ${list.division_type}</h2></li>
                         
                       </ul>
                   </div>
                </div> `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active.popup')
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active.popup')
});
var data = document.getElementById('series').style.marginTop;