# 202130235 최한솔  

# 2025.03.20 2주차  

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
