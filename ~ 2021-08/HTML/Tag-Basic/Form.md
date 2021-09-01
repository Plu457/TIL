## Form
  ```html
  <form action="API 주소" method="GET | POST"></form>
  ```
  - 사용자에게 올바른 정보를 제공하는 것에 중점을 둠
  - 사용자로부터 Input을 받기 위한 태그
  - action 값에 미리 #을 넣고 백엔드 개발자님에게 가서 넣어달라고 한다.
  - method에는 중요한 정보나 정보의 양이 많을때는 "POST" 그렇지 않으면 "GET" 을 쓴다.
## Form Tag
  1. Input
  2. Label
  3. Radio & Checkbox
  4. Select & Option
  5. Textarea
  6. Buttons
### Input Tag
  ```html
  <input type="text, number, email, password, tel, file more...">
  ```
  - 입력창, Input field
  - type은 반드시 적는다.
  - Plus+
      - placeholder = 아무 값도 없을때 기본적으로 보여주는 텍스트
      - minlength = 최소 글자 수 제한
      - maxlength = 최대 글자 수 제한
      - required = 무조건 입력하게 만듬
      - disabled = 사용할수 없게 함
      - value = 초기 값
        - placeholder와 헷갈리지 말기
        - placeholder는 복사 불가
        - value는 복사 가능
      - accept = 파일 확장자 설정
### Label Tag
  ```html
  <label for=""> 라벨 </label>
  ```
  - Form 양식에 이름을 붙이는 태그
### Radio & Checkbox Tag
  - Radio = 여러가지 항목 중에서 한 가지마 선택 가능
  - checkbox = 여러가지 항목 중에서 중복 선택 가능
  - Plus+
      - name = 동일한 설정을 하여 연관이 있다는 것을 알려줌
      - value = 구분 가능
### Select & Option Tag
  ```html
  <form action="" method="GET">
      <label for="main-skill">스킬</label>
      <select multiple name="skill" id="main-skill">
          <option value="html">HTML</opthon>
          <option value="css">CSS</opthon>
          <option value="js">JavaScript</opthon>
      </select>
      <button type="submit">
          Submit
      </button>
  </form>
  ```
    - 다중 선택을 할려면 "multiple" 추가
### Textarea Tag
  ```html
  <textarea></textarea>
  ```
  - 여러 줄을 걸쳐서 많은 양의 글을 받을때 사용
  - Plus+
    - rows = 세로 길이 조절
    - cols = 가로 길이 조절
    - CSS로 조절 가능해서 자주쓰이지는 않음
    - placeholder, required, disabled도 사용가능
### Buttons Tag
  ```html
  <button> 버튼 </button>
  ```
  - type은 꼭 넣어야된다
    - button
      ```html
      <button type="button">
          버튼
      </button>
      ```
    - submit
      ```html
      <button type="submit">
          Submit
      </button>
      ```
    - reset
      ```html
      <button type="reset">
          Reset
      </button>
      ```