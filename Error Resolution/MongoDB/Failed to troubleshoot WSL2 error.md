# 제목 그대로 아직 해결 하지 못했음

1. Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution).

   - sudo apt-get -o Dpkg::Options::="--force-overwrite" install --fix-broken

2. Sub-process /usr/bin/dpkg returned an error code (1)

3. E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
   E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root?

이 상황이 반복 되는 중
해결 되면 적겠읍
