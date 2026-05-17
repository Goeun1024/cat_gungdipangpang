const cat = document.getElementById("cat");

let timeout;

/* 궁디팡팡 시작 */
function startPat(){

  clearTimeout(timeout);

  cat.classList.add("pat");

  cat.src = "cat.png";

}

/* 궁디팡팡 종료 */
function stopPat(){

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
