이번에 듀얼부팅을 하고난뒤 키보드가 있는 위치가 점점 뜨거워지는 느낌이 들기 시작했다.
그리고 찾아보니 윈도우는 배터리 관리가 잘 되는 반면에, Ubuntu는 배터리 관리와 관련된 옵션이 없다는 것을 알게되었다.
이러한 이유로 찾게된 배터리 관리 패키지는 TLP이다.

우선 TLP가 하는 역할을은 다음과 같다고 한다.

### 전원 공급 시 기능

- 커널 랩톱 모드 및 더티 버퍼 시간 초과
- '터보 부스트'및 '터보 코어'를 포함한 프로세서 주파수 조절
- 인텔 CPU의 전력 손실을 제어하기 위해 최대 / 최소 P- 상태 제한
- 인텔 CPU 에너지 / 퍼포먼스 정책 HWP.EPP 및 EPB
- 하드 디스크 APM (Advanced Power Magement Level) 및 스핀 다운 시간 초과 (디스크 당)
- 장치 블랙리스트가있는 AHCI 링크 전원 관리 (ALPM)
- 호스트 컨트롤러 및 디스크를위한 AHCI 런타임 전원 관리
- PCIe 활성 상태 전원 관리 (ASPM)
- PCIe 버스 장치를위한 런타임 전원 관리
- 인텔 GPU 주파수 제한
- 라데온 GPU 전원 관리
- 와이파이 전원 절약
- 오디오 전원 절약
- 통합 Bluetooth, Wi-Fi 및 WWAN 장치 활성화 / 비활성화
- 이동식 광 드라이브 전원 끄기 (드라이브 베이에서)이동식 광 드라이브 전원 끄기 (드라이브 베이에서)

### 추가 세팅

- I / O 스케줄러 (디스크 당)
- 장치 블랙리스트 / 화이트리스트로 USB 자동 일시 중단
- 부트 및 종료시 무선 장치 (Bluetooth, Wi-Fi 및 WWAN)를 활성화 또는 비활성화
- 부팅시 무선 장치 상태 복원 (이전 종료에서)
- 라디오 장치 마법사 : 네트워크 연결 / 분리 및 도킹 / 도킹 해제시 라디오 활성화 / 비활성화
- Wake-On-LAN 비활성화
- 일시 중단 / 최대 절전 모드 후에 Bluetooth 및 WWAN 상태가 복원 됨 -배터리 충전 임계 값 및 재 보정 – ThinkPad 전용

### 설치 방법

```bash
1. 패키지 저장소 추가
sudo add-apt-repository ppa:linrunner/tlp
sudo apt update

2. TLP 설치
sudo apt install tlp tlp-rdw

3. 씽크패드 전용 (씽크패드를 사용하는 경우 배터리 성능 효과를 위해 추가 설치)
sudo apt-get install tp-smapi-dkms acpi-call-tools

4. TLP 시작
sudo tlp start
```

TLP를 한 번만 설치하면 재부팅을 해도 자동으로 적용이된다.

### 추가 설정 (선택 사항)

```bash
sudo nano /etc/tlp.conf
```

[참고 사이트](https://pstudio411.tistory.com/entry/Ubuntu-2004-%EB%85%B8%ED%8A%B8%EB%B6%81%EC%97%94-%ED%95%84%EC%88%98-%EC%A0%84%EC%9B%90-%EA%B4%80%EB%A6%AC)
