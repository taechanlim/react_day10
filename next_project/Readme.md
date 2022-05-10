# Next Project

npm init -y
npm install react react-dom next

next는 실행기입니다.

```json
"script":{
    "dev":"next dev -p 3001",
    "build":"next build",
    "start":"next start",
}
```

**pages**
> 폴더생성

index.jsx 파일생성

```javascript
const Index = () => {
    return(
        <>
            Hello Next
        </>
    )
}

export default Index
```

> npm run dev
하면 .next라는 폴더가 생성되는데 정보들이 담겨있기때문에 git에 올리면 안된다.


바벨설정하고싶으면 최상위디렉토리에 .babelrc 파일을 만들고 설정하면 된다.
```
{
    "presets":["next/babel"],
    "plugins": ["styled-components"]
}
```

## _app.jsx
글로벌하게 사용할수있는 파일

페이지에 관련된 컴포넌트 상위내용

## _document.jsx
npm install styled-components

HTML 레이아웃
코드가 복잡하다.
그래서 복붙을 한다.

## 라우팅
http://localhost:3001/board/list 이라하면 
pages/board/list.jsx하면 끝!

http://localhost:3001/board/view/1~22...이라하면 동적 라우팅이라 하는데
pages/board/view/[id].jsx

## 디자인

google -> Ant Design

```
npm install antd @ant-design/icons
```
