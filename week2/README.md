# 구구단 문제 만들기

setState는 비동기이다. => 그래서 예전 state로 새로운 state를 만들때는 return을 해주는 함수를 만들자.
{...} 으로 처리해줄 수 있다.

만약에 input에 focus를 주고 싶은 경우 어떻게 해야하는가?
ref값을 주어야 한다. 그냥 document 같은걸 쓰면 안된다. 우리는 react가 화면을 만들어준다고 생각하고 데이터만 조작해주자.

ref를 쓰는 경우는 DOM에 직접 접근하고 싶을 때 사용한다.

setState할때 render가 다시 일어난다는 것을 알아야한다. 그래서 나중에 성능 최적화할때 이를 수정해야한다.

함수를 바깥으로 뽑는 이유는 render가 너무 자주 실행이 되어서 이를 막기 위해 바깥으로 빼주는 것이다.

# 카운트

https://developer.mozilla.org/en-US/docs/Web/CSS/counter()

position sticky
DEEPLIFY
