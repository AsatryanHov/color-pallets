const wrapper = document.querySelector(".wrapper");
const colorsDiv = document.querySelector(".colorsDiv");
const outColor = document.querySelector(".outColor");
const outColorText = document.querySelector(".outColorText");

let colors = {
  "color-0": "#000000",
  "color-1": "#3C0000",
  "color-2": "#6A0000",
  "color-3": "#900000",
  "color-4": "#B60000",
  "color-5": "#DA0000",
  "color-6": "#FE0000",
  "color-7": "#FF331B",
  "color-8": "#FF5234",
  "color-9": "#FF714D",
  "color-10": "#FE9168",
  //fireBrickToGold
  "color-11": "#B22222",
  "color-12": "#BB3824",
  "color-13": "#C34B26",
  "color-14": "#CC5F27",
  "color-15": "#D46E26",
  "color-16": "#DD7F27",
  "color-17": "#E39026",
  "color-18": "#EBA124",
  "color-19": "#F3B31E",
  "color-20": "#F9C416",
  "color-21": "#FED700",
  //viridis
  "color-22": "#440053",
  "color-23": "#472474",
  "color-24": "#414487",
  "color-25": "#35608D",
  "color-26": "#2B778E",
  "color-27": "#218F8C",
  "color-28": "#25A984",
  "color-29": "#45BE71",
  "color-30": "#7BD152",
  "color-31": "#BCDF2D",
  "color-32": "#FDE624",
  //cividis
  "color-33": "#00224F",
  "color-34": "#11346E",
  "color-35": "#34466C",
  "color-36": "#4F576C",
  "color-37": "#666970",
  "color-38": "#7C7B77",
  "color-39": "#948E76",
  "color-40": "#AFA371",
  "color-41": "#C8B765",
  "color-42": "#E3CE51",
  "color-43": "#FEE938",
  //sunflower pum
  "color-44": "#F5AA2A",
  "color-45": "#EAA428",
  "color-46": "#DF9D25",
  "color-47": "#C9843F",
  "color-48": "#A75E58",
  "color-49": "#892F63",
  "color-50": "#86295E",
  "color-51": "#812358",
  "color-52": "#772152",
  "color-53": "#632348",
  "color-54": "#52203D",
  //yellow blue-grey
  "color-55": "#EEEAC4",
  "color-56": "#DFDCBD",
  "color-57": "#CFCDB6",
  "color-58": "#BCBEB1",
  "color-59": "#A6AFAC",
  "color-60": "#8FA1A3",
  "color-61": "#788B91",
  "color-62": "#5E757D",
  "color-63": "#496370",
  "color-64": "#345564",
  "color-65": "#1B4458",
  //yellow rainbow
  "color-66": "#FCFD95",
  "color-67": "#FFE76B",
  "color-68": "#FED035",
  "color-69": "#FFBC03",
  "color-70": "#FFAA02",
  "color-71": "#FF9801",
  "color-72": "#A99441",
  "color-73": "#56854F",
  "color-74": "#047047",
  "color-75": "#055F3C",
  "color-76": "#024B30",
};

colorsDiv.addEventListener("click", function (event) {
  if (event.target && event.target.tagName == "BUTTON") {
    const id = event.target.id;
    // out.innerHTML = colors.id;
    outColorText.innerHTML = colors[`${id}`];
    outColor.style.backgroundColor = colors[`${id}`];
    outColor.innerHTML = colors[`${id}`];
    outColor.style.color = colors[`${id}`];
    // console.log(event.target.id);
  }
});
// ------------------ set id's-----------------------
function setIDs() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((item, index) => {
    item.id = `color-${index}`;
  });
}
setIDs();
// -----------------------------------------------------------
function setBGColor() {
  const btns = document.querySelectorAll(".btn");
  let colorArray = Object.values(colors);
  btns.forEach((item, index) => {
    item.style.backgroundColor = colorArray[index];
    item.style.color = colorArray[index];
  });
}
setBGColor();
// ----------------------------copy div content---------------------------
const divs = document.querySelectorAll(".copy");

divs.forEach((div, index) => {
  div.addEventListener("click", () => {
    const textArea = document.createElement("textarea");
    textArea.value = div.textContent;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");

    document.body.removeChild(textArea);
  });
});
