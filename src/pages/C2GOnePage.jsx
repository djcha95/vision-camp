import { useState, useEffect } from 'react'
import './C2GOnePage.css'

const C2GOnePage = () => {
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

  const voicesData = [
    {
      id: 1,
      name: '김예서',
      role: '고2',
      quote: 'CtoG에서 춤을 추며 하나님께 영광을 돌릴 수 있어서 행복해요. 함께하는 팀원들과의 우정도 정말 소중하고요!',
    },
    {
      id: 2,
      name: '조유진',
      role: '중3',
      quote: '매주 연습하는 시간이 너무 기대돼요. 춤을 통해 하나님을 찬양하고, 동시에 실력도 늘어가는 게 뿌듯해요.',
    },
    {
      id: 3,
      name: '박하선',
      role: '중2',
      quote: '처음엔 춤이 어려웠지만, 선배들과 팀원들이 도와줘서 이제는 즐겁게 참여할 수 있게 되었어요!',
    },
    {
      id: 4,
      name: '박천휘',
      role: '중2',
      quote: 'CtoG 덕분에 자신감이 생겼어요. 무대에 서는 경험이 제 인생에 큰 변화를 가져다줬어요.',
    },
    {
      id: 5,
      name: '이하은',
      role: '중2',
      quote: '춤을 좋아하는 친구들과 함께 하나님을 찬양할 수 있어서 정말 감사해요. CtoG는 제게 두 번째 가족이에요.',
    },
    {
      id: 6,
      name: '이서인',
      role: '중2',
      quote: '연습 과정에서 인내심과 팀워크를 배웠어요. 주일 예배 때 찬양 댄스를 드릴 수 있어서 영광이에요!',
    },
    {
      id: 7,
      name: '진서은',
      role: '중2',
      quote: 'CtoG에서 만난 친구들과 함께 성장하는 게 즐거워요. 춤으로 하나님께 드리는 예배가 정말 특별해요.',
    },
  ]

  const whatWeDoData = [
    {
      id: 1,
      title: '찬양 댄스',
      description: '주일 예배와 특별 예배에서 찬양 댄스를 통해 하나님께 영광을 돌려요. 다양한 장르의 음악에 맞춰 의미 있는 안무를 선보이며, 함께 하나님께 가까이 가요.',
    },
    {
      id: 2,
      title: '정기 연습',
      description: '매주 정기적으로 모여 함께 연습하며 실력을 키워가요. 기본기부터 팀워크까지 체계적으로 배우고, 서로 도우며 성장해요.',
    },
    {
      id: 3,
      title: '커뮤니티',
      description: '춤을 사랑하는 중고등부 친구들이 함께 모여 친교를 나누고, 서로를 격려하며 함께 성장하는 따뜻한 공동체예요.',
    },
  ]

  return (
    <div className="c2g-onepage">
      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            CtoG
          </div>
          <nav className="nav">
            <button onClick={() => scrollToSection('about')}>소개</button>
            <button onClick={() => scrollToSection('whatwedo')}>활동</button>
            <button onClick={() => scrollToSection('voices')}>팀원 소개</button>
            <button onClick={() => scrollToSection('media')}>미디어</button>
            <button onClick={() => scrollToSection('footer')}>문의</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="hero">
        <div className={`hero-content ${visibleSections.has('hero') ? 'visible' : ''}`}>
          <h1 className="hero-title">CtoG</h1>
          <p className="hero-subtitle">Close to God</p>
          <p className="hero-tagline">인천중앙감리교회 중고등부 CCD 댄스팀</p>
          <p className="hero-description">
            춤으로 하나님께 가까이 가며<br />
            함께 성장하는 따뜻한 공동체
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('media')}>
              영상 보기
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
            <h2 className="section-title">About CtoG</h2>
            <div className="about-content">
              <p className="about-text">
                CtoG는 "Close to God"의 약자로, 인천중앙감리교회 중고등부 청년들이 모여 춤을 통해 하나님께 가까이 가며
                찬양하고 예배하는 댄스팀이에요. 우리는 단순히 춤을 추는 것을 넘어, 함께 모여 기도하고,
                연습하며, 서로를 격려하는 따뜻한 공동체로 성장해가고 있어요.
              </p>
              <p className="about-text">
                매주 정기 연습을 통해 실력을 키우고, 주일 예배와 특별 예배에서 찬양 댄스를 선보이며
                하나님께 영광을 돌려요. CtoG는 춤을 사랑하는 모든 중고등부 친구들에게 열려있는 공간이에요.
                함께 하나님께 가까이 가며 성장해요!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="whatwedo" className="whatwedo">
        <div className="container">
          <div className={`section-content ${visibleSections.has('whatwedo') ? 'visible' : ''}`}>
            <h2 className="section-title">What We Do</h2>
            <div className="cards-grid">
              {whatWeDoData.map((card) => (
                <div key={card.id} className="card">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              ))}
            </div>
            <div className="team-info">
              <div className="team-section">
                <h3 className="team-section-title">담당 교역자</h3>
                <p className="team-names">김요한 목사님, 엄상훈 전도사님</p>
              </div>
              <div className="team-section">
                <h3 className="team-section-title">담당 선생님</h3>
                <p className="team-names">정혜은 선생님</p>
              </div>
              <div className="team-section">
                <h3 className="team-section-title">담당 부선생님</h3>
                <p className="team-names">차동진 선생님</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section id="voices" className="voices">
        <div className="container">
          <div className={`section-content ${visibleSections.has('voices') ? 'visible' : ''}`}>
            <h2 className="section-title">Voices</h2>
            <div className="voices-grid">
              {voicesData.map((voice) => (
                <div key={voice.id} className="voice-card">
                  <div className="voice-header">
                    <h3 className="voice-name">{voice.name}</h3>
                    <span className="voice-role">{voice.role}</span>
                  </div>
                  <p className="voice-quote">"{voice.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              CtoG는 춤을 사랑하는 모든 중고등부 친구들을 환영해요!<br />
              함께 하나님께 가까이 가며 성장해요.
            </p>
            <div className="footer-contact">
              <div className="contact-section">
                <h3 className="contact-title">문의하기</h3>
                <p className="contact-info">
                  담당 교역자: 김요한 목사님, 엄상훈 전도사님<br />
                  담당 선생님: 정혜은 선생님<br />
                  담당 부선생님: 차동진 선생님<br />
                  <br />
                  교회 사무실 또는 중고등부 담당 선생님께 연락해주세요.
                </p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>인천중앙감리교회 중고등부 CCD 댄스팀 CtoG</p>
              <p>&copy; 2024 CtoG. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default C2GOnePage
