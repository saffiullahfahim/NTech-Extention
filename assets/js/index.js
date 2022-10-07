const data = {
  birthPlaceCountry: {
    type: "select-",
    value: 1,
  },
  birthPlaceDiv: {
    type: "select-",
    value: 3,
  },
  birthPlaceDist: {
    type: "select",
    attr: {
      value: "16",
      "data-id": "16",
      "data-name-bn": "চাঁদপুর",
      "data-name-en": "Chandpur",
      "data-geo-level-id": "2",
      "data-parent-geo-id": "3",
    },
    display: "চাঁদপুর",
  },
  birthPlaceCityCorpCantOrUpazila: {
    type: "select",
    attr: {
      value: "130",
      "data-id": "130",
      "data-name-bn": "চাঁদপুর সদর",
      "data-name-en": "Chandpur Sadar",
      "data-geo-level-id": "3",
      "data-parent-geo-id": "16",
    },
    display: "চাঁদপুর সদর",
  },
  birthPlacePaurasavaOrUnion: {
    type: "select",
    attr: {
      value: "1464",
      "data-id": "1464",
      "data-name-bn": "বাগাদী",
      "data-name-en": "Baghadi",
      "data-geo-level-id": "5",
      "data-parent-geo-id": "130",
    },
    display: "বাগাদী",
  },
  birthPlaceWardInPaurasavaOrUnion: {
    type: "select--",
    value: `<option value="-1">---নির্বাচন করুন---</option><option value="26131" data-id="26131" data-name-bn="ওয়ার্ড - 1" data-name-en="Ward - 1" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 1</option><option value="26132" data-id="26132" data-name-bn="ওয়ার্ড - 2" data-name-en="Ward - 2" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 2</option><option value="26133" data-id="26133" data-name-bn="ওয়ার্ড - 3" data-name-en="Ward - 3" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 3</option><option value="26134" data-id="26134" data-name-bn="ওয়ার্ড - 4" data-name-en="Ward - 4" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 4</option><option value="26135" data-id="26135" data-name-bn="ওয়ার্ড - 5" data-name-en="Ward - 5" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 5</option><option value="26136" data-id="26136" data-name-bn="ওয়ার্ড - 6" data-name-en="Ward - 6" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 6</option><option value="26137" data-id="26137" data-name-bn="ওয়ার্ড - 7" data-name-en="Ward - 7" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 7</option><option value="26138" data-id="26138" data-name-bn="ওয়ার্ড - 8" data-name-en="Ward - 8" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 8</option><option value="26139" data-id="26139" data-name-bn="ওয়ার্ড - 9" data-name-en="Ward - 9" data-geo-level-id="13" data-parent-geo-id="1464">ওয়ার্ড - 9</option>`,
  },
};

const wordsListData = {
  0: { post: [], village: [] },
  26131: {
    post: [
      {
        bn: "সাহেব বাজার",
        en: "Shaheb Bazar",
        word: {
          en: "01",
          bn: "০১",
        },
      },
    ],
    village: [
      {
        en: "Bagadi",
        bn: "বাগাদী",
      },
    ],
  },
  26132: {
    post: [
      {
        bn: "সাহেব বাজার",
        en: "Shaheb Bazar",
        word: {
          en: "02",
          bn: "০২",
        },
      },
    ],
    village: [
      {
        en: "Bagadi",
        bn: "বাগাদী",
      },
    ],
  },
  26133: {
    post: [
      {
        bn: "সাহেব বাজার",
        en: "Shaheb Bazar",
        word: {
          en: "03",
          bn: "০৩",
        },
      },
    ],
    village: [
      {
        en: "West Shokdi",
        bn: "পশ্চিম সকদী",
      },
    ],
  },
  26134: {
    post: [
      {
        en: "Darussalam",
        bn: "দারুসসালাম",
        word: {
          en: "04",
          bn: "০৪",
        },
      },
    ],
    village: [
      {
        en: "Bagadi",
        bn: "বাগাদী",
      },
      {
        en: "Nizgastola",
        bn: "নিজগাছতলা",
      },
      {
        en: "Niz Gachtola",
        bn: "নিজ গাছতলা",
      },
    ],
  },
  26135: {
    post: [
      {
        en: "Darussalam",
        bn: "দারুসসালাম",
        word: {
          en: "05",
          bn: "০৫",
        },
      },
    ],
    village: [
      {
        en: "Niz Gastola",
        bn: "নিজগাছতলা",
      },
      {
        en: "Nizgastola",
        bn: "নিজগাছতলা",
      },
      {
        en: "Islampur Gastola",
        bn: "ইসলামপুর গাছতলা",
      },
      {
        en: "Mohadeb Gastola",
        bn: "মহাদেব গাছতলা",
      },
    ],
  },
  26136: {
    post: [
      {
        en: "Bagra Bazar",
        bn: "বাঘরা বাজার",
        word: {
          en: "06",
          bn: "০৬",
        },
      },
    ],
    village: [
      {
        en: "Nanupur",
        bn: "নানুপুর",
      },
    ],
  },
  26137: {
    post: [
      {
        en: "Bagra Bazar",
        bn: "বাঘরা বাজার",
        word: {
          en: "07",
          bn: "০৭",
        },
      },
    ],
    village: [
      {
        en: "Bagadi",
        bn: "বাগাদী",
      },
      {
        en: "Sobanpur",
        bn: "ছোবানপুর",
      },
      {
        en: "Sobanpur",
        bn: "ছোবহানপুর",
      },
    ],
  },
  26138: {
    post: [
      {
        en: "Bagra Bazar",
        bn: "বাঘরা বাজার",
        word: {
          en: "08",
          bn: "০৮",
        },
      },
    ],
    village: [
      {
        en: "Bagadi",
        bn: "বাগাদী",
      },
      {
        en: "South Bagadi",
        bn: "দক্ষিণ বাগাদী",
      },
      {
        en: "Pakkhidiya",
        bn: "পক্ষীদিয়া",
      },
    ],
  },
  26139: {
    post: [
      {
        en: "Bagra Bazar",
        bn: "বাঘরা বাজার",
        word: {
          en: "09",
          bn: "০৯",
        },
      },
    ],
    village: [
      {
        en: "Brahman Sakhua",
        bn: "ব্রাহ্মণ সাখুয়া",
      },
      {
        en: "Bagadi",
        bn: "বাগাদী",
      },
    ],
  },
};

