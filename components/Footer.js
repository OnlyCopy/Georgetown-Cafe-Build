import React from 'react'


function Footer() {
  return (
    <footer className="w-full border-t-2">
        <div className="f-content max-w-[1440px] mx-auto mt-2 px-3 pb-3">
            <span>Follow us</span>
            <ul className="my-3 flex space-x-4">
                <li>
                <a target="blank" href="https://www.facebook.com/Georgetown-Cafe-1-1909672329271844/?ref=page_internal">
                      <box-icon type='logo' color="black" name='facebook-circle'></box-icon>
                      </a>  
                </li>
                <li>
                <a target="blank" href="https://www.yelp.com/biz/georgetown-cafe-lexington">
                      <box-icon name='yelp' type='logo' ></box-icon>
                      </a>  
                </li>
            </ul>
            <div>
                <span>&copy;2022 A Caip Year Website</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer