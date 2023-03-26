document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.altKey) {
    if (document.contains(document.getElementById("custom-alert")))
      document.getElementById("custom-alert").remove();
    const selectedText = window.getSelection().toString().split("");
    let res = "";
    if (selectedText.length !== 0) {
      for (let i = 0; i < selectedText.length; i++) {
        if (!qwerty_mapping[selectedText[i]]) {
          res += selectedText[i];
        } else res += qwerty_mapping[selectedText[i]];
      }

      const alertBox = document.createElement("div");
      alertBox.id = "custom-alert";

      const content = document.createElement("div");
      content.className = "custom-alert-content";
      content.innerText = res;

      const copyButton = document.createElement("button");
      copyButton.className = "custom-alert-copy";
      copyButton.innerText = "Copy";
      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(res);
        alertBox.remove();
      });

      alertBox.appendChild(content);
      alertBox.appendChild(copyButton);
      const closeButton = document.createElement("button");
      closeButton.innerText = "Close";
      closeButton.className = "custom-alert-close";
      closeButton.addEventListener("click", () => {
        alertBox.remove();
      });
      alertBox.appendChild(closeButton);

      // Add the alert box to the DOM
      document.body.appendChild(alertBox);
    }
  }
});

const qwerty_mapping = {
  ת: ",",
  ",": "ת",
  ף: ";",
  ";": "ף",
  ץ: ".",
  ".": "ץ",
  ש: "a",
  a: "ש",
  נ: "b",
  b: "נ",
  ב: "c",
  c: "ב",
  ג: "d",
  d: "ג",
  ק: "e",
  e: "ק",
  כ: "f",
  f: "כ",
  ע: "g",
  g: "ע",
  י: "h",
  h: "י",
  ן: "i",
  i: "ן",
  ח: "j",
  j: "ח",
  ל: "k",
  k: "ל",
  ך: "l",
  l: "ך",
  צ: "m",
  m: "צ",
  מ: "n",
  n: "מ",
  ם: "o",
  o: "ם",
  פ: "p",
  p: "פ",
  "/": "q",
  q: "/",
  ר: "r",
  r: "ר",
  ד: "s",
  s: "ד",
  א: "t",
  t: "א",
  ו: "u",
  u: "ו",
  ה: "v",
  v: "ה",
  "'": "w",
  w: "'",
  z: "ז",
  ס: "x",
  x: "ס",
  ט: "y",
  y: "ט",
};
