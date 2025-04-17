# 202130235 최한솔  

# 2025.04.17 6주차  
### closure의 개념  
- 클로저의 핵심은 스코프를 이용하여 변수의 접근 범위를 "폐쇄" 하는 것에 있습니다.  
- 외부 함수스코프에서 내부 함수 스코프로 접근이 불가능함.  
- 내부 함수에서는 외부 함수스코프에 선언된 변수에 접근이 가능  
- 장점 :  
    - 전역변수 사용 최소화  
    - 데이터 보존가능 
    - 모듈화를 통한 코드 재사용 편리   
    - 정보의 접근 제한    
### 불변성이 중요한 이유  
- 불변성을 사용하면 복잡한 기능을 훨씬 쉽게 구현할 수 있음.  
- 기본적으로 부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌더링 됨   
- 변경사항이 없는 자식 컴포넌트도 포함되어짐  
- 리렌더링 자체가 사용자에게 보이는 것은 아니지만, 성능상의 이유로 트리의 영향을 받지 않는 부분의 리렌더링을 피하는 것이 좋음  
- 불변성을 사용하면 컴포넌트가 데이터의 변경 여부를 저렴한 비용으로 판단 할 수 있음  
### 교대로 두기 -1  
- 첫번째 선수는 두는 말을 "x"로 설정. 이제 board 컴포넌트에 또 다른 state를 추가하여 추적  
- x와 y가 번갈아 한번 씩 두어야 하기 때문에 x가 두었는지 아닌지 현재의 상태를 보관하면 됨. 즉, x의 차례면 true. 0의 차례면 false 상태를 기억  
- 플레이어가 움직일 때마다 다음 플레이어를 결정하기 위해 불리언 값인 xIsNext가 반전되고 게임의 state가 저장됨. board의 handclick 함수를 업데이트하여 xIsNext의 값을 반전  
### return의 의미  
- 작성한 코드에는 return값이 없다.  
- javascript에서 return값이 없는 return:은 함수를 즉시 종료하라는 의미  
- 이때 값을 반환하지 않으면 자동으로 undefined를 반환  
- squares[i]가 이미 값이 있다면 , 그 자리에 다시 둘 수 없으니 아무 일도 하지말고 함수를 끝내는 것    
### 승자 결정하기  
- 먼저 승리할 수 있는 경우의 자리를 2차원 배열로 선언  
- 선언된 배열 line과 

### STATE 끌어올리기  
- handleClick 함수는 JAVASCRIPT의 slice() 배열 메서드를 사용하여 squarese 배열의 사본인 nextSquares를 생성함.  
- 그 다음 andleClick 함수는 nextSquares 배열의 첫 번째 squares(index [0])에 x를 추가하여 업데이트함.  
- setSquares 함수를 호출하면 react는 컴포넌트의 state가 변경되었음을 알 수 있음  
- 그러면 squares의 state를 사용하는 컴포넌트와 그 하위 컴포넌트가 다시 렌더링 됨  

- javascript는 클로저를 지원하기 때문ㅇ네 내부 함수가 외부 함수에 정의된 변수 및 함수에 접근할 수 있음  
- handclick함수는 squares의 state를 읽고 setsquares 메서드를 호출할 수 있는데, 이 두 함수는 board 함수 내부에 정의되어 있기 때문임.  

- 이제 BOARD가 모든 STATE를 관리하므로 부모 BOARD 컴포넌트는 자식 SQUARE 컴포넌트가 올바르게 표시될 수 있도록 PROPS를 전달  
- SQUARE를 클ㄹ릭하면 자식 SQUARE 컴포넌트가 부모 BOARD 컴포넌트에 BOARD의 STATE를 업데이트 하도록 요청함.  
- BOARD의 STATE가 변경되면 BOARD 컴포넌트와 모든 자식 SQUARE 컴포넌트가 자동으로 다시 렌더링 됨 
- BOARD 컴포넌트에 속한 모든 SQUARE의 STATE를 유지하면 나중에 승자 결정 가능    


# 2025.04.03 4주차  
### 이벤트에 응답하기  
- component 내부에 event handler 함수를 선언하면 event에 응답할 수 있음.  
### 화면 업데이트 하기  
- component가 특정 정보를 '기억'해 두었다가 표시하기를 원하는 경우가 있을 때 예를 들어 버튼이 클릭된 회수를 세고 싶다면 component에 state를 추가하면 됨  
- 먼저 react에서 useState를 import하고 component 내부에 state 변수를 선언  
- 실습 =  
    - 버튼이 처음 표시될 때는 useState()에 0을 전달해서 count가 0이 되도록 함  
    - state를 변경하고 싶다면 setCount()를 실행하고 새 값을 전달  
    - 버튼에서 event handler를 호출하여 setcount() 함수를 실행  
    - 버튼을 클릭하면 카운터가 증가  

