## Error: listen EADDRINUSE:  address already in use :::4000
## ~~~
## ~~~
## ~~~
## Emitted 'error' event on Server instance at:
## ~~~
## ~~~
라는 오류는 이미 누가 이 포트를 사용중이라는 뜻이다.<br>
해결 방법은
```
lsof -i :자신이 사용할 포트 번호
```
로 PID를 찾고
```
kill -9 PID에있는 번호
```
로 죽이면 끝이다.