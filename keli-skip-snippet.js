// 버튼 삽입 위치 지정
const skipBtn = document.getElementsByClassName("b_box right mt")[0];

// 약간의 영상 재생 후 버튼 생성
setTimeout(() => {
    skipBtn.innerHTML = `<button onclick="javascript:clickSkipBtn();" class="c_btn blue">스킵하기</button>`
}, 1000);

function clickSendBtn() {
  // 보낼 파라미터 설정
  var param = {
    url : API.url.terminate,
    type : 'terminate',
    data : API.getJsonParameters("", API.dataModel) + "&" + API.getJsonParameters("", API.learningData)
  };

  // 전송 반복
  let delay=0;
  for (var i=0; i<300; i++) {
    delay += 10;
    setTimeout(() => {
      console.log(param);
      API.ajax(param);
    }, delay);
  }

  // 창 닫기
  setTimeout(() => { return closeWindow(); }, 3000);
}
