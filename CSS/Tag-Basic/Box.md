## Box Model
  <img src="https://user-images.githubusercontent.com/53371165/112750409-6e9cbf00-9003-11eb-8f51-55221427aef8.png" width="300px"><hr>
  - border-style = 테두리 스타일 지정
    - solid | dashed | dotted
  - border-color = 테두리 색상 지정
  - border-width = 테두리 두깨 지정
    ```css
    border: 1px solid red;
    => 테두리 두께: 1px 스타일: solid 색상: red
    ``` 
### Box-Sizing
  - 대표적으로 border-box
    - 패딩 값과 보더 값을 width, height에 포함시킨다.
    - 초기 넓이 값에 추가된 패딩 값과 경계 값을 모두 포함.

### Border-Radius
  - 엘리먼트 코너 둥글게 하기
  - border-radius = 테두리 좌측 상단 모서리를 기준으로 시계방향으로 상 | 우 | 하 | 좌

### Box-Shadow
  ```css
  box-shadow: inset offset-x offset-y blur color
  ```
  - inset = 보더 기준으로 안쪽으로 그림자를 표시함
  - offset-x = 그림자 가로로 이동할 픽셀( +는 오른쪽, -는 왼쪽 )
  - offset-y = 그림자 세로로 이동할 픽셀( +는 아래쪽, -는 위쪽 )
  - blur = 그림자 가장자리를 부드럽게 처리하는 정도(기본값 0)
  - color = 그림자 색상 지정(색상을 지정하지 않을 경우 글자 색을 따름)