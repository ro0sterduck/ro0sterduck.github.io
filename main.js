function goTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
}

const inputSpan = document.getElementById("input");
const output = document.querySelector(".termout");

let buffer = "";

window.addEventListener("keydown", (kbdpress) => {
  if (kbdpress.ctrlKey || kbdpress.metaKey || kbdpress.altKey) return;

  if (kbdpress.key === "Backspace") {
    buffer = buffer.slice(0, -1);
    updateInput();
    return;
  }

  if (kbdpress.key === "Enter") {
    runCommand(buffer);
    buffer = "";
    updateInput();
    return;
  }

  if (kbdpress.key.length === 1) {
    buffer += kbdpress.key;
    updateInput();
  }
});

function updateInput() {
  inputSpan.textContent = buffer;
}
function runCommand(cmd) {
  if (!cmd.trim()) return;

  const parts = cmd.trim().split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (command) {
    case "help":
      printLine("no help here, best of luck :)");
      break;
    case "hi":
      printLine("heyo!");
      break;
    case "pwd":
      printLine("/home/vi");
      break;
    case "clear":
      output.innerHTML = "";
      break;
    case "sudo":
      if (args.join(" ") === "rm -rf /") {
        window.close();
      } else {
        printLine("nice try");
      }
      break;
    case "vi":
      printLine("yes my name IS a reference to the text editor");
      break;
    case "neofetch":
      printLine("pretend i put cool ascii art here");
      break;
    case "fastfetch":
      printLine("pretend i put cool ascii art here");
      break;
    case "hyfetch":
      printLine("pretend i put cool ascii art here (but trans)");
      break;
    case "screenfetch":
      printLine("pretend i put cool ascii art here");
      break;
    case "fortune":
      printLine("pretend i made a witty joke here");
      break;
    case "cd":
      printLine("nah");
      break;
    case "ls":
      printLine("nah");
      break;
    case "echo":
      printLine(args.join(" "));
      break;
    case "cat":
      printLine("nah");
      break;
    case "rm":
      printLine("nah");
      break;
    case "mv":
      printLine("nah");
      break;
    case "cp":
      printLine("nah");
      break;
    case "mkdir":
      printLine("nah");
      break;
    case "touch":
      printLine("nah");
      break;
    case "pwd":
      printLine("/home/vi");
      break;
    case "whoami":
      printLine("vi (probably not tho)");
      break;
    default:
      printLine(`command not found: ${command}`);
  }
}

function printLine(text) {
  const line = document.createElement("h2");
  line.classList.add("output");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

window.addEventListener("load", () => {
  const blog = document.getElementById("blog");
  const dvd = document.getElementById("dvd");
  const middle = document.getElementById("home");
  middle.scrollIntoView({
    behavior: "auto",
    inline: "center",
    block: "nearest",
  });

  let x = 20;
  let y = 20;
  let dx = 1.5;
  let dy = 1.5;

  function bounds() {
    return {
      maxX: blog.clientWidth - dvd.offsetWidth,
      maxY: blog.clientHeight - dvd.offsetHeight,
    };
  }

  let b = bounds();

  window.addEventListener("resize", () => {
    b = bounds();
  });

  function animate() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= b.maxX) dx *= -1;
    if (y <= 0 || y >= b.maxY) dy *= -1;

    x = Math.max(0, Math.min(x, b.maxX));
    y = Math.max(0, Math.min(y, b.maxY));

    dvd.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
  }
  parallaxStart();
  animate();
});
function scaleApp() {
  if (window.innerWidth >= 768) {
    const app = document.getElementById("global");
    const scale = Math.min(window.innerWidth / 2560, window.innerHeight / 1300);

    app.style.transform = `scale(${scale})`;
  }
}

window.addEventListener("resize", scaleApp);
window.addEventListener("load", scaleApp);

const bg = document.getElementById("bg");
const container = document.getElementById("container");

let limiter = false;

container.addEventListener("scroll", () => {
  if (!limiter) {
    requestAnimationFrame(() => {
      const scrollX = container.scrollLeft;
      const speed = 0.0025;
      bg.style.transform = `scale(${1.25}) translateX(${-scrollX * speed + 10}px)`;
      limiter = false;
    });
    limiter = true;
  }
});
