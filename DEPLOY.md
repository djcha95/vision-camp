# GitHub Pages 배포 가이드

## 문제 해결
GitHub Pages는 **빌드된 파일**을 배포해야 합니다. 소스 파일(`src/main.jsx`)을 직접 로드할 수 없습니다.

## 해결 방법

### 방법 1: GitHub Actions 자동 배포 (추천) ✅

1. **GitHub 저장소 설정**
   - 저장소 → Settings → Pages
   - Source: "GitHub Actions" 선택
   - Save

2. **자동 배포**
   - `.github/workflows/deploy.yml` 파일이 이미 생성되어 있습니다
   - 이제 `main` 브랜치에 푸시하면 자동으로 빌드되고 배포됩니다

3. **푸시**
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

4. **배포 확인**
   - 저장소 → Actions 탭에서 배포 진행 상황 확인
   - 배포 완료 후 약 1-2분 후 사이트 접속 가능
   - URL: `https://djcha95.github.io/C2G/`

### 방법 2: 수동 배포

1. **로컬에서 빌드**
   ```bash
   npm run build
   ```

2. **dist 폴더를 gh-pages 브랜치에 배포**
   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```

3. **GitHub Pages 설정**
   - Settings → Pages
   - Source: "Deploy from a branch" 선택
   - Branch: `gh-pages` 선택
   - Folder: `/ (root)` 선택
   - Save

### 방법 3: dist 폴더 직접 업로드

1. **로컬에서 빌드**
   ```bash
   npm run build
   ```

2. **dist 폴더 내용을 main 브랜치 루트에 복사**
   - `dist` 폴더 안의 모든 파일을 프로젝트 루트로 복사
   - (권장하지 않음 - 소스와 빌드 파일이 섞임)

## 중요: base 경로 설정

`vite.config.js`에 이미 설정되어 있습니다:
```js
base: '/C2G/', // 저장소 이름에 맞게 수정
```

만약 저장소 이름이 다르다면 `vite.config.js`에서 수정하세요.

## 배포 후 확인

1. **URL 형식**: `https://djcha95.github.io/C2G/`
2. **404 에러가 나면**:
   - GitHub Actions에서 배포가 완료되었는지 확인
   - 브라우저 캐시 삭제 (Ctrl+Shift+R)
   - 몇 분 기다린 후 다시 시도

## 현재 상태

✅ `vite.config.js`에 base 경로 설정 완료
✅ GitHub Actions 워크플로우 파일 생성 완료
✅ 빌드 테스트 완료 (`dist` 폴더 생성 확인)

## 다음 단계

1. 변경사항 커밋 및 푸시:
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push
   ```

2. GitHub에서:
   - Settings → Pages → Source를 "GitHub Actions"로 변경
   - Actions 탭에서 배포 진행 상황 확인

3. 배포 완료 후 사이트 접속!
