## 링크
```html
<a href="주소"> 내용 </a>
```
- href: 주소 또는 파일을 연결하는 속성
- 추가 속성
  - target: 연결할 주소 또는 파일을 새로운 탭으로 열지 결졍함
    - _blank: 새로운 탭으로 열기
    - _self: 현재 창에서 열기
  - title: 마우스를 올렸을 때 툴팁 텍스트를 어떻게 출력할지 결정

## 이미지
화면에 `주소`에 연결된 이미지를 나타냄
```html
<img src="주소">
```

### + 링크 & 이미지
```html
<a href="주소"><img src="주소"></a>
```

## 목록
list에서 type속성이 있는데 이건 권장하지 않고 css 속성을 사용하는것이 좋다.

### 순서있는 목록
```html
<ol>
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ol>
```
<img src="https://images.velog.io/images/plu457/post/4c080b91-1cdb-4f3a-88f1-5bf0cbc4a7b4/%EC%88%9C%EC%84%9C%20%EC%9E%88%EB%8A%94%20%EB%AA%A9%EB%A1%9D.png">

### 순서없는 목록
```html
<ul>
  <li>List</li>
  <li>List</li>
  <li>List</li>
</ul>
```
<img src="https://images.velog.io/images/plu457/post/00b60a3d-03b1-4037-87b0-129db7c1789f/%EC%88%9C%EC%84%9C%20%EC%97%86%EB%8A%94%20%EB%AA%A9%EB%A1%9D.png">