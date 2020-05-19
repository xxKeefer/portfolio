//get clipboard access perms
navigator.permissions.query({
  name: 'clipboard-read',
  name: 'clipboard-write'
});

//target clip on DOM
const email = document.querySelector('.contact-email');
email.addEventListener('click', clip);
email.addEventListener('', clip);

function clip(){
  let clipable = document.querySelector('.clipable');
  navigator.clipboard.writeText(clipable.textContent)
  clipable.innerHTML = "Copied to the clipboard!"
  setTimeout( resetHTML, 3000)
};

function resetHTML(){
  let clipable = document.querySelector('.clipable');
  clipable.innerHTML = "xxkeefer.code@gmail.com"
}