const testFun = (data) => {
  console.log(data)
}

let b  = document.querySelector("img");
console.log(b)
b.onclick = async () => {
  console.log(1234)
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: testFun,
      args: [123456],
    },
    (d) => {
      //window.close();
    }
  );
}

// <option value="1464" data-id="1464" data-name-bn="বাগাদী" data-name-en="Baghadi" data-geo-level-id="5" data-parent-geo-id="130">বাগাদী</option>
/*
const inlineList = [
  "colDist",
  "colCityCorpCantOrUpazila",
  "colPaurasavaOrUnion",
  "colWardInPaurasavaOrUnion",
];

let form = document.querySelector("form");
let button = document.querySelector("button");
let words = document.querySelector("#word_no");
let post_office = document.querySelector("#post_office");
let village = document.querySelector("#village");

words.onchange = () => {
  if (words.value == "0") {
    post_office.innerHTML = `<option value="0"></option>`;
    village.innerHTML = `<option value="0"></option>`;
  } else {
    let postOffice = wordsListData[words.value].post;
    let options = "";
    let index = 0;
    for (let o of postOffice) {
      options += `<option bn="${o.bn}" value="${index}">${o.en}</option>`;
      index++;
    }
    post_office.innerHTML = `${options}`;

    let Village = wordsListData[words.value].village;
    options = "";
    index = 0;
    for (let o of Village) {
      options += `<option bn="${o.bn}" value="${index}">${o.en}</option>`;
      index++;
    }
    village.innerHTML = `${options}`;
  }
};

form.onsubmit = async (e) => {
  e.preventDefault();
  button.disabled = true;
  button.innerText = "Processing..";

  data.personFirstNameEn = {
    type: "input",
    value: form.first_name.value.toUpperCase(),
  };
  data.personLastNameEn = {
    type: "input",
    value: form.last_name.value.toUpperCase(),
  };
  if (form.first_name.value) {
    let input = first_name.value;
    let x = await fetch(
      `https://inputtools.google.com/request?text=${input}&itc=bn-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`
    );
    x = await x.json();
    x = x[1][0];
    data.personFirstNameBn = {
      type: "input",
      value: x[1][0],
    };
  }

  if (form.last_name.value) {
    let input = last_name.value;
    let x = await fetch(
      `https://inputtools.google.com/request?text=${input}&itc=bn-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`
    );
    x = await x.json();
    x = x[1][0];
    data.personLastNameBn = {
      type: "input",
      value: x[1][0],
    };
  }

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: submitFuntion,
      args: [
        data,
        inlineList,
        words.value,
        wordsListData[words.value].post[Number(post_office.value)]
          ? wordsListData[words.value].post[Number(post_office.value)]
          : "",
        wordsListData[words.value].village[Number(village.value)]
          ? wordsListData[words.value].village[Number(village.value)]
          : "",
      ],
    },
    (d) => {
      console.log(d);
      button.disabled = false;
      button.innerText = "Submit";
      form.reset();
      post_office.innerHTML = `<option value="0"></option>`;
      village.innerHTML = `<option value="0"></option>`;
    }
  );
};

const submitFuntion = (data, inlineList, words, post_office, village) => {
  //console.log(data);
  for (let x in data) {
    let dom = document.getElementById(x);
    if (data[x].type == "input" || data[x].type == "select-") {
      dom.value = data[x].value;
    } else if (data[x].type == "select") {
      let atr = "";
      let attrs = data[x].attr;
      for (let i in attrs) {
        atr += `${i}="${attrs[i]}"`;
      }
      dom.innerHTML += `<option ${atr} >${data[x].display}</option>`;
      dom.value = data[x].attr.value;
    } else if (data[x].type == "select--") {
      dom.innerHTML = data[x].value;
      if (words != 0) {
        dom.value = words;
      }
      if (post_office) {
        document.querySelector(
          "#birthPlacePostOfc"
        ).value = `ডাকঘরঃ ${post_office.bn}, ওয়ার্ড নংঃ ${post_office.word.bn} `;
        document.querySelector(
          "#birthPlacePostOfcEn"
        ).value = `POST OFFICE: ${post_office.en.toUpperCase()}, WORD NO: ${post_office.word.en.toUpperCase()} `;
      }
      if (village) {
        document.querySelector(
          "#birthPlaceVilAreaTownBn"
        ).value = `গ্রামঃ ${village.bn.toUpperCase()}, `;
        document.querySelector(
          "#birthPlaceVilAreaTownEn"
        ).value = `Village: ${village.en.toUpperCase()}, `;
      }

      document.querySelector("#birthPlaceHouseRoadBn").value = " ";
      document.querySelector("#birthPlaceHouseRoadEn").value = " ";
    }
  }

  for (let x of inlineList) {
    document.querySelector(`.${x}`).style.display = "";
  }
};
*/