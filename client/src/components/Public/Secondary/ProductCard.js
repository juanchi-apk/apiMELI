import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const ProductCard = ({image, name , price, condition, stock}) =>  {
 var cardwidth = {
   width: "300px",
   height:"300px",
   margin:"10px",
   "border-radius": "10px",
   "border-color":"black" ,
   "border-width": "1px" ,
   "border-style": "solid"
  }

 var imagewidht ={"object-fit": "scale-down", width: "200px",height:"200px" , margin: "auto"}
 var span_padding = {padding: "10px"}

 return (

  <div className="pc-page-wrapper">
  <div className="pc-page-inner">
    <div className="pc-row">
      <div className="pc-el-wrapper">
        <div className="pc-box-up">
          <img className="pc-img" src={image} alt={name}/>
          <div className="pc-img-info">
            <div className="pc-info-inner">
              <span className="pc-p-name">{name}</span>
              <span className="pc-p-company">${price}</span>
            </div>
            <div className="pc-a-size">Stock: <span className="pc-size">{stock} </span></div>
          </div>
        </div>

        <div className="pc-box-down">
          <div className="pc-h-bg">
            <div className="pc-h-bg-inner"></div>
          </div>

          <a className="pc-cart" href="#">
            <span className="pc-price">{condition}</span>
            <span className="pc-add-to-cart">
              <span className="pc-txt">Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

)}

export default ProductCard;

