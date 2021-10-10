## Float Element
  - 요소를 왼쪽 or 오른쪽에 배치할지 지정한다.
  - 2개 이상이면 가로배칭
  - 주의 !
    - HTML의 요소는 기본적으로 왼쪽에 배치된다. 왼쪽에 배치된다고 float: left 속성이 기본적으로 있는 것이 절대 아니고 float 속성의 기본값은 none이다.

### 속성
  - none(default) : float 속성 적용안함
  - left : 요소를 컨테이너 왼쪽에 배치
  - right : 요소를 컨테이너 오른쪽에 배치
  - margin: auto  => 요소를 중앙에 배치
    - 블럭요소만 margin: auto 로 중앙에 배치 할수있음
    - inline & inline-block은 안됨
    - inline & inline-block요소를 중앙으로 배치 할려면 부모요소에 text-align: center 를 놓어 준다.

### 부모요소의 높이 값을 찾는 방법
  1. parent의 높이를 자식 요소의 높이에 맞추기
  2. overflow: hidden 을 주기

## Clear Element
  - float 속성이 적둉되면 다음 요소가 float 속성을 상속받는데 Clear는 상속을 받지 못하게 한다.
  - left : 왼쪽으로 배치된 float 속성 상속을 해지
  - right : 오른쪽으로 배치된 float 속성 상속을 해지
  - both : 왼쪽 또는 오른쪽으로 배치된 모든 float 속성 상속을 해지