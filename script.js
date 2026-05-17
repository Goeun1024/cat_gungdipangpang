const cat = document.getElementById("cat");

let timeout;

// Shift 누를 때
document.addEventListener("keydown",(e)=>{

  if(e.key==="Shift"){

    // 기존 타이머 취소
    clearTimeout(timeout);

    // 궁디팡팡 시작
    cat.classList.add("pat");

    // 궁디팡팡 사진
    cat.src = "cat.png";

  }

});

// Shift 뗐을 때
document.addEventListener("keyup",(e)=>{

  if(e.key==="Shift"){

    // 흔들기 멈춤
    cat.classList.remove("pat");

    // 1초 뒤 뒤돌아보기
    timeout = setTimeout(()=>{

      cat.src = "cat1.png";

    },1000);

  }

});