document.querySelector(".moon").addEventListener("click", function () {
    toggleDarkMode(true);
});

document.querySelector(".sun").addEventListener("click", function () {
    toggleDarkMode(false);
});

function toggleDarkMode(isDarkMode) {
    const body = document.querySelector('.body');
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");
    const btnGroup = document.querySelector(".btn-group");
    const heading = document.querySelectorAll(".heading");
    const home = document.querySelector('.home');
    const tabs = document.querySelectorAll('.tab');
    const titleSpans = document.querySelectorAll('.title-span');
    const foodTexts = document.querySelectorAll('.food-text');
    const footer=document.querySelector('.end');
    const recipe=document.querySelectorAll('.recipe');
    const description=document.querySelectorAll('.description');
    if (isDarkMode) {
        body.classList.remove("light");
        body.classList.add("dark");
        sun.classList.add("black");
        moon.classList.add("white");
        btnGroup.classList.add("white-border");
        home.style.color = '#6D9886';
        heading.forEach(heading =>{
            heading.style.color = "#F2E7D5";
        });
        titleSpans.forEach(span => {
            span.style.color = "#6D9886";
        });
        foodTexts.forEach(text => {
            text.style.color = "#6D9886";
        });
        tabs.forEach(tab => {
            tab.style.color = '#F2E7D5';
        });
        recipe.forEach(recipe =>{
            recipe.style.backgroundColor='#EEEEEE';
        });
        description.forEach(description =>{
            description.style.color='#76ABAE';
        })
        footer.style.backgroundColor='#6D9886';
       
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        sun.classList.remove("black");
        moon.classList.remove("white");
        btnGroup.classList.remove("white-border");
        home.style.color = '#AFD198';
        heading.forEach(heading =>{
            heading.style.color = "rgb(219, 169, 121)";
        });
        titleSpans.forEach(span => {
            span.style.color = "#AFD198";
        });
        foodTexts.forEach(text => {
            text.style.color = "#AFD198";
        });
        tabs.forEach(tab => {
            tab.style.color = 'rgb(219, 169, 121)';
        });
        recipe.forEach(recipe =>{
            recipe.style.backgroundColor='#DAC0A3';
        });
        description.forEach(description =>{
            description.style.color='black';
        })
        footer.style.backgroundColor='#AFD198';
    }

    // Add event listeners for hover effects
    home.addEventListener("mouseenter", function () {
        home.style.color = "purple";
    });
    home.addEventListener("mouseleave", function () {
        home.style.color = isDarkMode ? "#6D9886" : "#AFD198";
    });

    tabs.forEach(tab => {
        tab.addEventListener("mouseenter", function () {
            tab.style.color = 'purple';
        });
        tab.addEventListener("mouseleave", function () {
            tab.style.color = isDarkMode ? 'rgb(242, 231, 213)' : 'rgb(219, 169, 121)';
        });
    });
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

let slideInterval;

function startSlideshow() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); 
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("recipe");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
}

startSlideshow();  


function myFunction() {
    document.querySelector("#myDropDown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



//   here 
var icons = document.querySelectorAll('.add');
icons.forEach(function(icon) {
    icon.onclick = function() {
        icon.classList.toggle('active');
    }
});

//button
// var mobile=document.querySelector('.mobile');
// if(mobile.style.display='block'){
//   document.querySelector('.tab-list').classList.add('hide');
// }

// mobile.addEventListener('click',()=>{
//   document.querySelector('.middle-container').classList.toggle('margin');
//   document.querySelector('.tab-list').classList.toggle('hide');
// })
