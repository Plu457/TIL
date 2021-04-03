## Media Tag
  - HTML문서 안에 텍스트가 아닌 어떤 형태의 데이터를 집어넣는 경우
  - Plus+
    - controls = 재생, 음향 조절 버튼
    - autoplay = 자동재생
    - loop = 반복재생

### Image Tag
  ```html
  <img src="" alt="">
  ```

### Audio Tag
  ```html
  <audio src=""></audio>
  ```
  ```html
  <audio contrals>
      <source src="경로" type="파일 종류">
      <source src="*.wav" type="*/wav">
      <source src="*.ogg" type="*/ogg">
      <source src="*.mp3" type="*/mpeg">
  </audio>
  ```

### Video Tag
  ```html
  <video src=""></video>
  ```
  ```html
  <video>
      <source src="경로" type="파일 종류">
      <source src="*.mov" type="*/mp4">
      <source src="*.mp4" type="*/mp4">
  </video>
  ```

### Iframe Tag
  - HTML 문서 안에 또 다른 HTML문서 / 컨텐츠를 넣고 싶을때 넣는 태그
  - SNS사이트에서 Share버튼을 눌러서 Embed에 있는 코드를 복사해서 붙여넣는다.
  ```html
  <iframe src=""></iframe>
  ```