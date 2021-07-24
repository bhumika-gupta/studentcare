var submit = $('#submit-btn');
submit.on("click", addOn); 

var inputUser = $('.user');
var inputPass = $('.pass');

var contain= $('.fill');

function addOn(){
  event.preventDefault();
  contain.text("");
  
  var username=$('.user').val();

  contain.append(`<p class="welcome"> Welcome ${username}!</p>`),

  inputUser.val("");
  inputPass.val("");

}