- 문서의 코드는 component안에 2개의 버튼을 반환하도록 하였으나 불필요하게  복잡.  
- 우리는 useState에 집중할 수 있게 버튼하나만 반환하도록 수정   
### Hook 사용하기  
- use로 시작하는 함수를 HOOK라고 합니다.  
- useState는 react에서 제공하는 내장 HOOK입니다. 
- 다른 내장 HOOK은 api 참고서에서 찾아볼 수 있습니다.  
- 또한 기존의 것들을 조합하여 자신만의 hook를 작성할 수 있습니다. 사용자 hook  
- 다른 함수보다 제한적  
    - 예를 들면 component 또는 다른 hook의 상단에서만 hook를 호출할 수 있음  
    - 조건이나 반복문에서 useState를 사용하고 싶다면 새 컴포넌트를 추출하여 그곳에 넣음  
### Hook의 사용 규칙(Rules of Hooks)  
- hook은 react의 렌더링 및 상태 관리 메커니즘과 밀접하게 연결되어 있으며,아래와같은 규칙을 따라야 함  
    - 최상위에서만 호출해야함 
    - if,for,while등의 블록 내부에서 hooks를 호출하면 안됨  
    - 함수의 조건문 내부에서 호출하면 실행 순서가 달라질 수 있음.  
- hook의 사용규칙에는 제한이 필요한데 제한이 필요한 이유  
    - rendering 순서를 보장하기 위해서  
### function형 컴포넌트에서만 hook을 사용하는 이유?  
- class형 컴포넌트는 라이프사이클함수를 통해서 상태 관리를 했었음  
- 그런 이유 때문에 class형 컴포넌트는 유지보수가 어렵고 복잡해질 수 있었음.  
- react 는 컴포넌트의 상태관리와 로직을 더 간결하게 만들기 위해 hooks를 도입  
- 따라서 react 팀은 function형 컴포넌트를 권장  
- hook는 function형 컴포넌트 전용으로 설계    
### 컴포넌트 간 데이터 공유  
- 사이트에서는 mybutton으로 설명하고 있지만, 우리는 countstate로 작성했던 것을 기억하고 사이트의 설명을 봐야함  
- 각각의 countstate component는 독립적인 count가 있는 것 처럼 동작했고,  각 버튼을 클릭하면 클릭한 버튼의 count만 변경되었음.  
- 그러나 이 것은 이상한 것이 아니며, 각 component 객체가 독립적으로 동작하기 때문임.  
- component는 하나지만 count 변수도 객체로 여러 개 복사된 것이나 마찬가지이기 때문임.    
                                                    
# 2025.03.27 3주차 

### 데이터 표시하기  
- JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있음  - JSX 코드 내에서 JAVASCRIPT로 '탈출'하여 변수나 표현식을 사용하는 것  
- 이 방법을 'ESCAPE BACK' 이라고 함  
- {} 중괄호를 사용해서 변수나 표현식을 사용자에게 표시하도록 하는 것  
- SCR 속성에 변수의 값을 전달하여 이미지의 경로설정 가능   

### 스타일 추가하기  
- react 에서는 className으로 css클래스를 지정합니다.  
- className은 HTML의 class속성과 동일한 방식으로 동작  
- css규칙은 별도의 css 파일에 작성. 그러나 css파일을 추가하는 방법을 규정하지는 않음.  
- 가장간단한 방법은 html에 링크 태그를 추가하는 것  

### JSX로 마크업 작성하기  
- 앞에서 작성한 코드의 마크업 문법을 JSX라고 함  
- 반드시 사용해야 하는 것은 아니지만, REACT프로젝트에서는 편의성을 위해 JSX를 사용함.  
- JSX는 HTML보다 더욱 엄격한 문법을 적용  
- JSX에서는 싱글 태그라도 태그를 닫아야함  
- react에서는 여러 개의 component를 jsx 태그로 반환 할 수 있음  
- 다만 여러 개의 component를 wrapping 해주어야 함

### react 실행을 위한 코드작성    
####  Buttonlib.js
- function Button1() {
    return (
        <button>Button1</button>
    )
}
function Button2() {
    return (
        <button>Button2</button>
    )
}
function Button3() {
    return (
        <button>Button3</button>
    )
}

export { Button1, Button2, Button3}

### component의 생성 및 nesting(중첩)  
- 고유한 로직과 모양을 가진 ui의 일부  
- 버튼처럼 작을 수도 있고, 전체 페이지처럼 클 수도 있음  
- 마크업을 반환하는 javascript의 함수  

- nesting은 css선택자의 중첩 구조를 생각하면 쉽게 이해할 수 있음.  

### export default and export 차이   
- Named Exports (export)  
    - 하나의 파일 안에 여러 개의 component가 있을 때 사용.  
    - component 를 사용하는 쪽에서는 component 정확한 이름 반드시 명시  
    - (ex) import ( add, subtract, multiply, divide) from'./math/  
- Default Exports  
    - 하나의 파일 안에서 하나의 component 만 내보내는 경우 사용  
    - component를 사용하는 쪽에서는 어떤 이름을 사용해도 상관없음  

# 2025.03.20 2주차  

### react  
- react에서 제일 중요한 단어 component  

