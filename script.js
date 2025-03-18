let timeArr = [];

document.getElementById("addTimeBlock").addEventListener("click", function () {
  timeArr.push({ text: "", time: "", isDone: false });

  elemntAdder();
});

function elemntAdder() {
  let container = document.getElementById("TimeBlockAdder");
  container.innerHTML = "";
  timeArr.forEach((timing, index) => {
    let para = document.createElement("div");
    para.classList.add(`Time${index}`);
    para.classList.add("timeCards");
    para.setAttribute("id", `timeBlock${index}`);
    if (timing.isDone == false) {
      para.innerHTML = `<input type='text' id=timeInput${index}> <input type='time' id=timeTime${index}> <button class='DoneBtn' onclick='paraAdder(${index})' id=doneFn${index}>Done</button> `;
    } else {
      para.innerHTML = `<p>${timing.text} ${timing.time}</p> `;
    }
    container.appendChild(para);
  });
  console.log(container);
}

function paraAdder(id) {
  console.log("HELLO");
  let textVal = document.getElementById(`timeInput${id}`).value;
  let timeVal = document.getElementById(`timeTime${id}`).value;
  timeArr[id] = { text: textVal, time: timeVal, isDone: true };
  console.log(timeVal);
  console.log(textVal);
  elemntAdder();
}
