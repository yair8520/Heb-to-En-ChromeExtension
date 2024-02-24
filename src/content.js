document.addEventListener("keydown", handleKeyDown);
document.addEventListener("click", handleOutsideClick);

function handleKeyDown(event) {
  if (event.ctrlKey && event.altKey) {
    const activeElement = document.activeElement;

    if (isInputOrTextarea(activeElement)) {
      handleInputOrTextarea(activeElement);
    } else {
      handlePopup();
    }
  }
}
function handleOutsideClick(event) {
  const modal = document.getElementById("alert-modal");
  if (modal && !modal.contains(event.target)) {
    modal.remove();
  }
}

function isInputOrTextarea(element) {
  return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}

function handleInputOrTextarea(element) {
  const selectedText = element.value.trim().split("")
  const text = getTranslation(selectedText);
  element.value = text;
}

function handlePopup() {
  const customAlert = document.getElementById("alert-modal");
  if (document.contains(customAlert)) {
    customAlert.remove();
  }

  const selectedText = window.getSelection().toString().trim().split("");
  const text = getTranslation(selectedText);
  if (text) {
    const alertBox = createAlertBox(text);
    document.body.appendChild(alertBox);

  }

}

function createAlertBox(text) {
  const alertBox = document.createElement("div");
  alertBox.id = "alert-modal";

  const content = document.createElement("div");
  content.className = "alert-modal-content";
  content.innerText = text;

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-modal-container";

  const copyButton = createCopyButton(text, alertBox);
  const closeButton = createCloseButton(alertBox);

  buttonContainer.appendChild(copyButton);
  buttonContainer.appendChild(closeButton);

  alertBox.appendChild(content);
  alertBox.appendChild(buttonContainer);

  return alertBox;
}


function createCopyButton(text, alertBox) {
  const copyButton = document.createElement("button");
  copyButton.className = "alert-modal-copy";
  copyButton.innerText = "Copy";
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(text);
    alertBox.remove();
  });

  return copyButton;
}

function createCloseButton(alertBox) {
  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.className = "alert-modal-close";
  closeButton.addEventListener("click", () => {
    alertBox.remove();
  });

  return closeButton;
}


const getTranslation = (selectedText) => {

  let res = ""
  for (let i = 0; i < selectedText.length; i++) {
    if (!qwerty_mapping[selectedText[i]]) {
      res += selectedText[i];
    } else res += qwerty_mapping[selectedText[i]];
  }
  return res
}
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
