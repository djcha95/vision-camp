import { useState, useEffect } from 'react'
import styles from './WorshipFlowSection.module.css'

const WorshipFlowSection = ({ visibleSections }) => {
  const worshipFlow = [
    { time: '09:20-09:40', activity: '양육', description: '말씀과 기도로 예배 준비' },
    { time: '09:40-10:40', activity: '몸찬양 연습', description: 'C2G 팀 연습' },
    { time: '10:40-10:45', activity: '공간 정리', description: '연습 후 정리' },
    { time: '10:45-11:15', activity: '합동 연습', description: 'C2G + ONworship 함께 연습' },
    { time: '11:15-11:20', activity: '기도 및 예배 준비', description: '최종 점검 및 기도' },
    { time: '11:20-12:30', activity: '예배', description: '주일 예배' },
  ]

  const isVisible = visibleSections.has('worship-flow')

  return (
    <section id="worship-flow" className={styles.worshipFlowSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionContent} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Worship Flow</h2>
          <p className={styles.sectionSubtitle}>예배 구성 및 시간표</p>
          
          {/* 데스크탑 테이블 */}
          <div className={styles.tableWrapper}>
            <table className={styles.flowTable}>
              <thead>
                <tr>
                  <th>시간</th>
                  <th>활동</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                {worshipFlow.map((item, index) => (
                  <tr key={index}>
                    <td className={styles.timeCell}>{item.time}</td>
                    <td className={styles.activityCell}>{item.activity}</td>
                    <td className={styles.descriptionCell}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 모바일 카드 */}
          <div className={styles.cardWrapper}>
            {worshipFlow.map((item, index) => (
              <div key={index} className={styles.flowCard}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTime}>{item.time}</span>
                  <span className={styles.cardActivity}>{item.activity}</span>
                </div>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorshipFlowSection
