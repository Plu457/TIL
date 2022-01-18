# Form 이란?

Form은 전에 작성된 HTML 문법이랑은 `완전히 다르다.`
그 이유는 전에 사용된 HTML 문법은 사용자들에게 정보를 전달하는 목적을 가졌다고 하면 이번에 배우게 될 Form은 `사용자들로부터 Input을 받기 위한 태그이다.`

# Form 구조

```html
<form action="API 주소" method="GET | POST"></form>
```

- action: form 태그에 입력된 내용을 처리하는 서버 프로그램의 URI를 지정하는 역할을 한다.
  - 사용하는 방법: 먼저 `#`을 넣고 같이 협업하는 Back-end 개발자에게 `경로`를 가르쳐 달라고 한뒤 그 경로를 action 값에 넣으면 된다.
- method
  - 보통은 GET 을 적는다.
    - 보안에 취약
  - 중요한 정보 / 많응 양의 정보 -> POST
    - ex) 회원가입, 로그인 등...
- name: 폼을 구별하기위한 이름
- target: action에서 지정한 url을 새 탭에서 열어줌

# Form 태그

- input, label, fieldset, legend

## Input

- 사용자로부터 데이터를 받을때 공간을 생성해준다.
- 쉽게 말해서 우리가 흔히 보는 입력창
- 유의할점은 input 태그를 사용할때는 사용자로부터 받는 데이터의 종류가 달라서 type 속성을 반드시 써야된다.

### Type 속성

```html
<input type="text | email | password | file" />
```

- text: text의 관한 것은 모든지 받을 수 있음
- email: email 형식만 적을수 있게함
- password: 패스워드를 적을때평소 로그인 창에 보이는 \*\*\*\*같은 문자를 대신해서 적어줌
- file: 파일 / 이미지를 첨부할 수 있게 해줌
- placeholder: 입력하기 전에 보이는 안내문구
- value: 변경할수 없는 초기 값
  - placeholder 와 잘 구분하기
- minlenght: 최소 글자 수 제한
- maxlenght: 최대 글자 수 제한
- required: 입력 창에 무조건 적게함
- accept: 허용할수 있는 파일의 확장자 설정
- id: label과 연결시켜서 사용함

### label

```html
<label for="input에 있는 id값"></label>
```

- input 태그의 대한 이름정도로 이해하면 된다.
- label을 사용할때는 `for`이라는 요소를 사용해야된다.

### Radio

```html
<input type="radio" name="" value="" id="" checked />
```

- 여러 개의 항목 중에서 하나만 선택할 수 있는 동그란 모양의 버튼이다.
- `radio`가 무엇을 나타내는지 알 수 있게 위에서 배운 `label` 태그를 같이 사용한다.
- 사용된 속성
  - name: 같은 분류의 라디오버튼은 같은 이름으로 지정<br>-> name의 값이 같은 것 중에서 하나를 선택할수 있게 함
  - value: 선택을 하면 서버에 전달할 값
  - id: label과 연결시켜서 사용함
  - checked: 브라우저를 실행하는 순간부터 선택된 상태에서 시작함

#### <span style="color:red">Tip!</span>

-> `Radio`는 `Checkbox`와는 달리 선택을 해제할 수 없어서 초기화 버튼을 따로 만들어 주는게 좋다.

```html
<input type="reset" value="Reset" />
```

### Checkbox

```html
<input type="checkbox" name="" value="" id="" checked />
```

- `Radio`와는 달리 여러 개의 항목을 동시에 선택할 수 있고 선택을 해제할 수 있는 네모 모양의 버튼이다.
- `Checkbox`가 무엇을 나타내는지 알 수 있게 위에서 배운 `label` 태그를 같이 사용한다.
- 사용된 속성은 위에 있는 `Radio` 부분과 같다.

## Fieldset

```html
<form>
  <fieldset>
    <legend>이름<legend>
    <form요소>
    <form요소>
    <form요소>
  </fieldset>
</form>
```

- `Form` 요소들을 그룹으로 묶는다.
- `legend` 요소와 함께 사용해야 한다.

### Legend

- Fieldset의 대한 이름정도로 이해하면 된다.

## Textarea

```html
<textarea>내용<textarea>
```

- 많은 양의 데이터를 받을 수 있음
- `<input type="text">` 은 여러 줄의 긴 문자은 적을 수 없지만 `textarea` 는 여러 줄의 긴 문장을 적을 수 있는 장점이 있다.

## Select

```html
<select name="" id="">
  <option value="">내용</option>
  <option value="">내용</option>
</select>
```

- 드롭박스를 만드는 태그이다.
- 항목들은 option 태그로 추가할 수 있다.
- 사용할 수 있는 속성
  - name: 항목들을 묶은 `select` 태그의 이름
  - id: label과 연결시켜서 사용함
  - autofocus: 브라우저가 실행되는 순간부터 해당 목록으로 보이게함
  - multiple: 항목들을 복수 선택 가능하게 함
  - size: 항목들의 개수들을 조절할 수 있음
  - required: 설정된 선택지를 반드시 선택하게 함
  - disabled: 선택할 수 없게 함

## Button

```html
<button type="button | submit | reset">버튼</button>
```

- `button` 을 사용할 때는 꼭 `type` 속성을 써야된다.
  - button: javascript를 통해서 작동 시킬 수 있다.
  - submit: `form` 을 제출할 때 자주 씀
  - reset: 작성했던 `form`을 다시 작성하고 싶을 때 사용함.  
    -> 쓸 일이 별로 없다.
