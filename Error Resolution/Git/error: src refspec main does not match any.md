# error: src refspec main does not match any
이 에러가 생기는 이유는 깃헙에 pull 없이 push할 경우 기존 내용을 삭제하거나 하는 문제가 생길 수 있기 때문에, 이런 문제를 피하고자 에러메시지를 발생한다.
## 해결방법
```
git init
```
```
git add .
```
```
git commit -m "내용"
```
### 여기까지 적으면 Git 이름과 이메일을 입력하라고 하는데 밑에 명령어들을 적으면 된다.
```
git config user.name "Username"
```
```
git config user.email "Email Address"
```
```
gir remote add origin "github 주소"
```
```
git push -u origin master
```