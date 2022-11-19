// import { foo } from "#test";
// console.log(foo)

// fetch("this is test")
//   .then((res) => res.blob())
//   .then((re) => console.log(re));

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const files = {
  "dom.js": `const DOM = {
    meta: {
      developer: {
        name: "Saffiullah Fahim",
        profile: "https://github.com/saffiullahfahim",
      },
    },
    version: "1.0.0",
    node: 0,
    rendered: false,
    createElement: (element = "div", childrens = [], attributes = {}) => {
      if (attributes.constructor.toString().indexOf("Object") >= 0) {
        for (let x in attributes) {
          if (attributes[x].constructor.toString().indexOf("Array") < 0) {
            attributes[x] = String(attributes[x]).split(" ");
          }
        }
      } else attributes = {};
      const object = {
        _name: element,
        _childrens:
          childrens.constructor.toString().indexOf("Array") >= 0
            ? childrens
            : [childrens],
        _attributes: attributes,
        _reuse: false,
        _ichildrens:
          childrens.constructor.toString().indexOf("Array") >= 0
            ? childrens
            : [childrens],
        _iattributes: { ...attributes },
        append(...childrens) {
          this._childrens = this._childrens.concat(childrens);
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            this._ichildrens = this._ichildrens.concat(childrens);
          }
          return this;
        },
        setChildren(childrens) {
          this._childrens =
            childrens.constructor.toString().indexOf("Array") >= 0
              ? childrens
              : [childrens];
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            this._ichildrens =
              childrens.constructor.toString().indexOf("Array") >= 0
                ? childrens
                : [childrens];
          }
          return this;
        },
        getChildren(children) {
          return this._childrens[children] ? this._childrens[children] : "";
        },
        removeChildren(children) {
          let arr = [...this._childrens];
          this._childrens = arr
            .slice(0, children)
            .concat(arr.slice(children + 1, arr.length));
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            arr = [...this._ichildrens];
            this._ichildrens = arr
              .slice(0, children)
              .concat(arr.slice(children + 1, arr.length));
          }
          return this;
        },
        insert(start, ...children) {
          let arr = [...this._childrens];
          this._childrens = [
            ...arr.slice(0, start),
            ...children,
            ...arr.slice(start, arr.length),
          ];
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if ((!this._rendered, !DOM.rendered)) {
            arr = [...this._ichildrens];
            this._ichildrens = [
              ...arr.slice(0, start),
              ...children,
              ...arr.slice(start, arr.length),
            ];
          }
          return this;
        },
        removeElement(element) {
          let arr = [...this._childrens];
          for (let children = 0; children < arr.length; children++) {
            if (arr[children].constructor.toString().indexOf("Object") >= 0) {
              if (arr[children]._node == element._node) {
                this._childrens = arr
                  .slice(0, children)
                  .concat(arr.slice(children + 1, arr.length));
              } else {
                arr[children].removeElement(element);
              }
            }
          }
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            arr = [...this._ichildrens];
            for (let children = 0; children < arr.length; children++) {
              if (arr[children].constructor.toString().indexOf("Object") >= 0) {
                if (arr[children]._node == element._node) {
                  this._ichildrens = arr
                    .slice(0, children)
                    .concat(arr.slice(children + 1, arr.length));
                } else {
                  arr[children].removeElement(element);
                }
              }
            }
          }
          return this;
        },
        addAttribute(key, ...values) {
          if (this._attributes[key]) {
            this._attributes[key] = [...this._attributes[key], ...values];
          } else {
            this._attributes[key] = values;
          }
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            if (this._iattributes[key]) {
              this._iattributes[key] = [...this._iattributes[key], ...values];
            } else {
              this._iattributes[key] = values;
            }
          }
          return this;
        },
        removeAttribute(...keys) {
          for (let x of keys) {
            delete this._attributes[x];
          }
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            for (let x of keys) {
              delete this._iattributes[x];
            }
          }
          return this;
        },
        changeAttribute(key, ...values) {
          if (this._attributes[key]) {
            this._attributes[key] = [...values];
          } else {
            this._attributes[key] = values;
          }
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            if (this._iattributes[key]) {
              this._iattributes[key] = [...values];
            } else {
              this._iattributes[key] = values;
            }
          }
          return this;
        },
        changeAttributeN(key, ...values) {
          if (this._attributes[key]) {
            this._attributes[key] = [...values];
          } else {
            this._attributes[key] = values;
          }
          if (!this._rendered && !DOM.rendered) {
            if (this._iattributes[key]) {
              this._iattributes[key] = [...values];
            } else {
              this._iattributes[key] = values;
            }
          }
          return this;
        },
        setAttribute(attributes) {
          if (attributes.constructor.toString().indexOf("Object") >= 0) {
            for (let x in attributes) {
              if (attributes[x].constructor.toString().indexOf("Array") < 0) {
                attributes[x] = String(attributes[x]).split(" ");
              }
            }
          } else attributes = {};
          this._attributes = attributes;
          if (this._rendered && !this._reuse) {
            DOM.rerender(this);
          } else if (!this._rendered && !DOM.rendered) {
            this._iattributes = { ...attributes };
          }
          return this;
        },
        getAttribute(attribute) {
          return this._attributes[attribute] ? this._attributes[attribute] : "";
        },
        reset() {
          let arr = [...this._childrens];
          for (let children = 0; children < arr.length; children++) {
            if (arr[children].constructor.toString().indexOf("Object") >= 0) {
              if (arr[children]._name == "input") {
                arr[children].changeAttribute("value", "");
                if (arr[children].file) delete arr[children].file;
              } else {
                arr[children].reset();
              }
            }
          }
          return this;
        },
        init() {
          this._childrens = [...this._childrens, ...this._ichildrens];
          this._childrens.forEach((value) => {
            if (value.constructor.toString().indexOf("Object") >= 0) {
              value.init();
            }
          });
          this._attributes = { ...this._iattributes };
          this._childrens = [...this._ichildrens];
          this._rendered = false;
          return this;
        },
        onload() {
          return;
        },
        _onload() {
          this._childrens.forEach((value) => {
            if (value.constructor.toString().indexOf("Object") >= 0) {
              value._onload();
            }
          });
          if (this.onload.constructor.toString().indexOf("Function") >= 0) {
            this.onload();
          }
        },
        _render() {
          let childrens = "";
          //if (this._rendered == undefined)
          this._node = DOM.node++;
          let element = this._name;
          this._rendered = true;
          this._childrens.forEach((value) => {
            if (value.constructor.toString().indexOf("Object") >= 0) {
              childrens += value._render();
            } else {
              childrens += value;
            }
          });
          this._attributes.node = [this._node];
          let _attributes = this._attributes;
          let attributes = "";
          for (let x in _attributes) {
            attributes += x + '="' + _attributes[x].join(" ") + '" ';
          }
          return \`<\${element} \${attributes}>\${childrens}</\${element}>\`;
        },
        _rerender() {
          let childrens = "";
          this._childrens.forEach((value) => {
            if (value.constructor.toString().indexOf("Object") >= 0) {
              childrens += value._render();
            } else {
              childrens += value;
            }
          });
          return childrens;
        },
      };
      return object;
    },
    render(id = "", element = "") {
      if (id) {
        this.id = id;
        this.element = element;
        document.getElementById(id).innerHTML = element
          ? element._render([])
          : element;
        this.rendered = true;
        element._onload();
      }
    },
    rerender(element) {
      const node = document.querySelector(\`[node="\${element._node}"]\`);
      while (node.attributes.length) {
        node.removeAttribute(node.attributes[0].name);
      }
      const attributes = element._attributes;
      for (let x in attributes) {
        node.setAttribute(x, attributes[x].join(" "));
      }
      node.innerHTML = element._rerender();
      element._onload();
    },
  
    $(element) {
      return document.querySelector(\`[node='\${element._node}']\`);
    },
  
    // time, post, get, readFiles, getBlobData64
    time() {
      return fetch("https://worldtimeapi.org/api/timezone/Asia/Dhaka").then(
        (_res) => _res.text()
      );
    },
    post(url, data) {
      const form = new FormData();
      for (let x in data) {
        form.append(x, data[x]);
      }
      return fetch(url, {
        method: "POST",
        mode: "cors",
        header: {
          "Content-Type": "application/json",
        },
        body: form,
      }).then((_res) => _res.text());
    },
    get(url) {
      return fetch(url).then((_res) => _res.text());
    },
    readFiles(...files) {
      return new Promise((resolve, reject) => {
        const data = [];
        const _reader = (file) => {
          let reader = new FileReader();
          reader.onload = () => {
            data.push(reader.result);
            if (file == files.length - 1) resolve(data);
            else _reader(++file);
          };
          reader.onerror = reject;
          reader.readAsDataURL(files[file]);
        };
        _reader(0);
      });
    },
    getBlobData64(url) {
      return fetch(url)
        .then((response) => response.blob())
        .then(
          (blob) =>
            new Promise((callback) => {
              let reader = new FileReader();
              reader.onload = function () {
                callback(this.result);
              };
              reader.readAsDataURL(blob);
            })
        );
    },
  };
  
  export default DOM;
  `,
  "./file1.js": `
    let a = 5;
    export {a};
  `,
  "./file2.js": `
    import {a} from "./file1.js";
    let b = 6;
    let sum = a + b;
    export {b, sum}
  `,
  "./file3.js": `
    import dom from "dom.js";
    import {a} from "./file1.js";
    import {b, sum} from "./file2.js";
    console.log("sum", sum);
    console.log("a", a);
    console.log("b", b);
    console.log("mul", a * b);
    const {createElement} = dom;
    
    let test = createElement("div", "Test", {style: "position: fixed; top: 0; background: red; left: 0; z-index: 9999"});

    let div = document.createElement("div");
    div.id = "root";
    document.querySelector("#ntech-extention").before(div);

    dom.render("root", test);

    dom.get("https://saffiullahfahim.me/").then(res => {
      console.log(res)
    })
  `,
};
//   let d = `
//     import {foo} from "./test.js";

