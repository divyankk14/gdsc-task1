var tl = gsap.timeline();

tl.from(
  ".container, .container>.nm , .container>#gmail , .container>#password,.container>#submitButtonn",
  {
    y: -100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.1,
  }
);
gsap.from(".drops>drop-1 ", {
  y: 100,
  opacity: 0,
  easing: "easeInOutQuad",
  stagger: 0.3,
});
gsap.from(".drops>.drop-2", {
  x: -600,
  duration: 2, 
  // delay: 1,
  opacity: 0,
  easing: "easeInOutQuad",
});
gsap.from(".drops>.drop-3", {
  x: 300,
  duration: 2,
  // delay: 1,
  opacity: 0,
  easing: "easeInOutQuad",
});
gsap.from(".drops>.drop-4", {
  x: 300,
  duration: 2,
  // delay: 1,
  opacity: 0,
  easing: "easeInOutQuad",
});
gsap.from(".drops>.drop-5", {
  y: -100,
  duration: 2,
  // delay:1,
  opacity: 0,
  easing: "easeInOutQuad",
});
gsap.from(".drops>.drop-6", {
  y: -100,
  duration: 2,
  // delay: 1,
  opacity: 0,
  easing: "easeInOutQuad",
});

document.getElementById("submitButton").addEventListener("click", function () {
  var nameInput = document.querySelector(".nm");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  if (name === "") {
    alert("Please enter your name.");
    nameInput.focus();
    return;
  }

  if (email === "") {
    alert("Please enter your valid email id .");
    emailInput.focus();
    return;
  }

  if (password === "") {
    alert("Please enter your password.");
    passwordInput.focus();
    return;
  }
});
