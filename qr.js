let obj = {
  name: "Ntech Computer Desktop",
  branch: "Bagadi",
  verifiedBy: "Fahim",
  verifiedTime: new Date().toISOString(),
  expired: new Date().toISOString(),
  id: "xor3ereofhaserweorwersdnowerofnaafljsd",
};

const qrCode = new QRCodeStyling({
  width: 500,
  height: 500,
  data: window.btoa(JSON.stringify(obj)),
  margin: 0,
  qrOptions: {
    typeNumber: "0",
    mode: "Byte",
    errorCorrectionLevel: "Q",
  },
  imageOptions: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
  dotsOptions: { type: "dots", color: "#000000" },
  backgroundOptions: { color: "#ffffff" },
  image:
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0OCA0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDggNDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRUQxQzI0O30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBkPSJNMjYuMjgsMzcuODdsMC40MiwwLjY1YzAuMjcsMC40MywwLjcxLDAuNjMsMS4yMiwwLjYzaDIuOTRjMC42MywwLDAuOTgtMC4zNSwwLjk4LTAuOTh2LTQuNgoJCWMtMC43MywwLjY2LTEuNDksMS4yOS0yLjI2LDEuOUMyOC41MSwzNi4zMSwyNy40MSwzNy4xMSwyNi4yOCwzNy44N3ogTTMwLjg2LDExLjY2aC00LjMyYy0wLjYzLDAtMC45OCwwLjM1LTAuOTgsMC45OHYxNC4zMwoJCWwtOS4zOS0xNC42OWMtMC4yNy0wLjQzLTAuNzEtMC42My0xLjIyLTAuNjNoLTIuOTRjLTAuNjMsMC0wLjk4LDAuMzUtMC45OCwwLjk4djI1LjUzYzAsMC4xOSwwLjAzLDAuMzUsMC4wOSwwLjQ5CgkJYzAuNTktMC4wMSwxLjE5LTAuMDcsMS43Ni0wLjE2YzEuNTItMC4yNCwzLTAuNjUsNC40My0xLjE5VjIzLjgzbDYuNDMsMTAuMDZjMS4xNi0wLjc5LDIuMjctMS42NCwzLjM1LTIuNTIKCQljMS42Ny0xLjM3LDMuMjgtMi44NSw0Ljc2LTQuNDRWMTIuNjRDMzEuODQsMTIuMDEsMzEuNDksMTEuNjYsMzAuODYsMTEuNjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDIuNzEsMTcuNGMtMC4yMSwwLjg4LTAuNSwxLjczLTAuODQsMi41M2MtMC40OCwxLjEzLTEuMDMsMi4yNC0xLjYzLDMuM2MtMi4xOCwzLjg5LTUuMDgsNy4zNi04LjQxLDEwLjM0CgkJYy0wLjczLDAuNjYtMS40OSwxLjI5LTIuMjYsMS45Yy0xLjA3LDAuODQtMi4xNywxLjY0LTMuMywyLjRjLTAuNjEsMC40MS0xLjIzLDAuODEtMS44NSwxLjE5Yy0zLjc1LDIuMzItNy44LDQuMjctMTIuMTUsNQoJCWMtMi40LDAuNC01LjA3LDAuMzUtNi45OC0xLjE1Yy0xLjk5LTEuNTYtMi42NC00LjM2LTIuMjgtNi44NmMwLjM2LTIuNDQsMS41MS00LjcyLDIuNzEtNi44NGMtMC4zNCwxLjI1LTAuNjYsMi41My0wLjY4LDMuODQKCQljLTAuMDIsMS4zNywwLjMyLDIuOCwxLjIyLDMuODRjMS4xNywxLjM2LDMuMDEsMS43OSw0Ljg1LDEuNzdjMC41OS0wLjAxLDEuMTktMC4wNywxLjc2LTAuMTZjMS41Mi0wLjI0LDMtMC42NSw0LjQzLTEuMTkKCQljMi4yNy0wLjg2LDQuNDEtMi4wNCw2LjQzLTMuNDJjMS4xNi0wLjc5LDIuMjctMS42NCwzLjM1LTIuNTJjMS42Ny0xLjM3LDMuMjgtMi44NSw0Ljc2LTQuNDRjMi4wOS0yLjI2LDMuOTItNC43NSw1LjI3LTcuNTMKCQljMC4xMi0wLjI0LDAuMjMtMC40OCwwLjM0LTAuNzJjMC45Ny0yLjE3LDEuNjQtNC42MiwxLTYuOTFjLTAuNjQtMi4yOS0yLjk5LTQuMjEtNS4zLTMuNjhjMS42LTAuNDUsMy4zLTAuNjQsNC45My0wLjMxCgkJQzQzLjAzLDguOCw0My43LDEzLjMzLDQyLjcxLDE3LjR6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkuNjEsMTEuMjJDMTkuNjEsMTEuMjMsMTkuNjEsMTEuMjMsMTkuNjEsMTEuMjJjMi41Ni0xLjUsNS4yOC0yLjgsOC4wNS0zLjg0YzIuNzQtMS4wNCw1LjY2LTEuNjksOC42LTEuNTMKCQljMi41MSwwLjE0LDUuMTcsMC43Niw2Ljg2LDIuNzdjMC43NiwwLjksMS4yMywyLjEyLDEuNDEsMy4yOGwwLjI2LTFjMC4xNy0wLjYzLDAuMjgtMS4yOSwwLjI4LTEuOTVjMC4wMy0zLjg0LTMuNjYtNS4xLTYuODUtNS4yMgoJCWMtMS45OC0wLjA3LTMuOTcsMC4yMi01Ljg5LDAuNzFDMzIuMzQsNC40NSwyNS4yNSw2LjI0LDE5LjYxLDExLjIyeiIvPgo8L2c+Cjwvc3ZnPgo=",
  dotsOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#6a1a4c",
      color2: "#6a1a4c",
      rotation: "0",
    },
  },
  cornersSquareOptions: { type: "extra-rounded", color: "#000000" },
  cornersSquareOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0",
    },
  },
  cornersDotOptions: { type: "dot", color: "#000000" },
  cornersDotOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0",
    },
  },
  backgroundOptionsHelper: {
    colorType: { single: true, gradient: false },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0",
    },
  },
});

qrCode.append(document.getElementById("canvas"));
