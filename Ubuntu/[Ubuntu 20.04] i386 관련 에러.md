### i386이란?

> “리눅스 배포판이나 패키지를 다운 받을 때 보면은 i386, i586, x86, x86_64 등등 여러가지 가 있는 것을 볼 수 있는데 각 소스 코드를 각 CPU 에 적합하게 컴파일한 결과를 다운 받아 사용할 수 있도록 한 것입니다.“

윈도우에서 우분투로 옮기면서 하루일정을 notion을 사용하다가 이번에 우분투 환경에서도 Trello를 사용할 수 있다는 정보에 서버를 업데이트하는데 이러한 메시지가 나왔다.

```bash
skipping acquire of configured file 'main/binary-i386/packages' as repository 'https://packages.microsoft.com/ubuntu/20.04/prod focal inrelease' doesn't support architecture 'i386'
```

검색해본 결과 이 문제는 Google이 64비트 시스템에서 apt를 업데이트할 때 오류를 트리거하는 Linux에서 32비트 Chrome에 대한 지원을 중단해서 생긴 오류라고 한다.

### 해결 방법

```bash
sudo nano /etc/apt/sources.list
```

repo 파일에서 위 에러메시지와 관련된 줄을 찾아서 `[arch=amd64]`를 적용하여 64비트로 제한한다.

```bash
deb [arch=amd64] https://packages.microsoft.com/ubuntu/20.04/prod focal main
```

[참고 문서](https://askubuntu.com/questions/741410/skipping-acquire-of-configured-file-main-binary-i386-packages-as-repository-x)
