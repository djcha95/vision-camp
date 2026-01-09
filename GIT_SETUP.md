# Git 저장소 연결 가이드

## 현재 상태
✅ Git 저장소가 초기화되었습니다.
✅ 모든 파일이 커밋되었습니다.

## 다음 단계: 원격 저장소 연결

### 1. GitHub/GitLab 등에서 새 저장소 생성
1. GitHub (https://github.com) 또는 GitLab에 로그인
2. "New repository" 클릭
3. 저장소 이름 입력 (예: `vision-camp-2026`)
4. **Public 또는 Private 선택**
5. "Create repository" 클릭
6. 저장소 URL 복사 (예: `https://github.com/username/vision-camp-2026.git`)

### 2. 원격 저장소 연결

터미널에서 다음 명령어를 실행하세요:

```bash
# 원격 저장소 추가 (URL은 위에서 복사한 것을 사용)
git remote add origin https://github.com/username/vision-camp-2026.git

# 기본 브랜치 이름을 main으로 설정
git branch -M main

# 원격 저장소에 푸시
git push -u origin main
```

### 3. 이후 업데이트 방법

코드를 수정한 후:

```bash
# 변경사항 확인
git status

# 변경된 파일 추가
git add .

# 커밋
git commit -m "변경 내용 설명"

# 원격 저장소에 푸시
git push
```

## 주의사항

⚠️ **중요**: 다음 파일들은 Git에 포함되지 않습니다 (.gitignore):
- `node_modules/` - npm 패키지 (설치하면 자동 생성)
- `dist/` - 빌드 결과물
- `.env` - 환경 변수 파일

✅ **포함되는 파일들**:
- 소스 코드 (`src/`)
- 설정 파일 (`package.json`, `vite.config.js` 등)
- 공개 에셋 (`public/`)

## 배포 옵션

### Vercel (추천)
1. https://vercel.com 에서 GitHub 계정으로 로그인
2. "New Project" 클릭
3. 저장소 선택
4. 자동으로 배포됨!

### Netlify
1. https://netlify.com 에서 GitHub 계정으로 로그인
2. "Add new site" → "Import an existing project"
3. 저장소 선택
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. "Deploy site" 클릭

### GitHub Pages
```bash
# package.json에 추가 필요
npm install --save-dev gh-pages

# 배포
npm run build
npx gh-pages -d dist
```

## 현재 커밋된 내용
- ✅ React + Vite 프로젝트 구조
- ✅ 비전캠프 소개 페이지
- ✅ Staff, Worship Flow, Year Plan 섹션
- ✅ 갤러리 섹션
- ✅ 반응형 디자인
- ✅ 모든 컴포넌트 및 스타일
