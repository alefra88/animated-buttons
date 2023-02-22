const $buttons = document.querySelectorAll("button"),
  $turbulence = document.querySelector("feTurbulence");

let verticalFrequency = 0.00001;
$turbulence.setAttribute("baseFrequency", verticalFrequency + "0.03");

const steps = 30,
  interval = 10;

$buttons.forEach(function (button) {
  button.addEventListener("mouseover", function () {
    verticalFrequency = 0.00001;
    for (i = 0; i < steps; i++) {
      setTimeout(function () {
        verticalFrequency += 0.009;
        $turbulence.setAttribute("baseFrequency", verticalFrequency + ".00001");
      }, i * interval);
    }
    setTimeout(function () {
      verticalFrequency = 0.00001;
      $turbulence.setAttribute("baseFrequency", verticalFrequency + ".00001");
    }, steps * interval);
  });
});