//     console.log(foo)
//  `

// let file = new File([d], "t.js", {type: "application/js"});
// //eval("window.a=5;")

// let im = document.createElement("script");
// im.type = "module";
// im.src = chrome.runtime.getURL(window.URL.createObjectURL(file));
// document.body.appendChild(im)

// store a reference to our file handle
// let fileHandle;

// async function getFile() {
//   // open file picker
//   [fileHandle] = await window.showOpenFilePicker();

//   console.log(fileHandle)

//   if (fileHandle.kind === 'file') {

//     // run file code
//   } else if (fileHandle.kind === 'directory') {
//     // run directory code
//   }

// }

// setTimeout(() => {
//   getFile()
// }, 300);

// import idb from "https://saffiullahfahim.me/lib/idb.js";

// console.log(idb)

// const pickerOpts = {
//   types: [
//     {
//       description: 'Images',
//       accept: {
//         'image/*': ['.png', '.gif', '.jpeg', '.jpg']
//       }
//     },
//   ],
//   excludeAcceptAllOption: true,
//   multiple: false
// };

// async function getTheFile() {
//   // open file picker
//   [fileHandle] = await window.showOpenFilePicker(pickerOpts);

//   // get file contents
//   const fileData = await fileHandle.getFile();
// }

// getTheFile()

