font awesome

컨텐츠 간의 간격이 space 만큼이면
justify-content:space-between 이 좋음

단순히 콘텐츠간의 거리를 좌우 양끝으로 밀때는
justify-content:space-between이 좋음

헤더의 위치를 구지 align-content 쓰는 것보다 padding 쓰는게 중앙정렬하기에도 좋음

아이템을 반응형으로 만들때 width, height를 %로 만들면 좋음
display:flex -> align-items를 안쓰고도 중앙정렬 하려면 text-align:center 사용하기

ul에서 나오는 점 없애기
ul {
list-style: none;
}

제목의 내용 제한 line-clamp 사용

어떻게 버튼들이 일정한 간격으로 끝까지 나열되게 할까
display: flex;
justify-content: space-around;

미리 지정된 값을 계산해서 하는 방법
calc(var(--padding) / 2));
이미지가 작아지게 만드는 방법?
이건 방법없음 그냥 height, width 써야함

태그 두개를 두 줄로 바꿈 하는 방법
flex-direction : column으로 하면 두 개가 수직으로 만들어진다.

---

wiki 만들기
float 사용

background: linear-gradient
