# 리액트 라이프사이클 소개

ComponentDidMount : 컴포넌트가 첫 랜더링된 후. 랜더가 성공적으로 실행되었다면 이 안의 내용물이 실행된다. 그 다음 리 랜더링부터는 실행되지 않는다.
하지만 알겠지만 이건 useEffect로 처리할 수 있는 내용이다.

ComponentWillUnmount() : 컴포넌트가 제거되기 직전이다. 이것도 useEffect로 처리할 수 있다.

componentDidUpdate() : 리랜더링될때 사용한다.

그래서 클래스의 경우 constructure -> render -> ref -> componentDidMount -> (state,props 바뀔때 shouldComponentUpdate -> render -> componentDidUpdate)
부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

# setInterval과 라이프사이클 연동하기

setinterval이 초기에 생성되고 삭제해주지 않으면 성능과 메모리에 문제가 생긴다. 그래서 위와같이 Ref에 저장해 놓고 나중에 해제해줄 필요가 있다.

위와같이 짜면 closer 문제가 생긴다 하여 아래와 같이 짜져야 원하는 데로 작동한다.

# 가위바위보 게임 만들기

# 고차 함수와 Q&A

메서드 안에 함수를 호출하는 부분이 들어가 있는 경우 화살표를 지울 수 있다. 대신에 호출되는 함수에서도 화살표를 넣어주어야 한다. 그래서 위 두 이미지와 같이 함수가 된다.

이제 이걸 훅스로 바꾸어야하는데 훅스는 이런 것들이 없다. 훅스에는 이것들을 처리하기 위해 useEffect가 쓰여진다.

# Hooks와 useEffect

훅스가 라이프사이클은 없지만 흉내를 낼 수 있다.
useEffect가 componentDidMount, componentDidUpdate, componentWillUnmount(useEffect의 return부분)를 합쳐놓았다.

위와같이 의존되는 변수를 적어놓음으로 정상적으로 작동하게 된다.

# 클래스와 Hooks 라이프사이클 비교
