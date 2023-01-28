const icon = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#ED1C24;}
</style>
<g>
	<path d="M26.28,37.87l0.42,0.65c0.27,0.43,0.71,0.63,1.22,0.63h2.94c0.63,0,0.98-0.35,0.98-0.98v-4.6
		c-0.73,0.66-1.49,1.29-2.26,1.9C28.51,36.31,27.41,37.11,26.28,37.87z M30.86,11.66h-4.32c-0.63,0-0.98,0.35-0.98,0.98v14.33
		l-9.39-14.69c-0.27-0.43-0.71-0.63-1.22-0.63h-2.94c-0.63,0-0.98,0.35-0.98,0.98v25.53c0,0.19,0.03,0.35,0.09,0.49
		c0.59-0.01,1.19-0.07,1.76-0.16c1.52-0.24,3-0.65,4.43-1.19V23.83l6.43,10.06c1.16-0.79,2.27-1.64,3.35-2.52
		c1.67-1.37,3.28-2.85,4.76-4.44V12.64C31.84,12.01,31.49,11.66,30.86,11.66z"/>
	<path class="st0" d="M42.71,17.4c-0.21,0.88-0.5,1.73-0.84,2.53c-0.48,1.13-1.03,2.24-1.63,3.3c-2.18,3.89-5.08,7.36-8.41,10.34
		c-0.73,0.66-1.49,1.29-2.26,1.9c-1.07,0.84-2.17,1.64-3.3,2.4c-0.61,0.41-1.23,0.81-1.85,1.19c-3.75,2.32-7.8,4.27-12.15,5
		c-2.4,0.4-5.07,0.35-6.98-1.15c-1.99-1.56-2.64-4.36-2.28-6.86c0.36-2.44,1.51-4.72,2.71-6.84c-0.34,1.25-0.66,2.53-0.68,3.84
		c-0.02,1.37,0.32,2.8,1.22,3.84c1.17,1.36,3.01,1.79,4.85,1.77c0.59-0.01,1.19-0.07,1.76-0.16c1.52-0.24,3-0.65,4.43-1.19
		c2.27-0.86,4.41-2.04,6.43-3.42c1.16-0.79,2.27-1.64,3.35-2.52c1.67-1.37,3.28-2.85,4.76-4.44c2.09-2.26,3.92-4.75,5.27-7.53
		c0.12-0.24,0.23-0.48,0.34-0.72c0.97-2.17,1.64-4.62,1-6.91c-0.64-2.29-2.99-4.21-5.3-3.68c1.6-0.45,3.3-0.64,4.93-0.31
		C43.03,8.8,43.7,13.33,42.71,17.4z"/>
	<path class="st0" d="M19.61,11.22C19.61,11.23,19.61,11.23,19.61,11.22c2.56-1.5,5.28-2.8,8.05-3.84c2.74-1.04,5.66-1.69,8.6-1.53
		c2.51,0.14,5.17,0.76,6.86,2.77c0.76,0.9,1.23,2.12,1.41,3.28l0.26-1c0.17-0.63,0.28-1.29,0.28-1.95c0.03-3.84-3.66-5.1-6.85-5.22
		c-1.98-0.07-3.97,0.22-5.89,0.71C32.34,4.45,25.25,6.24,19.61,11.22z"/>
</g>
</svg>`;

class Ntech extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define("ntech-shadow", Ntech);
// customElements.define("ntech-button", Ntech);

(async () => {
  try {
    const script = "console.log(new Date())"; //await (await fetch("http://127.0.0.1:5500/wow.js")).text();
    console.log(script);
    const div = document.createElement("ntech-shadow");
    document.documentElement.appendChild(div);
    div.attachShadow({ mode: "open" });

    const ntech = document.querySelector("ntech-shadow").shadowRoot;

    const style = document.createElement("style");
    style.innerText = `
