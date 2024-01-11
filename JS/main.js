console.log("JS OK");

const boxContainerElement = document.getElementById("boxContainer");

for (let i = 1; i <= 100; i++) {
  const boxElement = document.createElement("div.box");
  let boxText = i;
  let boxType;

  if (i % 3 == 0 && i % 5 == 0) {
    boxText = "FizzBuzz";
    boxType = "red";
  } else if (i % 3 == 0) {
    boxText = "Fizz";
    boxType = "green";
  } else if (i % 5 == 0) {
    boxText = "Buzz";
    boxType = "yellow";
  }

  boxElement.innerText = boxText;
  boxElement.className += `box ${boxType}`;

  boxContainerElement.append(boxElement);
}
