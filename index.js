document.addEventListener("DOMContentLoaded", () => {
  let screenWidth = window.innerWidth;
  let imgObj = document.getElementById("f__img");
  // const emailForm = document.getElementById('emailForm');
  const emailaddr = document.getElementById('emailadr');
  const msg = document.getElementById('msg');
  const submitBtn = document.getElementById('submitBtn');
  const dialog = document.getElementById('dialog');
  const dismissBtn = document.getElementById('dismissBtn');
  let flag = "";
  let successMsg = "Good to go!";
  let errorMsg = "Valid email required";

  window.onload = () => {
    screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      imgObj.src = "./assets/images/illustration-sign-up-mobile.svg";
      imgObj.alt = "Sign up mobile version";
    } else {
      imgObj.src = "./assets/images/illustration-sign-up-desktop.svg";
      imgObj.alt = "Sign up desktop version";
    }
  };

  window.onresize = () => {
    screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      imgObj.src = "./assets/images/illustration-sign-up-mobile.svg";
      imgObj.alt = "Sign up mobile version";
    } else {
      imgObj.src = "./assets/images/illustration-sign-up-desktop.svg";
      imgObj.alt = "Sign up desktop version";
    }
  };

  function checkValidEmail(email){
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(email === ""){
      return false;
    }
    
    if(reg.test(email) === false){
      return false;
    }

    return true;
  }

  emailaddr.addEventListener('keyup', function(){
    console.log(this.value);
    flag = checkValidEmail(this.value);
    // console.log('Flag: '+flag);
    if (!flag) {
      msg.innerHTML = errorMsg;
      msg.classList.add('errorMsg');
      this.classList.add('error');
      msg.classList.remove('successMsg');
      this.classList.remove('success');
    }
    else {
      msg.innerHTML = successMsg;
      msg.classList.add('successMsg');
      this.classList.add('success');
      msg.classList.remove('errorMsg');
      this.classList.remove('error');
    }
  })

  submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    flag = checkValidEmail(emailaddr.value);
    // console.log('Submit flag: '+flag);
    if (!flag) {
      msg.innerHTML = errorMsg;
      msg.classList.add('errorMsg');
      emailaddr.classList.add('error');
      msg.classList.remove('successMsg');
      emailaddr.classList.remove('success');
    }
    else {
      msg.innerHTML = successMsg;
      msg.classList.add('successMsg');
      emailaddr.classList.add('success');
      msg.classList.remove('errorMsg');
      emailaddr.classList.remove('error');
      //Send form data when success
      // TODO: send here
      // Delay 2s to show success state
      setTimeout(function(){
        dialog.classList.remove('hidden');
        document.querySelectorAll('.f__box').forEach(element => {
          element.classList.add('hidden');
        });
      }, 1500);
    }
  })

  dismissBtn.addEventListener('click', function(){
    setTimeout(function(){
      location.reload();
    }, 1000)
  });

});