let loading = `Checking Update<div class="loading">
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  style="margin: auto; background: #fff; display: block"
  width="48px"
  height="48px"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
>
  <g transform="translate(50 50)">
    <g transform="translate(-19 -19) scale(0.6)">
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;45"
          keyTimes="0;1"
          dur="0.2s"
          begin="0s"
          repeatCount="indefinite"
        ></animateTransform>
        <path
          d="M31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"
          fill="#ff0000"
        ></path>
      </g>
    </g>
    <g transform="translate(19 19) scale(0.6)">
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="45;0"
          keyTimes="0;1"
          dur="0.2s"
          begin="-0.1s"
          repeatCount="indefinite"
        ></animateTransform>
        <path
          d="M-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 L37.3496987939662 -6.999999999999995 L47.3496987939662 -6.999999999999997 L47.349698793966205 6.999999999999973 L37.349698793966205 6.999999999999976 A38 38 0 0 1 31.359972760794346 21.460477824182686 L31.359972760794346 21.460477824182686 L38.431040572659825 28.531545636048158 L28.53154563604818 38.4310405726598 L21.460477824182703 31.35997276079433 A38 38 0 0 1 6.9999999999999964 37.3496987939662 L6.9999999999999964 37.3496987939662 L6.999999999999995 47.3496987939662 L-7.000000000000009 47.3496987939662 L-7.000000000000007 37.3496987939662 A38 38 0 0 1 -21.46047782418263 31.359972760794385 L-21.46047782418263 31.359972760794385 L-28.531545636048097 38.43104057265987 L-38.431040572659796 28.531545636048186 L-31.35997276079433 21.460477824182703 A38 38 0 0 1 -37.34969879396619 7.000000000000032 L-37.34969879396619 7.000000000000032 L-47.34969879396619 7.0000000000000355 L-47.3496987939662 -7.000000000000002 L-37.3496987939662 -7.000000000000005 A38 38 0 0 1 -31.359972760794346 -21.46047782418268 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"
          fill="#000000"
        ></path>
      </g>
    </g>
  </g>
</svg>
</div>`;

