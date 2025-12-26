function goTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
}

window.addEventListener("load", () => {
  const middle = document.getElementById("home");
  middle.scrollIntoView({
    behavior: "auto",
    inline: "center",
    block: "nearest",
  });

  const bg = document.querySelector(".bg");
  const container = document.querySelector(".container");

  container.addEventListener("scroll", () => {
    const x = container.scrollLeft;
    bg.style.transform = `translate3d(${-x * 0.005}px, 0, 0) scale(1.05)`;
  });
});

const inputSpan = document.getElementById("input");
const output = document.querySelector(".termout");

let buffer = "";

window.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  if (e.key === "Backspace") {
    buffer = buffer.slice(0, -1);
    updateInput();
    return;
  }

  if (e.key === "Enter") {
    runCommand(buffer);
    buffer = "";
    updateInput();
    return;
  }

  if (e.key.length === 1) {
    buffer += e.key;
    updateInput();
  }
});

function updateInput() {
  inputSpan.textContent = buffer;
}
function runCommand(cmd) {
  if (!cmd.trim()) return;

  switch (cmd.toLowerCase()) {
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
    case "sudo rm -rf /":
      window.close();
      break;
    case "vi":
      printLine("yes my name IS a reference to the text editor");
      break;
    default:
      printLine(`command not found: ${cmd}`);
  }
}

function printLine(text) {
  const line = document.createElement("h2");
  line.classList.add("output");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}
