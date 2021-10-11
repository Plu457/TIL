# 해결 방법

1. `cd ~/`
2. `mv .zsh_history .zsh_history_bad`
3. `strings .zsh_history_bad > .zsh_history`
4. `fc -R .zsh_history`
