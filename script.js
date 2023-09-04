const tabButtons = document.querySelectorAll(".tablink");

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    let TabName = this.dataset.tab;
    let TabContent = document.getElementById(TabName);
    let allTabContent = document.querySelectorAll(".tabcontent");
    let allTabButtons = document.querySelectorAll(".tablink");

    for (let k = 0; k < allTabContent.length; k++) {
      allTabContent[k].style.display = "none";
    }

    for (let f = 0; f < allTabContent.length; f++) {
      allTabButtons[f].classList.remove("active");
    }

    TabContent.style.display = "block";
    this.classList.add("active");
  });
}

document.querySelector(".tablink").click();
