# fatal unable to access '*' :could not resolve host github.com
컴퓨터를 포맷하면서 우분투를 다시 깔게되었는데 git clone 을 하니 이러한 문제가 생겼다.

## 해결방법
  ```
  $ git config --global --unset http.proxy
  $ git config --global --unset https.proxy
  ```

### 참고: https://velog.io/@kyoung99u/Linux-%EC%99%B8%EB%B6%80-%ED%86%B5%EC%8B%A0-%EC%98%A4%EB%A5%98