## Transition
  - 지정할 속성에 변화나 움직임을 주고 싶을 경우, 일정 시간 간격을 두고 그 속성에 변화 혹은 움직임을 부드럽게 해주는 기능
  - 손쉽게 Animation기능 구현 가능

### Transition-property
  - none : 변화를 줄 대상이 없다.
  - all : transition 효과 측 변환할 모든 대상
  - 속성명 : 변화를 줄 속성을 하나씩, 복수의 경우 [ , ] 로 구분한 후 지정

### Transition-duration
  - 변화를 일으키는 시간
  - 초( s ), 밀리초( MS )단위 사용

### Transition-timing-function
  - 변환하는 속도의 패턴 지정
    - ease = 천천히 시작해서 도중에 빨라졌다가 느려짐
    - ease-in = 천천히 시작해서 점점 가속
    - ease-out = 빨리 시작해서 느려짐
    - ease-in-out = 천천히 시작하고, 천천히 가속해서, 느려짐
    - linear = 일정한 속도
    - cubic-bezier = 개발자 도구에서 사용가능

### Transition-delay
  - 처음에 딜레이를 주면서 시작함
  - 초( s ), 밀리초( ms )단위 사용