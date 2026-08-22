const bulb = document.getElementById("bulb");
const string = document.getElementById("string");

let isOn = false;
let startY = 0;
let isDragging = false;

// Start pulling
string.addEventListener("mousedown", startPull);
string.addEventListener("touchstart", startPull);

// Handle dragging
document.addEventListener("mousemove", handleDrag);
document.addEventListener("touchmove", handleDrag);

// Stop pulling
document.addEventListener("mouseup", stopPull);
document.addEventListener("touchend", stopPull);

function startPull(event) {
  isDragging = true;
  startY = event.touches ? event.touches[0].clientY : event.clientY;
  string.style.cursor = "grabbing";
}

function handleDrag(event) {
  if (!isDragging) return;

  const currentY = event.touches ? event.touches[0].clientY : event.clientY;
  const distance = Math.min(Math.max(currentY - startY, 0), 100); // Limit stretch
  const scale = 1 - distance / 200;

  string.style.height = `${50 + distance}px`;
  string.style.transform = `scaleX(${scale})`;
}

function stopPull() {
  if (!isDragging) return;

  isDragging = false;
  string.style.cursor = "grab";

  // Reset string
  string.style.height = "50px";
  string.style.transform = "scaleX(1)";

  // Toggle bulb state
  isOn = !isOn;

  if (isOn) {
    bulb.classList.add("on");
    document.body.classList.add("bulb-on");
  } else {
    bulb.classList.remove("on");
    document.body.classList.remove("bulb-on");
  }
}