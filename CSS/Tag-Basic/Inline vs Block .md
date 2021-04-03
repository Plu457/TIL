# Inline Element
  - 한줄에 여러개 배치
  - 기본 넓이값은 컨텐츠의 넓이값
  - 크기값을 가질 수 없음
  - 상하 마진은 가질 수 없음
  - 대부분 서식태그
  ```css
  span, a, small, big, em, u, s, del, br, q, b, strong, mark, sub, sup, video, audio
  ```

# Block Element
  - 한줄에 한개반 배치
  - 기본 넓이값은 100%
  - 크기값을 가질 수 있음
  - 상하좌우 마진 가질 수 있음
  - 대부분 전체적으로 레이아웃 잡는 태그
  ```css
  div, table, figure, figcaption, caption, header, nav, footer, section, article, aside, p, blockquote, ul, ol, li, td, th, form ,hr, h1~h6
  ```

# Inlin-Block Element
  - 한줄에 여러개 배치
  - 기본 넓이값은 컨텐츠의 넓이값
  - 크기값을 가질 수 있음
  - 상하 마진은 가질 수 있음
  ```css
  img, input 태그들, button, fontawesome
  ```

# Display
  - Inline 요소와 Block 요소의 속성을 변경시키거나, 보이지 않게 할 수 있다.
    ```css
    display: inline, block, inline-block, none
             => 레이아웃 요소를 배치 및 특성을 변경하는 정말 중요한 속성과 값
    ```