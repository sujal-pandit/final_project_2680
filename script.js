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
    if (timing == null) {
    } else if (timing.isDone == false) {
      para.innerHTML = `<input type='text' class='inputTime' id=timeInput${index}> <input type='time' class='timeSetUp' id=timeTime${index}> <button class='DoneBtn' onclick='paraAdder(${index})' id=doneFn${index}>Done</button> `;
    } else {
      para.innerHTML = `<div class='inputParaTime'>${timing.text}</div><div class='inputParaTime'> ${timing.time}</div><div> <button class='DeleteBtn' onclick='paraDeleter(${index})' id=deleteFn${index}>Delete</button> </div>`;
    }
    container.appendChild(para);
  });
}

function paraAdder(id) {
  let textVal = document.getElementById(`timeInput${id}`).value;
  let timeVal = document.getElementById(`timeTime${id}`).value;
  timeArr[id] = { text: textVal, time: timeVal, isDone: true };
  console.log(timeVal);
  console.log(textVal);
  elemntAdder();
}

function paraDeleter(id) {
  timeArr[id] = null;
  elemntAdder();
}
