import React from 'react'
import '../../assets/CSS/CardCategorias.css'
import AutoCAD from '../../assets/Icon/AutoCAD.svg'

function CardCategories() {
  return (
    <>
      <div class="card">
        <img src={AutoCAD} alt="LOGO" />
        <h3>AtoCAD</h3>
        <p>5 Courses</p>
      </div>
    </>
  )
}

export default CardCategories