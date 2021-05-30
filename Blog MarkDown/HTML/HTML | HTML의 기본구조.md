HTML의 기본구조는 다음과 같습니다.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css파일 경로">
</head>
<body>
  
  <script src="js파일 경로"></script>
</body>
</html>
```
이 코드들을 보면 알게되는 것이 HTML은 `태그`로 구성되어있습니다.
```
<여는태그 속성명="속성값">내용</닫는태그>
```
이제 태그의 대해서 알아볼건데 먼저 위에 있는 코드중에서 `<!DOCTYPE html>` 이라는 태그가 있는데 이 태그는 방금 말했던 기본적인 태그와는 구조다른데 그 이유는 이 태그가 현재 문서가 __HTML5__ 언어로 작성됬다고 브라우저에 알려주는 겁니다.
이제 작성된 기본적인 태그를 살펴보겠습니다.

- `<html> ~ </html>`: html 코드의 시작과 끝을 나타냅니다.

- `<head> ~ </head>`: 웹 브라우저가 이 파일에 있는 내용들을 해석하기 위해 필요한 정보들을 입력하는 부분입니다.

- `<meta>`
  - `http-equiv="항목명"`: 웹 브라우저가 서버에 명령을 내리는 속성입니다.
  - `content="정보값"`: meta 정보의 내용을 지정합니다.
  - `name="정보 이름"`: meta 정보의 이름을 지정할수있으며 지정하지 않으면 http-equiv 와 같은 기능을 합니다.

- `<body> ~ </body>`: 실제 화면에 나타나는 내용입니다.

그 외에 표현된 태그들
- `<meta charset="UTF-8">`: 브라우저에게 한글 인코딩을 UTF-8로 설정하라고 명령시킴

- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: 브라우저 호환성을 지정

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: viewport의 width를 디바이스에 맞추고 초기 배율을 1.0으로 지정했으며, 다른설정은 지정하지 않는다.