const content = document.querySelector(".text-container");
    const button = document.querySelector(".navigate-btn");
   
   
    // Show content and button after zoom animation
    setTimeout(() => {
        content.style.opacity = 1;
      button.style.opacity = 1;
      
    }, 1500);

    // Create bouncing balls
    function createBouncingCircles() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const radius = Math.min(window.innerWidth, window.innerHeight) / 4; // responsive radius
  const total = 10;

  for (let i = 0; i < total; i++) {
    const angle = (i / total) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const ball = document.createElement("div");
    ball.className = "small-circle";
    ball.style.position = "absolute";
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    document.body.appendChild(ball);
  }
}

createBouncingCircles();

// OPTIONAL: Recalculate on screen resize
window.addEventListener("resize", () => {
  document.querySelectorAll(".small-circle").forEach(ball => ball.remove());
  createBouncingCircles();
});
    

    createBouncingCircles();

    // Particle morphing logic
    const numbers = {
      1: [[4,0],[4,1],[4,2],[4,3],[4,4]],
      2: [[2,0],[3,0],[4,0],[4,1],[3,2],[2,3],[2,4],[3,4],[4,4]],
      3: [[2,0],[3,0],[4,1],[3,2],[4,3],[3,4],[2,4]],
      4: [[2,0],[2,1],[2,2],[3,2],[4,2],[4,0],[4,1],[4,3],[4,4]],
      5: [[2,0],[3,0],[4,0],[2,1],[2,2],[3,2],[4,3],[3,4],[2,4]],
      6: [[4,0],[3,0],[2,1],[2,2],[3,2],[4,3],[3,4],[2,4]],
      7: [[2,0],[3,0],[4,0],[4,1],[3,2],[3,3],[3,4]],
      8: [[3,0],[2,1],[4,1],[3,2],[2,3],[4,3],[3,4]],
      9: [[3,0],[2,1],[4,1],[3,2],[4,2],[4,3],[3,4]],
      10:[[2,0],[3,0],[4,0],[4,1],[4,2],[4,3],[4,4]] // represents "10"
    };

    const counterArea = document.getElementById("counterArea");

    function createDots(count = 40) {
      counterArea.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
        counterArea.appendChild(dot);
      }
    }

    function morphNumber(num) {
      const matrix = numbers[num];
      const gridSize = 5;
      const dotSize = 20;
      const offsetX = 40;
      const offsetY = 40;

      const dots = document.querySelectorAll(".dot");

      dots.forEach((dot, i) => {
      if (i < matrix.length) {
        const [x, y] = matrix[i];
        dot.style.left = `${x * dotSize + offsetX}px`;
        dot.style.top = `${y * dotSize + offsetY}px`;
        dot.style.opacity = 1;
      } else {
        dot.style.opacity = 0;
      }
    });
  }

    let current = 1;

    function startCounting() {
      button.style.display = "none";
      content.style.display = "none";
      counterArea.style.display = "block";
      createDots();

      const interval = setInterval(() => {
        morphNumber(current);
        current++;
        if (current >5) {
          clearInterval(interval);
          setTimeout(() => {
            window.location.href = "index.html";
          }, 1000);
        }
      }, 800);
    }

    button.addEventListener("click", startCounting);
   
    const text = document.getElementById('text');

    setTimeout(() => {
      text.classList.add('bulb');
    }, 2000);

    setTimeout(() => {
      text.classList.remove('bulb');
      text.classList.add('train');
    }, 5000);
