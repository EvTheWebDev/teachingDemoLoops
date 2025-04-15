// Step Zero: Make Our Start & Eat Buttons Work
let startButton = document.getElementById("startButton");
let eatButton = document.getElementById("eatButton");
startButton.addEventListener("click", fillEggs);
eatButton.addEventListener("click", eatCandy);

//Fill Egg Function
async function fillEggs() {
  // Step Zero: Turn off our start button
  startButton.disabled = true;

  //Step One: Find our Egg Carton
  const eggCartonDiv = document.getElementById("eggCarton");

  // Step Two: Make Our Eggs (Loop #1)
  let egg = 0;
  // While our eggs are less than 12, we will do this code.
  while (egg < 12) {
    const eggDiv = document.createElement("div");
    eggDiv.className = "egg";
    //Put egg in carton
    eggCartonDiv.appendChild(eggDiv);

    // Step Three: Fill Each Egg with Jelly Beans
    let jellyBeans = 0;
    //Do All this WHILE the bottom is still true (Line 39)
    do {
      //Make each jelly bean
      const jellyBean = document.createElement("span");
      jellyBean.className = "jelly-bean";

      // Add Jellybean Emoji to our egg
      jellyBean.textContent = "🍬";
      eggDiv.appendChild(jellyBean);

      //This is a little delay to show off the steps easier :)
      await new Promise((resolve) => setTimeout(resolve, 200));

      jellyBeans++;
    } while (jellyBeans < 9); //While we have less than 9 jelly beans, keep adding them

    //After we fill the egg, add a new one to the carton
    egg++;
  }


  
  //After we fill our eggs, we can turn on our start button again
  startButton.disabled = false;
}



//Eat Candy Function
async function eatCandy() {
  //Step One: Find our Egg Carton
  const eggCartonDiv = document.getElementById("eggCarton");
  // Step Two: Find Our Eggs
  const eggs = eggCartonDiv.getElementsByClassName("egg");

  // Step Three: Pick a Random Number of Eggs to Eat (1-3)
  let eggsToEat = Math.min(Math.floor(Math.random() * 3) + 1, eggs.length);
  let jellyBeansEaten = 0;

  // Step Four: Eat the Eggs (Loop #2)
  // For every egg, we will count every jelly bean as we eat them
  for (let eggCount = 0; eggCount < eggsToEat; eggCount++) {
    const egg = eggs[0];
    // Eat every jelly bean from the egg, then remove it
    jellyBeansEaten += egg.getElementsByClassName("jelly-bean").length;
    eggCartonDiv.removeChild(egg);
  }

  //Step Five: Show off how many jelly beans we ate

  alert(`I ate ${eggsToEat} egg(s), so I had ${jellyBeansEaten} Jelly beans!`);
}
