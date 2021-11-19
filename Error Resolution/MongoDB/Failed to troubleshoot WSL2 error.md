# 제목 그대로 아직 해결 하지 못했음

1. Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution).

   - sudo apt-get -o Dpkg::Options::="--force-overwrite" install --fix-broken

2. Sub-process /usr/bin/dpkg returned an error code (1)

3. E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
   E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?

이 상황이 반복 되는 중
해결 되면 적겠읍


# 왜 성공했지?
진짜로 잘 모르겠다
https://docs.microsoft.com/ko-kr/windows/wsl/tutorials/wsl-database#install-mongodb

이 문서에서 하라는 대로 하고 에러가 나오면 다시 mongodb 삭제
안되면 ubuntu 삭제 
안되면 wsl2 삭제
이렇게 반복하다가 찾아본 문서들에 있는 내용들을 사용해도
안되길레 더 이상은 몸이 못 버틸거 같아서 마지막 희망을 가지고
`cd /`를 쳐서 
`sudo rm /tmp/mongodb-27017.sock` 를 쳤더니 됬네?

아직도 왜 해결 됬는지 잘모르겠어서 리눅스를 좀 더 공부 해야 겠다.