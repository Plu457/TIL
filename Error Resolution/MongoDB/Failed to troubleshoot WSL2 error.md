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

# 과정 (기억나는 것만 적음)
1. 비정상 종료시 생성되는 mongod.lock 파일 제거
  - `sudo rm mongod.lock` 실행
  - 재실행
  - 다시 에러

2. 권한 문제 의심
  - `sudo ls -al` 실행
  - 색이 다른 mongod 파일 확인
  - 몽고DB 에 관련된 로그 및 설정 폴더를 777권한과 소유자를 mongodb로 변경
  - 다시 에러

3. service 설정 문제 의심
  - `/etc/systemd/system`에서 mongodb.service 파일 확인
  - 내용이 비었음
  - 파일 삭제하고 다시 만들고 내용 추가
  - `sudo vim mongodb.service`

4. 몇가지 방법을 더 사용했던걸로 기억하지만 해결하지못함

5. 위 상황들을 몇번씩 반복
  - ubuntu 삭제 반복
  - 과정 반복

6. 갑자기 문제 해결?
