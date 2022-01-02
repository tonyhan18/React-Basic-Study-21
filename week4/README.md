# import와 require 비교

> 혹시나 pacage.json을 복붙해 왔는데 실행이 안된다면 npm ci를 시도해보자.
> require는 node의 module system이다. 그래서 우리가 만든것들을 module.exports에 넣어주면 그것을 다른 파일에서 require해서 불러올 수 있다.

그런데 보다보면 이런것중에 이런것도 있다.

```
import React, {components} from 'react';
const {hot} = require(...)

module.exports = ...;
export default ...;
```

import와 require은 상호호완되기는 한다.
중괄호로 된것들은 (export const hello = 'hello')와 같이 변수나 값같은것을 exports 한것이다. 이렇게 하면 default로 하면 한번만 쓸 수 있는데 변수나 값은 여러개를 내보낼 수 있게 된다.

하지만 엄밀히 말하면 modyle.exports는 이것과 다르기는 한데... 일단 호완은 된다.

그리고 노드 모듈 시스템에 의해서

```
module.exports = {hello:'a'};
exports.hello = 'a'
```

위 두개는 같다.

사실 위의 것들이 호환되는 이유는 babel이 바꾸어주기 때문이다. 하지만 webpack은 node가 실행해주어서 반드시 const로 해주어야 한다.

# 리액트 반복문(map)

리액트를 다룰때 항상 바뀌는 부분에 집중하자

내부에 함수를 만들때 가급적 화살표함수를 써야한다. 왜냐하면 그렇게 하지 않을경우 constructure을 써야하기 때문이다.

map은 react의 반복문이다.

위의 사진과 같이 구현을 해준다.

# 리액트 반복문(key)

이제 반복문을 돌리는데 만약 출력하고픈게 2개 이상이면 어떻게 하는가?
방법 하나는 2차원 배열로 만드는 방법이다.

```
[['사과','맛있다.'],['바나나','맛없다.']].map((v)=>{
	return <div>{v[0]} - {v[1]}</div>
})
```

객체로 할 수도 있다. 사실 2차원 배열은 잘 안쓴다.

```
[{fruits: '사과',taste:'맛있다.'},{fruits'바나나',taste: '맛없다.'}].map((v,i)=>{
	return <div key={v.fruits + v.taste}>{v.fruits} - {v.taste}</div>
})
```

그리고 최적화를 위해 key를 써야한다. key를 안써주면 브라우저에서 에러를 보낸다. 그리고 map의 두번째 인자는 index 값이다.
나중에 props로 더 좋은 방법이 존재한다.

# 컴포넌트 분리와 props

이제 위에서 만든 것을 좀더 가독성 있게 바꾸어주자.

컴포넌트를 따로 때는 이유는 가독성, 재사용성, 성능 최적화에 도움이 되기 때문이다. 그래서 코드가 길어진다면 컴포넌트 단위로 부해하는 것이 좋다.

하지만 이렇게하면 Try 컴포넌트에 v와 i가 전달되지 않는다. 그래서 props가 필요하게 된 것이다. props로 데이터를 전달해주어야 한다.

그 결과 위와 같이 props라는 성분에 데이터들을 넘겨주면 된다. 이때 주의할점은 처음할때부터 컴포넌트를 매우 작게 만들어서 시작하지 말고 일단 크게 만들고 반복되는 부분을 컴포넌트로 빼네는 Top-Down 방식으로 구현하자.

이게 부모-자식 관계가 생기는데 이게 나중에 가면 조상-자식 으로 데이터를 넘겨주는 현상까지 생기기 때문에 이를 해결하고자 Redux, MobX, Context들이 생기게 되었다.

# 주석과 메서드 바인딩

주석

```
{/* 주석입니다. */}
```

메서드 바인딩이라는 것도 있기는 한데 이게... 너무 예전꺼라서 그냥 무시하자 짜피 안쓴다.

# 숫자야구 만들기

강의 중간에 js의 splice 함수를 사용하는 부분이 나오는데 이부분을 확인해보면

splice를 이용하면 원하는 위치에 요소를 추가하거나 삭제할 수 있다.

삽입시
splice(위치, 0, 삽입 데이터)
삭제시
splice(위치, 1)

리액트에서는 가급적 array에 push 해주면 안된다. 왜냐하면 리액트가 무엇이 바뀌었는지 감지를 못해서 그렇다. 그래서 펼침연산자를 사용한다. 왜냐하면 기존것과 새로운것이 다르다는 것을 리액트가 알기 때문이다.

함수를 밖으로 빼는 이유는 this를 안쓰고 다른데에서 쓰기 위해서 빼준다.

# 숫자야구 Hooks로 전환하기

???
가급적 위와같이 이전것을 받아와서 처리해주어야 나중에 데이터 바뀌는 등의 문제가 생기지 않을 수 있다.

암튼 옛날 state로 현재 state를 만들때는 함수형 state를 꼭 사용하자.

# React Devtools

rendering이 자주 일어나서 성능이 떨어지는 경우가 많은 데 그걸 찾아내고 해결하는 방법에 대해서 알아보자

# shouldComponentUpdate

???

위와같이 해놓으면 랜더링 업데이트를 확인할 수 있다.
그래서 랜더링될때마다 색이 바뀐다. 그래서 필요없는 랜더링을 최대한 줄여주기위한 작업이 필요하다.

shouldComponentUpdate(nextProps, nextState, nextContext)
언제 랜더링 할지를 설정해주어야 한다.

???

위와 같이 작성해주면 아무때나 발생할 수 있는 랜더링을 줄일 수 있다.

# PureComponent와 React.memo

???
한가지 쉬운방법이 Component에서 PureComponent로 바꾸는 것이다. 이것이 곧 shouldComponentUpdate를 바꾸어놓은 것이다.

유일한단점은 객체나 배열같은 복잡한 구조가 생기면 PureComponnet도 어려워한다.

그래서 앞에서 말한것처럼 리스트는 push를 하지말고 펼침연산자를 써야하는 것이다. 이렇게 해야 PureComponent가 바뀐것을 알아차리기 때문이다.

또 배열안에 객체 안에 배열같은 복잡한 구조. 내부포함 새로운게 아니면 에러가 발생할 수 있다.

그리고 가급적 복잡한 구조 쓰지말자
이딴식 [{inside:[3]}]으로 useState 쓰지마라.

그런데 PureComponent도 나중에 컴포넌트가 복잡해지면 안되는 경우가 많다. 그리고 PureComponent는 커스텀하기가 어렵다.

그런데 훅스에서는 이게 아닌 memo를 써야한다.
위와같이 사용하자. 만약 자식컴포넌트가 모두 memo이면 부모컴포넌트도 memo사용이 가능하다.

# React.createRef

# props와 state 연결하기

props는 절때로 자식이 바꾸면 안된다. 자식이 부모꺼까지 바꾸어버리기 떄문이다. 그래서 props를 state와 연결해야한다. 그래서 props를 state에 넣어주어서 해결하자
const [result, setResult] = useState(props.tryInfo.result);
와 같이 넣어줄 수도 있어야 한다.
