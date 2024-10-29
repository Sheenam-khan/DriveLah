import React from 'react'

const Footer = ({moveToNext}) => {
  const route = localStorage?.getItem('activeRoute') 
  return (
    <footer className="footer">
      <div>
        <button className="next-button"
          disabled={route==='/*'||route==='/access'?true:false}
          onClick={moveToNext}
        >Next</button>
      </div>
    </footer>
  )
}

export default Footer