const map = () => {};

const testFun = (data) => {
  const { files } = data;

  const map = {};

  const test = (x, files) => {
   // console.log(x, files);
    let sp = files[x].split("\n");

    sp.forEach((v, i, a) => {
      if (v.indexOf("import") >= 0) {
        let str = v.indexOf("from");
        let file = v
          .substr(str + 4)
          .trim()
          .replace(";", "")
          .replace(/"/g, "");
        // if (map[file]) {
        //   let regex = new RegExp(file);
        //   let replacement = test(file, files);
        //   a[i] = a[i].replace(regex, replacement);
        //   files[x] = a.join("");
        //   console.log(files[x]);
        //   return;
        // }
        let regex = new RegExp(file);
        let replacement = test(file, files);
        a[i] = a[i].replace(regex, replacement);
        files[x] = a.join("");

        //console.log(files[x]);
      }
    });

    if (map[x] == undefined) {
      map[x] = URL.createObjectURL(
        new File([files[x]], x, { type: "application/javascript" })
      );
    }
    return map[x];
  };

  // console.log(test("./file3.js", files));

  // console.log(files);

  //for (let x in files) {

  // files[x] = URL.createObjectURL(
  //   new File([files[x]], x, { type: "application/javascript" })
  // );
  //}

  // let importMap = {
  //   imports: files,
  // };

  // let imFile = new File([JSON.stringify(importMap)], "test.importmap", {type: "application/importmap+json"})

  // let im = document.createElement("script");
  // im.type = "importmap";
  // im.src = URL.createObjectURL(imFile);
  // document.body.appendChild(im);

  let ex = document.querySelector("#ntech-extention");

  if(ex){
    console.log("already rendered");
    return
  }

  let im = document.createElement("script");
  im.type = "module";
  im.id = "ntech-extention";
  im.src = test("./file3.js", files);
  document.body.appendChild(im);
};

const data = {
  files: files,
};

let b = document.querySelector("img");

b.onclick = async () => {
  document.body.innerHTML = loading;
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: testFun,
      args: [data],
    },
    (d) => {
      console.log(d)
      //window.close();
    }
  );
};
