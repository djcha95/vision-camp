import { useState, useEffect } from 'react'
import './VisionCampOnePage.css'
import StaffSection from '../components/StaffSection'
import WorshipFlowSection from '../components/WorshipFlowSection'
import YearPlanSection from '../components/YearPlanSection'

const VisionCampOnePage = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const visionCamp1Teams = [
    {
      id: 1,
      name: 'C2G',
      fullName: 'Close to God',
      description: '비전캠프 나이대에 맞는 살아있는 예배를 드릴 수 있도록, 비전캠프 찬양에 몸찬양으로 예배의 활력을 도모하는 CCD팀',
      type: 'CCD팀',
      members: ['김예서', '조유진', '이서인', '이하은', '진서은', '박하선', '박천휘'],
    },
    {
      id: 2,
      name: 'ONworship',
      fullName: 'ONworship',
      description: '찬양을 통하여 모두 함께 예배의 시작과 끝을 온전히 주님께 드릴 수 있도록 이끄는 찬양팀',
      type: '찬양팀',
      members: [],
    },
  ]

  const visionCamp2Teams = [
    {
      id: 3,
      name: 'C2G',
      fullName: 'Close to God',
      description: '비전캠프 나이대에 맞는 살아있는 예배를 드릴 수 있도록, 비전캠프 찬양에 몸찬양으로 예배의 활력을 도모하는 CCD팀',
      type: 'CCD팀',
      members: [],
    },
    {
      id: 4,
      name: 'ONworship',
      fullName: 'ONworship',
      description: '찬양을 통하여 모두 함께 예배의 시작과 끝을 온전히 주님께 드릴 수 있도록 이끄는 찬양팀',
      type: '찬양팀',
      members: [],
    },
  ]

  const c2gMembers = [
    {
      id: 1,
      name: '김예서',
      role: '고2',
      quote: 'C2G에서 춤을 추며 하나님께 영광을 돌릴 수 있어서 행복해요. 함께하는 팀원들과의 우정도 정말 소중하고요!',
    },
    {
      id: 2,
      name: '조유진',
      role: '중3',
      quote: '매주 연습하는 시간이 너무 기대돼요. 춤을 통해 하나님을 찬양하고, 동시에 실력도 늘어가는 게 뿌듯해요.',
    },
    {
      id: 3,
      name: '이서인',
      role: '중2',
      quote: '연습 과정에서 인내심과 팀워크를 배웠어요. 주일 예배 때 찬양 댄스를 드릴 수 있어서 영광이에요!',
    },
    {
      id: 4,
      name: '이하은',
      role: '중2',
      quote: '춤을 좋아하는 친구들과 함께 하나님을 찬양할 수 있어서 정말 감사해요. C2G는 제게 두 번째 가족이에요.',
    },
    {
      id: 5,
      name: '진서은',
      role: '중2',
      quote: 'C2G에서 만난 친구들과 함께 성장하는 게 즐거워요. 춤으로 하나님께 드리는 예배가 정말 특별해요.',
    },
    {
      id: 6,
      name: '박하선',
      role: '중2',
      quote: '처음엔 춤이 어려웠지만, 선배들과 팀원들이 도와줘서 이제는 즐겁게 참여할 수 있게 되었어요!',
    },
    {
      id: 7,
      name: '박천휘',
      role: '중2',
      quote: 'C2G 덕분에 자신감이 생겼어요. 무대에 서는 경험이 제 인생에 큰 변화를 가져다줬어요.',
    },
  ]

  const onworshipMembers = {
    인도자: ['송민규 선생님'],
    성어: ['최진성', '문지림', '김혜림', '김채림', '문지민', '황지윤', '진서준', '홍서경', '안시우', '김윤아'],
    건반: ['이하경', '이하윤'],
    드럼: ['박예성', '김이현'],
    기타: ['김규리'],
    베이스: ['김화목'],
    음향: ['문성웅 선생님'],
    자막: ['차수진 선생님', '김승현 선생님'],
  }

  return (
    <div className="visioncamp-onepage">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            인천중앙교회 비전캠프
          </div>
          <nav className="nav">
            <button onClick={() => scrollToSection('about')}>소개</button>
            <button onClick={() => scrollToSection('visioncamp1')}>비전캠프 1</button>
            <button onClick={() => scrollToSection('visioncamp2')}>비전캠프 2</button>
            <button onClick={() => scrollToSection('teams')}>찬양 사역팀</button>
            <button onClick={() => scrollToSection('staff')}>Staff</button>
            <button onClick={() => scrollToSection('worship-flow')}>예배 구성</button>
            <button onClick={() => scrollToSection('year-plan')}>연간 계획</button>
            <button onClick={() => scrollToSection('media')}>미디어</button>
            <button onClick={() => scrollToSection('footer')}>문의</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className={`hero-content ${visibleSections.has('hero') ? 'visible' : ''}`}>
          <h1 className="hero-title">비전캠프 2026</h1>
          <p className="hero-subtitle">Vision Camp 2026</p>
          <p className="hero-tagline">인천중앙감리교회 비전캠프</p>
          <p className="hero-description">
            초등학교 5학년부터 고등학교 3학년까지<br />
            함께 하나님을 향해 달려가는 청년 공동체
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('visioncamp1')}>
              비전캠프 1 보기
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('visioncamp2')}>
              비전캠프 2 보기
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('footer')}>
              함께하기
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <div className={`section-content ${visibleSections.has('about') ? 'visible' : ''}`}>
            <h2 className="section-title">About 비전캠프</h2>
            <div className="about-content">
              <p className="about-text">
                인천중앙감리교회 비전캠프는 초등학교 5학년부터 고등학교 3학년까지의
                청소년들이 함께 모여 하나님을 향한 비전을 세우고, 함께 성장하는 공동체예요.
              </p>
              <p className="about-text">
                인천중앙감리교회 비전캠프는 비전캠프 1(초5~중2)과 비전캠프 2(중3~고3)로 나뉘어져 있으며, 각 캠프 안에는 C2G(Close to God) CCD팀과 
                ONworship 찬양팀이 함께 있어요. 두 팀은 함께 연습하고 협력하며, 각자의 재능과 열정을 통해
                하나님께 영광을 돌리는 청년들이 함께하고 있어요.
              </p>
              <p className="about-text">
                함께 기도하고, 함께 예배하고, 함께 성장하며 하나님의 나라를 향해 달려가는
                따뜻한 공동체입니다.
              </p>
            </div>
            <div className="grade-info">
              <h3 className="grade-title">참여 대상</h3>
              <div className="camp-grades">
                <div className="camp-grade-group">
                  <h4 className="camp-grade-title">비전캠프 1</h4>
                  <div className="grade-grid">
                    <div className="grade-item">초등학교 5학년</div>
                    <div className="grade-item">초등학교 6학년</div>
                    <div className="grade-item">중학교 1학년</div>
                    <div className="grade-item">중학교 2학년</div>
                  </div>
                </div>
                <div className="camp-grade-group">
                  <h4 className="camp-grade-title">비전캠프 2</h4>
                  <div className="grade-grid">
                    <div className="grade-item">중학교 3학년</div>
                    <div className="grade-item">고등학교 1학년</div>
                    <div className="grade-item">고등학교 2학년</div>
                    <div className="grade-item">고등학교 3학년</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className={`section-content ${visibleSections.has('gallery') ? 'visible' : ''}`}>
            <h2 className="section-title">우리의 모임</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img
                    src="/assets/gallery/blessing-pastor.jpg"
                    alt="목사님 축도"
                    className="gallery-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="gallery-placeholder">목사님 축도 사진</div>'
                    }}
                  />
                </div>
                <p className="gallery-caption">목사님의 축도</p>
              </div>
              <div className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img
                    src="/assets/gallery/blessing-teachers.jpg"
                    alt="선생님들의 축복"
                    className="gallery-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="gallery-placeholder">선생님들의 축복 사진</div>'
                    }}
                  />
                </div>
                <p className="gallery-caption">선생님들의 축복</p>
              </div>
              <div className="gallery-item gallery-item-wide">
                <div className="gallery-image-wrapper">
                  <img
                    src="/assets/gallery/blessing-students.jpg"
                    alt="아이들 전체 축복"
                    className="gallery-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = '<div class="gallery-placeholder">아이들 전체 축복 사진</div>'
                    }}
                  />
                </div>
                <p className="gallery-caption">축복을 받는 아이들</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Camp 1 */}
      <section id="visioncamp1" className="visioncamp-section">
        <div className="container">
          <div className={`section-content ${visibleSections.has('visioncamp1') ? 'visible' : ''}`}>
            <h2 className="section-title">비전캠프 1</h2>
            <div className="camp-description">
              <p>인천중앙감리교회 비전캠프 1은 초등학교 5학년부터 중학교 2학년까지의 청소년들이 함께하는 공동체예요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Camp 2 */}
      <section id="visioncamp2" className="visioncamp-section alt">
        <div className="container">
          <div className={`section-content ${visibleSections.has('visioncamp2') ? 'visible' : ''}`}>
            <h2 className="section-title">비전캠프 2</h2>
            <div className="camp-description">
              <p>인천중앙감리교회 비전캠프 2는 중학교 3학년부터 고등학교 3학년까지의 청소년들이 함께하는 공동체예요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Detail */}
      <section id="teams" className="teams-detail">
        <div className="container">
          <div className={`section-content ${visibleSections.has('teams') ? 'visible' : ''}`}>
            <h2 className="section-title">찬양 사역팀</h2>
            
            {/* ONworship Detail */}
            <div className="team-detail-section">
              <div className="team-detail-header">
                <h3 className="team-detail-name">ONworship</h3>
                <p className="team-detail-subtitle">찬양팀 - "찬양의 목적을 아는 사람들"</p>
              </div>
              <div className="team-detail-content">
                <div className="team-role-section">
                  <h4 className="role-title">역할</h4>
                  <ul className="role-list">
                    <li>찬양을 통하여 모두 함께 예배의 시작과 끝을 온전히 주님께 드릴 수 있도록 이끌고, 학생들이 찬양을 통한 예배에 들어서는 마음의 문을 여는 역할을 합니다.</li>
                    <li>"찬양의 목적을 아는 사람들"을 2026년 ONworship 표어로 선정, 찬양팀원 각자의 신앙적 성장을 도모하고, 예배자의 본을 보이는 아이들로 거듭 날 수 있는 다음세대 신앙 모델의 역할</li>
                  </ul>
                </div>
                <div className="team-schedule-section">
                  <h4 className="schedule-title">운영 가이드</h4>
                  <div className="schedule-list">
                    <div className="schedule-item">
                      <span className="schedule-time">09:30 - 09:45</span>
                      <span className="schedule-content">양육 및 교제</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-time">09:45 - 10:30</span>
                      <span className="schedule-content">무대세팅 및 연습</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-time">10:30 - 11:00</span>
                      <span className="schedule-content">최종리허설 (C2G, 자막팀 포함)</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-time">11:00 - 11:20</span>
                      <span className="schedule-content">기도 후 예배준비</span>
                    </div>
                  </div>
                </div>
                <div className="team-leaders">
                  <div className="leader-section">
                    <h4 className="leader-title">목회팀</h4>
                    <p className="leader-names">김요한 목사님, 엄상훈 전도사님</p>
                  </div>
                  <div className="leader-section">
                    <h4 className="leader-title">인도자</h4>
                    <p className="leader-names">송민규 선생님</p>
                  </div>
                  <div className="leader-section">
                    <h4 className="leader-title">세션리더 / 보컬리더</h4>
                    <p className="leader-names">이하경 / 김채림</p>
                  </div>
                </div>
                <div className="team-members-section">
                  <h4 className="members-section-title">팀원 구성</h4>
                  <div className="members-grid">
                    {Object.entries(onworshipMembers).map(([role, members]) => (
                      <div key={role} className="members-role-group">
                        <h5 className="members-role-title">{role}</h5>
                        <div className="members-role-list">
                          {members.map((member, idx) => (
                            <span key={idx} className="member-name-tag">{member}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* C2G Detail */}
            <div className="team-detail-section">
              <div className="team-detail-header">
                <h3 className="team-detail-name">C2G</h3>
                <p className="team-detail-subtitle">Close to God - CCD팀</p>
              </div>
              <div className="team-detail-content">
                <div className="team-role-section">
                  <h4 className="role-title">역할</h4>
                  <ul className="role-list">
                    <li>비전캠프 나이대에 맞는 살아있는 예배를 드릴 수 있도록, 비전캠프 찬양에 몸찬양으로 예배의 활력을 도모합니다.</li>
                    <li>C2G를 섬기는 모든 아이들이 몸찬양을 통해 하나님께 진정으로 예배할 수 있는 예배자로 양육합니다.</li>
                  </ul>
                </div>
                <div className="team-schedule-section">
                  <h4 className="schedule-title">운영 가이드</h4>
                  <div className="schedule-list">
                    <div className="schedule-item">
                      <span className="schedule-time">09:20 - 09:40</span>
                      <span className="schedule-content">양육</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-time">09:40 - 10:40</span>
                      <span className="schedule-content">몸찬양 연습</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-time">10:40 - 10:45</span>
                      <span className="schedule-content">연습 후 공간 정리</span>
                    </div>
                    <div className="schedule-item">
                      <span className="schedule-time">10:45 - 11:15</span>
                      <span className="schedule-content">ONworship 찬양팀과 함께 연습</span>
                    </div>
                  </div>
                </div>
                <div className="team-leaders">
                  <div className="leader-section">
                    <h4 className="leader-title">목회팀</h4>
                    <p className="leader-names">김요한 목사님, 엄상훈 전도사님</p>
                  </div>
                  <div className="leader-section">
                    <h4 className="leader-title">팀장/부팀장</h4>
                    <p className="leader-names">정혜은 선생님 / 차동진 선생님</p>
                  </div>
                </div>
                <div className="team-voices">
                  <h4 className="voices-title">팀원 소개</h4>
                  <div className="members-list-simple">
                    {c2gMembers.map((member) => (
                      <span key={member.id} className="member-name-simple">
                        {member.name} ({member.role})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <StaffSection visibleSections={visibleSections} />

      {/* Worship Flow Section */}
      <WorshipFlowSection visibleSections={visibleSections} />

      {/* Year Plan Section */}
      <YearPlanSection visibleSections={visibleSections} />

      {/* Media */}
      <section id="media" className="media">
        <div className="container">
          <div className={`section-content ${visibleSections.has('media') ? 'visible' : ''}`}>
            <h2 className="section-title">Media</h2>
            <div className="media-content">
              <div className="video-placeholder">
                <div className="video-icon">▶</div>
                <p>영상이 준비되면 여기에 표시됩니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <h2 className="footer-title">함께하고 싶으신가요?</h2>
            <p className="footer-description">
              인천중앙감리교회 비전캠프는 초등학교 5학년부터 고등학교 3학년까지의 모든 청소년들을 환영해요!<br />
              함께 하나님을 향해 달려가며 성장해요.
            </p>
            <div className="footer-contact">
              <div className="contact-section">
                <h3 className="contact-title">문의하기</h3>
                <p className="contact-info">
                  담당 교역자: 김요한 목사님, 엄상훈 전도사님<br />
                  <br />
                  교회 사무실 또는 중고등부 담당 선생님께 연락해주세요.
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>인천중앙감리교회 비전캠프 2026</p>
              <p>&copy; 2026 인천중앙감리교회 비전캠프. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default VisionCampOnePage
