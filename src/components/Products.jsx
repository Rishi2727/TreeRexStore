import React, {useState, useEffect}from 'react';
import Skeleton from 'react-loading-skeleton';
export default function Products() {

    const[data, setData] =useState([]);
    const[filter,setFilter]=useState(data);
    const[loading, setLoading]=useState(false);
    let componentMounted = true;

    useEffect(()=>{
        const getProducts = async () =>{
            setLoading(true);
            const response = await fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () =>{
                componentMounted = false;
            }
        }
        getProducts();
    }, [])
    const Loading =() =>{
        return(
            <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const ShowProducts =()=> {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>Electronic</button>
                </div>
                {/* .............................................................................search bar */}
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder='Search your products' aria-label="Amount (to the nearest dollar)" />
                    <span class="input-group-text"><i class="fa fa-search " aria-hidden="true"></i></span>
                </div>

                
                {filter.map((product)=>{
                    return (
                      <>
                        <div className="col-md-3 mb-4">
                          <div className="card h-100 " key={product.id}>
                            <img src={product.imageURL} className="card-img-top pt-5" alt={product.name} />
                            <div className="card-body">
                              <h5 className="card-title card-img-overlay ">{product.name.substring(0,12)}</h5>
                              <p className="card-text align-middle fs-3 fw-bolder">
                              {product.currency} {product.price}
                              
                              &nbsp; <a href="#" className="btn btn-primary float-end"><i className="fa fa-shopping-cart ">&nbsp;</i>
                                Add to Cart
                              </a></p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                })}
            </>
        )
    }
  return (
    <div>


        <div class="container-fluid">
        <div class="row">
            <div class="col-md-auto my-5 py-5">
            {/* ...........................................left menu */}
            <h5>Colour</h5>
            <ul className="mx-auto navbar-nav mb-3 mt-0">
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault"> Red</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Blue</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Green</label>
                </li>
            </ul>
            <h5>Gender</h5>
            <ul className="mx-auto navbar-nav mb-3 mt-0">
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Men</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Women</label>
                </li>
            </ul>
            <h5>Price</h5>
            <ul className="mx-auto navbar-nav mb-3 mt-0">
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">INR 0 - INR 250</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">INR 250 - INR 450</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">INR 450</label>
                </li>
            </ul>
            <h5>Type</h5>
            <ul className="mx-auto navbar-nav mb-3 mt-0">
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Polo</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Hoodie</label>
                </li>
                <li className="nav-item">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">Basic</label>
                </li>
            </ul>
            </div>
            <div class="col">
            {/* ...........................................card display container */}
            <div className="container my-5 py-5">
                <div className="row">
                 <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
                    <hr/>
                 </div>
                </div>
            <div className="row ">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
        </div>
        </div>
        </div>


    </div>
  )
}


// ......................time =2218 url https://www.youtube.com/watch?v=SSXA2XluIBU
