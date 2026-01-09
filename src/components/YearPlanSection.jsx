import { useState, useEffect } from 'react'
import styles from './YearPlanSection.module.css'

const YearPlanSection = ({ visibleSections }) => {
  const yearPlan = [
    { month: '3월', events: ['개강예배', '사순절 성경필사', '부활절'] },
    { month: '4월', events: ['성경퀴즈대회(1회)', '친구초청잔치', '5기 제자훈련'] },
    { month: '5월', events: ['어린이주일', '가정예배', '어린이주일 행사'] },
    { month: '6월', events: ['성경퀴즈대회(2회)', '여름수련회', '여름사역 보고예배'] },
    { month: '7월', events: ['여름수련회', '여름사역'] },
    { month: '8월', events: ['생일파티', '젊은이교회 국내선교(8/13-15)', '성경퀴즈대회(2회)'] },
    { month: '9월', events: ['고3 축복기도', '친구초청잔치(1회)', '6기 제자훈련(4주/토)'] },
    { month: '10월', events: ['성찬식', '6기 제자훈련 수료', '성경암송대회(sola scriptura)'] },
    { month: '11월', events: ['추수감사절', '중앙찬양제', '달란트 마켓데이'] },
    { month: '12월', events: ['성탄전야제', '성탄절', '진급예배', '하반기 시상'] },
  ]

  const isVisible = visibleSections.has('year-plan')

  return (
    <section id="year-plan" className={styles.yearPlanSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionContent} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Year Plan</h2>
          <p className={styles.sectionSubtitle}>
            "세상을 평화롭게 하는 비전캠프 : 평화를 누리고 흘려보내는 한 몸 공동체" (골 3:15)<br />
            2026년 비전캠프는 그리스도의 평강을 배우고 누리며 세상에 흘려보내는 다음 세대를 세웁니다.
          </p>
          
          <div className={styles.planGrid}>
            {yearPlan.map((item, index) => (
              <div key={index} className={styles.monthCard}>
                <div className={styles.monthHeader}>
                  <h3 className={styles.monthTitle}>{item.month}</h3>
                </div>
                <div className={styles.eventsContainer}>
                  {item.events.map((event, eventIndex) => (
                    <span key={eventIndex} className={styles.eventChip}>
                      {event}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default YearPlanSection
