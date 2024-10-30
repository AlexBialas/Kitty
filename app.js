document.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector("header");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");

  btn1.addEventListener("click", () => {
    head.style.background = "url('cat1.png') no-repeat center center / cover";
    btn1.style.border = "ridge";
    btn2.style.border = "none";
    btn3.style.border = "none";
    btn4.style.border = "none";
  });
  btn2.addEventListener("click", () => {
    head.style.background = "url('cat2.png') no-repeat center center / cover";
    btn1.style.border = "none";
    btn2.style.border = "ridge";
    btn3.style.border = "none";
    btn4.style.border = "none";
  });
  btn3.addEventListener("click", () => {
    head.style.background = "url('cat3.png') no-repeat center center / cover";
    btn1.style.border = "none";
    btn2.style.border = "none";
    btn3.style.border = "ridge";
    btn4.style.border = "none";
  });
  btn4.addEventListener("click", () => {
    head.style.background = "url('cat4.png') no-repeat center center / cover";
    btn1.style.border = "none";
    btn2.style.border = "none";
    btn3.style.border = "none";
    btn4.style.border = "ridge";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const head = document.querySelector("header");
  const buttons = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
  ];
  const images = ["cat1.png", "cat2.png", "cat3.png", "cat4.png"];
  let currentIndex = 0;

  const updateBackground = () => {
    head.style.background = `url('${images[currentIndex]}') no-repeat center center / cover`;

    buttons.forEach((btn) => (btn.style.border = "none"));

    buttons[currentIndex].style.border = "ridge";

    currentIndex = (currentIndex + 1) % images.length;
  };

  setInterval(updateBackground, 3000);

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentIndex = index;
      updateBackground();
    });
  });

  updateBackground();
});
