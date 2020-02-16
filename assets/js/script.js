document.addEventListener("DOMContentLoaded", function(){
  console.log('loaded')
  window.onload= function(e){
    let click = document.getElementById('sub')
    click.onclick = function(){
    let your_name = document.getElementById('name').value;
    let your_email = document.getElementById('email').value;
    let your_phone = document.getElementById('phone').value;
    let your_subject = document.getElementById('subject').value;
    console.log(('  your name is ' + your_name) +( '  your email is ' + your_email) + ('  your_phone is '+ your_phone))
    event.preventDefault();
    }   
}
})