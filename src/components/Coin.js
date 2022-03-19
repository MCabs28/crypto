import React from 'react'
import './Coin.css'


const Coin = ({name, image, symbol, price, volume, priceChange, marketcap}) => {

   

    return (
        <>

<div className="container">


       
                <div className="float-left card mb-2 mt-2 bg-dark">
                <img src={image} className="imgs"alt="coin icon"/>
                        <div className="card-body">
                            <h5 className="card-title text-light text-center">{name}</h5>
                            <p className="card-text text-light text-center">{symbol}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-dark text-light"><span className='text-lefts'>Price:</span>  <span className='text-rights'>${price}</span></li>
                            <li className="list-group-item bg-dark text-light"><span className='text-lefts'>Volume:</span>  <span className='text-rights'>${volume.toLocaleString()}</span></li>
                            <li className="list-group-item bg-dark text-light"><span className='text-lefts'>Price Change: </span>
                            <span className='text-rights'> {priceChange < 0 ?(
                                <span className='text-danger'>
                                    {priceChange.toFixed(2)}%
                                    </span>       
                            ) : (
                                
                            <span className='text-success'>
                                    {priceChange.toFixed(2)}%
                                    </span>   
                                
                            )}
                            </span>
                            </li>
                            <li className="list-group-item bg-dark text-light">
                              <span className='text-lefts'>Market Cap:</span>  <span className='text-rights'>${marketcap.toLocaleString()}</span>
                            </li>
                        </ul>
                </div> {/* End of card */}

       

</div>{/* End of container*/}


  
        </>
    )
  }

export default Coin