let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time;
let usertimehide = document.querySelector(".usertime");
let usernamehide = document.querySelector(".username");
let userpointhide = document.querySelector(".userpoints");
let high = document.querySelector(".high");
let medium = document.querySelector(".medium");
let low = document.querySelector(".low");
let belowlow = document.querySelector(".belowlow");
sessionStorage.clear();

high.style.display = "none";
medium.style.display = "none";
low.style.display = "none";
belowlow.style.display = "none";

if (user_points >= 29 && user_points <= 35) {
  console.log(" 29-35");
  high.style.display = "block";
} else if (user_points >= 15 && user_points <= 27) {
  console.log(" 15-27");
  medium.style.display = "block";
} else if (user_points >= 10 && user_points <= 14) {
  console.log(" 10-14");
  low.style.display = "block";
} else if (user_points <= 9) {
  console.log(" you are 9 and below");
  belowlow.style.display = "block";
}

usertimehide.style.display = "none";
usernamehide.style.display = "none";
userpointhide.style.display = "none";
