console.log("test");

window.addEventListener("load", () => {
  const ntechIcon = document.createElement("div");
  ntechIcon.setAttribute("ntech", "iconDiv");
  ntechIcon.innerHTML = "<img ntech='icon' src='https://ntechcomputer.github.io/icon.png' alt='NTech Icon'>"
  document.body.appendChild(ntechIcon);
});