[ntech="iconDiv"] {
  padding: 7.5px;
  position: fixed;
  z-index: 999999999;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-sizing: initial;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 10px;
  border: 1px solid rgb(170, 170, 170);
  background-color: #fcfcfc;
}`;
    ntech.appendChild(style);

    const ntechIcon = document.createElement("div");
    ntechIcon.setAttribute("ntech", "iconDiv");
    ntechIcon.innerHTML = icon;
    ntechIcon.setAttribute("ondblclick", script);
    ntech.appendChild(ntechIcon);

    ntechIcon.style.top = "100px";
    ntechIcon.style.right = 0;

    console.log(chrome.storage.local)

    const wow = document.createElement("ntech");
    wow.addEventListener("ntechGet", async (event) => {
      console.log(event);
      console.log(await chrome.storage.local.get(event.detail));
    });

    wow.addEventListener("ntechPost", async (event) => {
      console.log(event);
      console.log(await chrome.storage.local.set(event.detail));
    });
    // wow.onclick = async () => {

    // }

    // wow.ondblclick = async () => {
    //   console.log(await chrome.storage.local.set({"test": new Date().toISOString()}))
    // }

    ntech.appendChild(wow);

    let mousePosition;
    let offset = [ntechIcon.offsetLeft, ntechIcon.offsetTop];
    let isDown = false;

    let defined = false;

    ntechIcon.addEventListener(
      "mousedown",
      function (e) {
        console.log("down");
        ntechIcon.style.cursor = "move";
        isDown = true;
        offset = [
          ntechIcon.offsetLeft - e.clientX,
          ntechIcon.offsetTop - e.clientY,
        ];
      },
      true
    );

    document.addEventListener(
      "mouseup",
      function () {
        ntechIcon.style.cursor = "";
        isDown = false;
      },
      true
    );

    document.addEventListener(
      "mousemove",
      function (event) {
        // event.preventDefault();
        if (isDown) {
          mousePosition = {
            x: event.clientX,
            y: event.clientY,
          };
          if (
            mousePosition.x + offset[0] >= 0 &&
            mousePosition.x + offset[0] + ntechIcon.offsetWidth <= innerWidth &&
            mousePosition.y + offset[1] >= 0 &&
            mousePosition.y + offset[1] + ntechIcon.offsetHeight <= innerHeight
          ) {
            ntechIcon.style.left = mousePosition.x + offset[0] + "px";
            ntechIcon.style.top = mousePosition.y + offset[1] + "px";
          }
          console.log(
            mousePosition.x + offset[0] >= 0 &&
              mousePosition.x + offset[0] + ntechIcon.offsetWidth <=
                screen.width &&
              mousePosition.y + offset[1] + ntechIcon.offsetHeight >= 0 &&
              mousePosition.y + offset[1] <= screen.height,
            mousePosition.x + offset[0],
            mousePosition.y + offset[1],
            ntechIcon.offsetLeft,
            ntechIcon.offsetTop
          );
        }
      },
      true
    );

    let init = {
      width: innerWidth,
      height: innerHeight,
    };

    window.addEventListener("resize", (e) => {
      e.preventDefault();
      if (ntechIcon.offsetLeft + ntechIcon.offsetWidth > innerWidth) {
        ntechIcon.style.left = "";
        ntechIcon.style.right = 0;
      }

      if (ntechIcon.offsetTop + ntechIcon.offsetHeight > innerHeight) {
        ntechIcon.style.bottom = "0";
        ntechIcon.style.top = "";
      }
      console.log(
        ntechIcon.offsetLeft + ntechIcon.offsetWidth,
        ntechIcon.offsetTop + ntechIcon.offsetHeight,
        innerWidth,
        innerHeight
      );
    });
  } catch (err) {
    console.error(err);
  }
})();

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log("Message from the console:", request.message);
//   sendResponse({ message: "Hello from the extension" });
// });

// window.addEventListener("message", function (event) {
//   console.log(event);
//   if (event.source === window && event.data.source === "console") {
//     chrome.runtime.sendMessage(event.data);
//   }
// });

// ntechIcon.ondblclick = (e) => {
//   let div = document.createElement("div");
//   div.innerHTML = `<popup-info
//   img="https://raw.githubusercontent.com/mdn/web-components-examples/main/popup-info-box-web-component/img/alt.png"
//   data-text="Your card validation code (CVC)
//   is an extra security feature — it is the last 3 or 4 numbers on the
//   back of your card."></popup-info>`
//   ntechIcon.appendChild(div);

//   // Create a class for the element
//   class PopUpInfo extends HTMLElement {
//     constructor() {
//       // Always call super first in constructor
//       super();

//       // Create a shadow root
//       const shadow = this.attachShadow({ mode: "open" });

//       // Create spans
//       const wrapper = document.createElement("span");
//       wrapper.setAttribute("class", "wrapper");

//       const icon = document.createElement("span");
//       icon.setAttribute("class", "icon");
//       icon.setAttribute("tabindex", 0);

//       const info = document.createElement("span");
//       info.setAttribute("class", "info");

//       // Take attribute content and put it inside the info span
//       const text = this.getAttribute("data-text");
//       info.textContent = text;

//       // Insert icon
//       let imgUrl;
//       if (this.hasAttribute("img")) {
//         imgUrl = this.getAttribute("img");
//       } else {
//         imgUrl = "img/default.png";
//       }

//       const img = document.createElement("img");
//       img.src = imgUrl;
//       icon.appendChild(img);
//       const script = `
//         let x = "123";
//         let y = '234567'
//         console.log(x)
//         console.log(y)
//       `
//       // Create some CSS to apply to the shadow dom
//       const style = document.createElement("style");
//       console.log(style.isConnected);

//       style.textContent = `
// .wrapper {
//   position: relative;
// }
// .info {
//   font-size: 0.8rem;
//   width: 200px;
//   display: inline-block;
//   border: 1px solid black;
//   padding: 10px;
//   background: white;
//   border-radius: 10px;
//   opacity: 0;
//   transition: 0.6s all;
//   position: absolute;
//   bottom: 20px;
//   left: 10px;
//   z-index: 3;
// }
// img {
//   width: 1.2rem;
// }
// .icon:hover + .info, .icon:focus + .info {
//   opacity: 1;
// }
// `;

//       // Attach the created elements to the shadow dom
//       shadow.appendChild(style);
//       const test = document.createElement("script");
//       test.innerText =  "console.log(1234567654)"
//       shadow.appendChild(test)

//       console.log(style.isConnected);
//       shadow.appendChild(wrapper);
//       wrapper.appendChild(icon);
//       wrapper.appendChild(info);
//       // wrapper.setAttribute("onclick", script)
//     }
//   }

//   // Define the new element
//   if(defined == false) {
//     customElements.define("popup-info", PopUpInfo);
//     defined = true;
//   }
// //   console.log(window)
// };

// ntechIcon.ondblclick = () => {
//   const script = `
//       const script = document.createElement("script");
//       script.src = "https://epaper.saffiullahfahim.me/js/main.js";
//       document.querySelector('[ntech="iconDiv"]').appendChild(script)
//       `
// }

// console.log(chrome)

// const moveMouse = (e) => {
//   console.log(e)
//   const {pageX: screenX, pageY: screenY} = e;
//   ntechIcon.style.top = screenY + "px";
//   ntechIcon.style.left = screenX + "px"
// }

// ntechIcon.onmousedown = (e) => {
//   console.log("down", e)
//   window.addEventListener("mousemove", moveMouse)
// }

// ntechIcon.onmouseleave = (e) => {
//   console.log("up", e)
//   window.removeEventListener("mousemove", moveMouse)
// }

// // In the sender tab
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, { message: 'Hello from the sender tab' }, function(response) {
//     console.log('Response from the receiver tab:', response);
//   });
// });

// // In the receiver tab
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log('Message from the sender tab:', request.message);
//   sendResponse({ message: 'Hello from the receiver tab' });
// });

if(window.location.href.indexOf('https://chat.openai.com') == 0){
  setTimeout(() => {
    // content.js
    chrome.runtime.sendMessage({ message: "hi time is " + new Date().toLocaleDateString() });
  }, 2000);
}


// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sendResponse, sender, request)
  console.log("Message from content script:", request.message);
});
