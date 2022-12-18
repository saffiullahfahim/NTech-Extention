// console.log("test");

// window.addEventListener("load", () => {
//   const ntechIcon = document.createElement("div");
//   ntechIcon.setAttribute("ntech", "iconDiv");
//   ntechIcon.innerHTML = "<img ntech='icon' src='https://ntechcomputer.github.io/icon.png' alt='NTech Icon'>"
//   document.body.appendChild(ntechIcon);
// });

const injectedFunction = () => {
  console.log("wow");
};

function getTitle() {
  chrome.runtime.sendMessage({date: new Date()});

  return document.title;
}

chrome.runtime.onMessage.addListener((...e) => {
  console.log(e)
})

async function getTabId() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// (async () => {
//   console.log(await getTabId())
// })()

// const tabId = getTabId();

const addScript = (tabId) => {
  chrome.scripting.executeScript(
    {
      target: { tabId },
      func: getTitle,
    },
    (...e) => {
      console.log(e);
    }
  );
};

const appendImg = (data) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: 1882934679 },
      func: (data) => {
        let img = document.createElement("img");
        img.src = data;
        document.body.appendChild(img);
        return img;
      },
      args: [data],
    },
    (...e) => {
      console.log(e);
    }
  );
};

const captureTab = (windId) => {
  chrome.tabs.captureVisibleTab(windId, {}, (data) => {
    console.log(data);
    appendImg(data);
  });
};

// chrome.tabs.onActivated.addListener((tab) => {
//   console.log(tab);
//   addScript(tab.tabId);
//   setTimeout(() => {
//     chrome.search.query({"text": "google.com", "tabId": tab.tabId}, (...e) => {
//       console.log(e)
//     })
//   }, 5000);
//   // setTimeout(() => {
//   //   captureTab(tab.windowId);
//   // }, 5000);
// });