### 의존성 관리와 package.json  
- 의존성을 관리하는 이유  
    - 손쉬운 설치 및 업데이트  
        - npm install 또는 yarn install 한 줄로 모든 의존성을 자동 설치 가능  
        - 특정 버전의 라이브러리를 쉽게 업데이트 가능  
    - 일관된 개발 환경 유지  
        - 팀원들과 같은 라이브러리 버전을 유지할 수 있음  
        - package-lock.json을 활용하면 동일한 패키지를 정확한 버전으로 설치가능.  
    - 중복 설치 방지  
        - 필요 없는 라이브러리를 제거하여 프로젝트를 가볍게 유지할 수 있음  

- package.json은 이런 의존성을 체계적으로 관리하는 역할  
- 프로젝트에 필요한 라이브러리를 쉽게 설치, 업데이트, 유지 할 수 있도록 도와주는 시스템  
### React Project의 구조 및 역할 tes 
- node_modules/  
- public/ : 정적(static) 파일을 저장하는 폴더로, 빌드 시 그대로 유지됨.  
    - favicon.ko : 라우저 탭에 표시되는 아이콘  
    - index.html : React 앱이 마운트되는  HTML 파일 <$div.id="root"><$div>가 포함되어 있음.  
    - logo192.png : PWA(progressive wep app)용 아이콘.  
    - logo512.png : PWA(progressive wep app)용 아이콘.  
    - manifest.json: PWA 관련 설정 파일.  
    - robots.txt : 검색 엔진 크롤러의 접근을 제어하는 파일  
- src : React 앱의 주요 코드가 위치하는 폴더  
    - APP.css : App.js에 적용되는 스타일  
    - App.js : 메인 컴포넌트  
    - App.test.js : jest를 사용한 기본 테스트 파일  
    - index.js : react 앱의 진입점(entry point) - ReactDom.createRoot를 사용하며 App.js를 렌더링함.  
    - logo.svg : 기본 로고 이미지.  
    - reportWebVitals.js : 성능 측정 관련 코드(선택 사항)  
    - setupTests.js : 테스트 환경 설정 파일  
- gitignore : Git에 추가하지 않을 파일 목록을 정의  
- package-lock.json: 설치된 패키지의 정확한 버전이 기록된 파일.  
- package.json : 프로젝트의 의존성 목록과 실행 스크립트가 포함된 파일  
- README.md : 프로젝트 설명 문서  

- src/  
    - react 프로젝트의 주요 코드가 위치하는 디렉토리  
    - 개발함변서 대부분의 작업이 이루어지는 곳
- src/App.js  
    - 메인 component 로 필요한 sub component를 모아서 관리  
    - 출력을 위해서 index.js로 전달  
- src/App.css  
    - app.js에 적용되는 스타일을 정의하는 스타일 파일  
- src/index.js  
    - react 앱의 진입 점(entry point)으로 최종 렌더링의 되는 곳  
    - reactDom.createRoot를 사용하며 App.js를 렌더링  
- src/index.css  
    - 전역 스타일을 정의하는 스타일 파일  
# 2025.03.13 1주차

### 깃허브 와 vscode 연동  
##### 비쥬얼스튜디오 코드에서 터미널을 통한 깃허브 연동방법을 배움.    

### Node.js의 개발과정  
- 2009년 발표된 node.js를 개발한 라이언 달은 물리학을 전공했으나 개발에 흥미를 느껴 프리랜서 개발자로 일하던 개발자였음.  

- 아파치서버는 요청을 처리할 때 블로킹 방식으로 동작 한다는 문제가 있었고 이를 해결하기 위해 비둘기 방식의 서버가 필요하다고 판단하고 개발을시작함.  

- 개발을시작할 때는 파이썬을 사용했지만 자바스크립트의 비둘기 특성이 서버 개발에 더 적합하다고 판단해 자바스크립트를 방향으로 전환함  

- 당시 크롬이 가장 빠른 브라우저로 주목받고 있었고, 그 핵심인 v8 엔진을 이용  

### node.js가 인기를 끄는 이유 ??  
 - 빠른 성능
 - 자바스크립트만으로 풀스택 개발
 - 활발한생태계
 - 실시간 애플리케이션에 강함
 - 마이크로서비스 및 서버리스 환경과의 조화로운 변동  

- deno의 등장으로 node의 경쟁자로 떠올랐지만 node의 생태계가 훨씬 크고 안정적  
es 모듈 지원 강화 , 클라우드 서버리스 환경 확대 

###  react의 진화  
- 2024년 12월 19.0.0 버전이 공개되면서 다시 한번 많은 변화를 가져오고 있음   
- react의 주 버전은 2,3년에 한번씩 부 버전은 1년에 수차례 업그레이드되고 있음.  
- react는 이제 front end 개발자의 필수 과목이 됨.  

### react 개발환경 구축  
- 이전에는 별도로 설치해야 했기 때문에 인터넷의 오래된 자료를 보면 설치 방법이 나와있음.  
- node.js 0.6.3 버전부터 npm이 포함
