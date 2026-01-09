import { useState, useEffect } from 'react'
import styles from './StaffSection.module.css'

const StaffSection = ({ visibleSections }) => {
  const groups = [
    { 
      name: '교역자', 
      photoUrl: '/assets/staff/group-pastors.jpg',
    },
    { 
      name: '임원교사', 
      photoUrl: '/assets/staff/group-executives.jpg',
    },
    { 
      name: '비전1 담임', 
      photoUrl: '/assets/staff/group-vision1-teachers.jpg',
    },
    { 
      name: '비전2 담임', 
      photoUrl: '/assets/staff/group-vision2-teachers.jpg',
    },
    { 
      name: '사역팀', 
      photoUrl: '/assets/staff/group-ministry-team.jpg',
    },
  ]

  const isVisible = visibleSections.has('staff')

  return (
    <section id="staff" className={styles.staffSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionContent} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>Staff</h2>
          <p className={styles.sectionSubtitle}>교사 및 섬김이 소개</p>
          
          {groups.map((group, index) => (
            <div key={index} className={styles.groupContainer}>
              <div className={styles.groupPhotoContainer}>
                <img
                  src={group.photoUrl}
                  alt={group.name}
                  className={styles.groupPhoto}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="${styles.photoPlaceholder}">${group.name}</div>`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StaffSection
