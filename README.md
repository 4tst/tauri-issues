
procedures to reproduce:
1. git clone https://github.com/4tst/tauri-plugins.git
2. cd tauri-plugins
3. pnpm install
4. pnpm tauri build
5. start target/release/ipa.exe
6. check browser console, no `DOMContentLoaded` triggered
