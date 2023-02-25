document.getElementById('apply-bg').addEventListener('click', function(){
   const freines = document.getElementsByClassName('friend');
  for(const friend of freines){
    friend.style.backgroundColor = 'purple';
  }

})

document.getElementById('center-friend').addEventListener('click', function(){
const thrid = document.getElementById('thrid-friend');
thrid.style.textAlign = 'center';
})

document.getElementById('new-div').addEventListener('click', function(){
 const conterFreines = document.getElementById('friends');
 const freine = document.createElement('div');
 freine.innerHTML = `
 <h3> somethein is great </h3>
 <p> my function is a gerat </p>
 `
 conterFreines.appendChild(freine);
})

