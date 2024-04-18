let arr = [
  {
    id: 1,
    Image:
      "https://cdn.pixabay.com/photo/2022/08/24/05/44/duck-7406987_1280.jpg",
  },
  {
    id: 2,
    Image:
      "https://cdn.pixabay.com/photo/2019/05/28/19/43/leaves-4235968_1280.jpg",
  },
  {
    id: 3,
    Image:
      "https://cdn.pixabay.com/photo/2020/04/08/08/08/spring-5016266_1280.jpg",
  },
  {
    id: 4,
    Image:
      "https://cdn.pixabay.com/photo/2019/01/02/10/20/iceland-3908498_1280.jpg",
  },
  {
    id: 5,
    Image:
      "https://cdn.pixabay.com/photo/2017/09/09/15/46/vitamin-2732432_1280.jpg",
  },
  {
    id: 6,
    Image:
      "https://cdn.pixabay.com/photo/2017/01/06/10/44/baby-1957429_1280.jpg",
  },
  {
    id: 7,
    Image:
      "https://cdn.pixabay.com/photo/2017/10/31/11/23/heart-2904968_1280.jpg",
  },
  {
    id: 8,
    Image:
      "https://cdn.pixabay.com/photo/2023/08/22/11/19/coneflower-8206120_1280.jpg",
  },
  {
    id: 9,
    Image:
      "https://cdn.pixabay.com/photo/2022/11/29/15/48/planet-7624791_1280.jpg",
  },
  {
    id: 10,
    Image:
      "https://cdn.pixabay.com/photo/2016/10/31/12/07/wine-partner-1785408_1280.jpg",
  },
];

let display = document.querySelector("#display");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let startBtn = document.querySelector("#Btns > button:nth-child(2)");
let currentIndex = 0;

let flag = false;
let interval;
startBtn.textContent = "Start";

arr.forEach((ele) => {
  let imgDiv = document.createElement("div");
  imgDiv.id = "imgDiv";
  let img = document.createElement("img");

  img.src = ele.Image;

  imgDiv.append(img);
  display.append(imgDiv);
});

function showData(gotIndex) {
  let imgDivData = document.querySelectorAll("#imgDiv > img");

  imgDivData.forEach((ele, i) => {
    gotIndex === i
      ? (ele.style.display = "block")
      : (ele.style.display = "none");
  });
}

startBtn.addEventListener("click", () => {
  flag = !flag;
  displayBtnText();

  if (flag) {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % arr.length;
      showData(currentIndex);
    }, 1000);
  }

  if (!flag) {
    clearInterval(interval);
  }
});

function displayBtnText() {
  if (flag === false) {
    startBtn.textContent = "Start";
  } else {
    startBtn.textContent = "Stop";
  }
}

nextBtn.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
  currentIndex >= arr.length - 1 ? (currentIndex = 0) : (currentIndex += 1);
  showData(currentIndex);
});

prevBtn.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
  currentIndex <= 0 ? (currentIndex = arr.length - 1) : (currentIndex -= 1);
  showData(currentIndex);
});

showData(currentIndex);
