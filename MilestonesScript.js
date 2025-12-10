function updateBar(currentPoints, nextPoints) {
  document.getElementById("bar-fill").style.height = (currentPoints / nextPoints) * 100 + "%";
  document.getElementById("circle-text").textContent = nextPoints-currentPoints + " points to go!";
}

updateBar(70, 100);