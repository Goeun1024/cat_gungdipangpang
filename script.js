const cat = document.getElementById("cat");

const counter = document.getElementById("counter");

let timeout;

let count = 0;

let isPatting = false;

/* 궁디팡팡 시작 */
function startPat(){

  if(isPatting) return;

  isPatting = true;

  clearTimeout(timeout);

  cat.classList.add("pat");

  cat.src = "cat.png";

  /* 카운터 증가 */
  count++;

  counter.innerText =
  "궁디팡팡 횟수 : " + count;

  /* 모바일 진동 */
  if(navigator.vibrate){

    navigator.vibrate(50);

  }

}

/* 궁디팡팡 종료 */
function stopPat(){

  isPatting = false;

  cat.classList.remove("pat");

  timeout = setTimeout(()=>{

    cat.src = "cat1.png";

  },1000);

}

/* 키보드 */
document.addEventListener("keydown",(e)=>{

  if(e.key==="Shift"){

    startPat();

  }

});

document.addEventListener("keyup",(e)=>{

  if(e.key==="Shift"){

    stopPat();

  }

});

/* 모바일 터치 */
cat.addEventListener("touchstart",()=>{

  startPat();

});

cat.addEventListener("touchend",()=>{

  stopPat();

});
