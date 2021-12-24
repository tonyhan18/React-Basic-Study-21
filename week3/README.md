# React Hooks 사용하기

Hooks를 만들게 된 이유는 결국 class 형이 아닌 함수형을 써서 좀 더 깔끔하게 코드를 짜게끔하기 위해서이다.

함수 컴포넌트에서도 state, ref를 쓸 수 있게 해달라고 나온것이 react Hooks이다.

Hooks에서는 state를 하나씩 분류하는게 좋다.
use로 시작하는 것들이 Hooks이다.

ref를 사용할때 기존과 다른것은

```
this.input.focus();
```

였던것이

```
inputRef.current.focus();
```

로 바뀌게 된다.

# Class와 Hooks 비교하기

state를 사용한것의 문제점은 state가 변경되면 다시 render되기 때문에 최적화에서 조심해야한다.

참고로 React에서 태그에 class를 사용할 수가 없다. 이는 js class가 있어서 헷갈리기 때문이다. 비슷하게 for도 헷갈려서 바뀐다.

class -> className
for -> htmlFor

state를 사용할때 객체로 보관할 수도 있기는 하다.
하지만 이렇게 했을때의 문제점은 값의 일부만 바꾸었는데 전체가 사라지거나 바뀔 수가 있기 떄문에 사용을 자제해야한다.

```React
cosnt [state, setState] = React.useReact(
{
first: Math.ceil(Math.random() * 9);
second: Math.ceil(Math.random() * 9);
value: "";
result: "";
}
)
```

이제 state 함수에다가 화살표함수를 넣을 수 있는데 이 경우에는 반드시 return을 해주고 다음과 같이하면된다.
setState((prev)=>{return prev})

setState할때마다 렌더링이 다시 일어난다고 하는데 이건 클래스에서 setState함수를 사용할때 그런것이고 함수형에서 사용하는 Hooks의 setState를 같은 경우는 React가 비동기로 처리해준다.

## 웹팩 설치하기

웹팩을 쓰는 이유는 실무에서 컴포넌트가 무한히 많다. 그래서 컴포넌트마다 코드를 하나의 파일안에 다 짠다고 하면 유지보수가 불가능해진다. 그래서 다른 소스에서 js 파일을 가져오면 스크립트간의 중복이 발생할 수 있다. 중복제거가 쉬운게 아니다.

웹팩은 여러개의 js 파일을 한번에 합치어서 하나의 js 파일로 만들어주는 기술이다.

이를 위해서 Node(js실행기)를 써야한다.

```
npm init
npm i react react-dom
npm i -D webpack webpack-cli
```

-D는 개발할때만 쓰겠다는 말이다.

이걸 자동으로 해주는것이 create-react-app이다.

js와 jsx 확장자의 차이점 : jsx 문법을 쓰면 jsx 확장자를 쓰는게 좋음.
개발자들에게 인지시키기 위한 용도.

## 모듈 시스템과 웹팩 설정

파일들을 다 분리시키어 주어야한다.
그런데 또 분리시킨것을 하나로 합쳐주어야지 인식이 된다. 그래서 하나로 합쳐주기 위해서 파일을 하나로 합치어 주는 웹팩이 나오게 된다.

웹팩설정에서 주석으로 모두 설명되어 있음

## 웹팩으로 빌드하기

명령어 찾을 수 없다고 하면 명령어 등록이 안되어 있어서 그렇다.
방법 1 : script에 등록(npm run dev)
방법 2 : 명령어 등록
방법 3 : npx webpack

이렇게하면 app.js가 만들어지게 된다. 이걸가지고 index.html에서 app.js를 scrip로 불러오게 되면 원하는 페이지가 나오게 된다.

문제는 에러가 뜬다...

에러를 읽어보면 WordRelay가 문제인건데 이게 아마... jsx 라서 문제인것으로 보인다. babel이 없으니까

그런데 babel 안에서도 jsx를 따로 설정해주어야한다. 실재 배포함때 babel을 쓰지 않는다.

```
npm i -D @babel/core : 기본
npm i -D @babel/preset-env : 최신문법을 과거 브라우저에 맞게 지원
npm i -D @babel/preset-react : jsx를 사용할 수 있게 된다.
npm i -D babel-loader : babel과 webpack을 연결해준다.
```

## 구구단 웹팩으로 빌드하기

2-6 인데 이건 직접 만든다음에 해야함.

webpack 작성시
entry
module {rules[{test,loader,options{presetsp[]}}]}
plugins
output

이 4가지만 알아도 된다. 그리고 이 순서대로 작성하자.

???
실행 결과를 보니 실재로 debug 과정에서 브라우저 버전을 확인해볼 수 있게 된다.

## @babel/preset-env와 plugins

webpack을 설정해보면 entry에 들어간 파일들을 module을 이용해 적용하는 것이다. babel-loader에 대한 옵션들을 추가할 수도 있다.

## 끝말잇기 Class 만들기

e.target과 e.currentTarget가 존재하는데 이것과 관련해서는 직접 찾아보자.

## 웹팩 데브 서버와 핫 리로딩

webpack-cli가 4버전이 되면서 핫 리로딩을 할 수 있게 되었다. 기존에는 파일을 만들고 나서 일일히 npx webpack 해주어야 했던것을 바로바로 적용해준다.

```
npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D
```

그리고 개발용 서버로

```
npm i -D webpack-dev-server
```

마지막으로 package.json에 있던 dev 명령어는 'dev : "webpack' 이었는데 이것도
'dev: "webpack serve --env development'로 바꾸어주자

이제 webpack으로 가서 plugin을 받아와서 내용들을 추가해주자.
webpack dev-server은 webpack.config.js에 적은 대로 build결과물을 가지고 dist 폴더에 결과물을 저장해놓는다. hot-reloading 덕분에 변화점을 발견하여 결과물을 수정해준다.

이것은 기존 reloading과 다른 점은 hot-reloading은 기존 데이터는 유지하면서 화면을 바꾸어준다.

근데 이게 또 업데이트 되었다.

## 끝말잇기 Hooks로 전환하기

한번 Class로 구현한 끝말잇기를 Hooks로 전환해보자

전환을 완료하고 보니 위와같이 HMR이라는 것이 생긴것을 확인할 수 있다.
HMR[hot module reloading]의 약자이다.

또한 앞으로 위와같이 그냥 for과 class는 쓰지못한다. 대신 다음과 같이 바꾸어 사용해야한다.
for -> htmlFor
class -> className

근데 잘 모르겠다. 이게 원래는 안되었는데 이제는 또 적용이 되나보다.
