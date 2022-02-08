## 1. 애플리케이션 속도 향상

```bash
sudo apt-get install preload -y
```

## 2. apt-get 속도 향상

우분투에서 기본적으로 제공하고 있는 다운로드 서버를 kakao에서 제공하는 `mirror.kakao.com`으로 바꾸기

```bash
sudo sed -i 's/kr.archive.ubuntu.com/mirror.kakao.com/g' /etc/apt/sources.list
```

## 3. 입력할 명령어 추천 (Plugin)

```bash
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions --depth=1
```

## 4. 명령어 하이라이팅 추가 (Plugin)

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting --depth=1
```

---

### 3, 4 플러그인 설정

```bash
code ~/.zshrc
```

```bash
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  zsh-better-npm-completion
)
```

### 참고문서

[우분투 최적화, 최근 하는 일](https://likecode.tistory.com/315)
[[우분투/Ubuntu 20.04] 우분투 다운로드 속도를 빠르게 할 미러사이트 변경](https://ieworld.tistory.com/8)
