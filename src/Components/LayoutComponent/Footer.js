import React from 'react'

const Footer = (props) => {
  const details = localStorage?.getItem('activeRoute') 
  const completed = localStorage?.getItem('completed') || false 
  return (
    <footer className="footer">
      <div>
        <button className="next-button"
          onClick={props?.moveToNext}
        >Next</button>
      </div>
    </footer>
  )
}

export default Footer