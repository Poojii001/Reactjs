import React from 'react'

export default function BootstrapExample() {
  let data = [
    { id: 1001, name: "Product1", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/1.webp" },
    { id: 1002, name: "Product2", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p.webp" },
    { id: 1003, name: "Product3", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p2.webp" },
    { id: 1004, name: "Product4", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p3.webp" },
    { id: 1005, name: "Product5", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p4.webp" },
    { id: 1006, name: "Product6", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p5.webp" },
    { id: 1007, name: "Product7", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p6.webp" },
    { id: 1008, name: "Product8", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p7.webp" },
    { id: 1009, name: "Product9", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p8.webp" },
    { id: 10010, name: "Product10", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p9.webp" },
    { id: 10011, name: "Product11", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p10.webp" },
    { id: 10012, name: "Product12", basePrice: 2250, discount: 50, finalPrice: 1200, pic: "./src/assets/images/p11.webp" },
  ]


  return (
    <>
      {/* <h1 className='bg-primary text-center text-light p-5'>BootstrapExample</h1> */}

      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">ECOM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Features</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">FAQ</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">Contact Us</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pooja Pal
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Cart</a></li>
                  <li><a className="dropdown-item" href="#">Checkout </a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/assets/images/img1.jpg" height={550} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/img7.webp" height={550} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/img8.webp" height={550} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/img2.jpg" height={550} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/img3.jpg" height={550} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/img1.jpg" height={550} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/images/img4.jpg" height={550} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid my-30">
        <h5 className='background text-light text-center p-2'>Latest Products</h5>
        <div className="row">
          {
            data.map((item) => {
              return <div key={item.id} className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                <div className="card">
                  <img src={item.pic} height={250} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><del>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice} <sup>{item.discount}% Off</sup></p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
            })
          }
        </div>

        <div className="row">
          <div className="col-md-6 mt-2">
            <img src="./src/assets/images/img3.jpg" height={450} alt="Banner" className='w-100' />
          </div>
          <div className="col-md-6">
            <h5 className='background text-center p-2 text-light mt-2'>Do yuo have any Query? Contact Us</h5>
            <form>
              <div className="row">
                <div className="col-12-mb-3">
                  <label className='form-label'>Name*</label>
                  <input type="text" name="name" placeholder='Full Name' className='form-control border-primary' />
                </div>
                <div className="col-md-6 mb-3 mt-3">
                  <label className='form-label'>Email*</label>
                  <input type="email" name="email" placeholder='Email Address' className='form-control border-primary' />
                </div>

                <div className="col-md-6 mb-3 mt-3" >
                  <label className='form-label'>Phone*</label>
                  <input type="text" name="phone" placeholder='Phone Number' className='form-control border-primary' />
                </div>
                <div className="col-12-mb-3">
                  <label className='form-label'>Subject*</label>
                  <input type="text" name="subject" placeholder='subject' className='form-control border-primary' />
                </div>
                <div className="col-12-mb-3 mt-3">
                  <label className='form-label'>Message*</label>
                  <textarea name="message" placeholder='Message' className='form-control border-primary'></textarea>
                </div>

                <div className="col-12 mt-3">
                  <button type='submit' className='btn btn-primary background w-100'>Submit</button>
                 
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
