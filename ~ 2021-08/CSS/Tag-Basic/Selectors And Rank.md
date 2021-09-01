## Selectors
### Type Selctor
  - 클래스 이름과 아이디 이름은 절대로 숫자 또는 특수 기호로 시작하면 안됨
     ```css
     p {
         text-align: center;
         color: red;
     }
     ```
### Class Selector
  - 클래스 이름이 길어지면 [ - & _ ]를 사용한다.
    ```css
    .center {
        text-align: center;
        color: red;
    }
    ```
### ID Selctor
  ```css
  #center {
        text-align: center;
      color: red;
  }
  ```
### Selector with tag
  ```css
  p.center {
        text-align: center;
      color: red;
  }
  ```
### Group Selector
  ```css
  h1, p {
        text-align: center;
      color: red;
  }
  ```
### Sub Selector
  ```css
  p span {
        text-align: center;
      color: red;
  }
  ```
### Full selector
  ```css
  * {
        font-size: 14px;
      line-height: 24px
  }
  ```
### Child, Descendant & Sibling Combinators & Parent selector
  ```html
  [Child, Descendant]
  <body   
      <section>
          <h1>Heading<h1>
          <ul>
              <li>
                  <h1>Heading in list item</h1>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
                  </p>
              </li>
          </ul>
      </section   
  </body>
  ```
  ```css
  section h1 {
      color: blue;
  section > h1 {
      color: red;
  }
  ```
  - 자식 선택자는 > 붙이는 section >h1 이고, 자손 선택자는 스페이스 바가 있는 section h1 이다
  ```html
  <body>
    <section>
        <h1>Sibling Combinators</h1>
        <ol>
            <li>Lorem Ipsum</li>
            <li class="active">simply dummy</li>
            <li>text of the printing</li>
            <li>typesetting industry</li>
            <li>Lorem Ipsum</li>
        </ol>
    </section>
  </body>
  ```
  ```css
  [active라는 클래스 다음에 오는 모든 li는 color를 주겠다.]
  .active ~ li {
      colorL blue;
  [active라는 클래스 바로 다음에 오늘 li만 color를 주겠다.]
  .active + li {
      color: red;
  }
  ```
### Structural Pseudo-Classes
  - 구조적 가상 클래스 선택자
  ```html
  <body>
    <section>
        <h1>Sibling Combinators</h1>
        <ol>
            <li>Lorem Ipsum</li>
            <li>simply dummy</li>
            <li>text of the printing</li>
            <li>typesetting industry</li>
            <li>Lorem Ipsum</li>
        </ol>
    </section>
  </body>
  ```
  ```css
  [첫번째 요소만 색을 주고 싶을때]
  li:first-child {
    color: red;
  }

  [마지막 요소만 색을 주고 싶을때]
  li:last-child {
    color: yellow;
  }

  [내가 주고싶은 순서에 색을 주고 싶을때]
  li:nth-child(순서) {
    color: red;
  }
  ```
### User Action Pseudo-Classes
  - 동적 가상 클래스
  ```html
  <body>
      <section>
          <h1>User Action Pseudo-Classes</h1>
          <input type="email" placeholder="Enter Your Email">
          <a href="#">Login</a>
      </section>
  </body>
  ```
  ```css
  [Login 버튼에 마우스를 올렸을때 색주기]
  a:hover {
    background: red;
  }

  [Login 버튼을 눌렀을때 색주기]
  a:active {
    background: blue;
  }

  [input 태그를 눌렀을때 내가 작성할수 있다는 상태를 표시하고싶을때]
  input:focus {
    border-color: blue;
  }
  ```

## CSS application priority
  1. !important Style
  2. Inline Style
  3. ID Selector Style
  4. Class Selector Style
  5. Tag Selector Style