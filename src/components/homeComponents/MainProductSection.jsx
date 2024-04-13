import React from 'react'

function MainProductSection() {
  return (
<div className="main_product_section">
        <div className="main_product_section_heading">
          Here’s what is in
          the <span>box</span>
        </div>
        <div className="product">
          <div className="product_images">
            <div className="product_image active_product_image">
              <img src="./images/productSmallImage.png" alt="" />
            </div>
            <div className="product_image">
              <img src="./images/productSmallImage.png" alt="" />
            </div>
          </div>
          <div className="selectedProductImage">
            <img src="./images/selectedImage.png" alt="" />
          </div>
          <div className="selectedProductDetail">
            <div className="selected_product_rating_section">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z" fill="#EFB749" stroke="#EFB749" stroke-width="2" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z" fill="#EFB749" stroke="#EFB749" stroke-width="2" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z" fill="#EFB749" stroke="#EFB749" stroke-width="2" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z" fill="#EFB749" stroke="#EFB749" stroke-width="2" stroke-linejoin="round" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.9108 2.23193L16.0143 8.96032L23.3725 9.83275L17.9324 14.8635L19.3765 22.1311L12.9108 18.5119L6.4452 22.1311L7.88926 14.8635L2.44922 9.83275L9.80733 8.96032L12.9108 2.23193Z" fill="#EFB749" stroke="#EFB749" stroke-width="2" stroke-linejoin="round" />
              </svg>
              <div className="rating_detail">4.9 stars based on the 188 ratings</div>
            </div>
            <div className="selected_product_heading">
              Here’s what is in the box
            </div>
            <div className="selected_product_paragraph">
              Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.
            </div>
            <div className="price_section">
              <div className="without_discount_price">$39.00</div>
              <div className="with_discount_price">$29.00</div>
              <div className="discount_persentage">
                <span>
                  10% Discount
                </span>
              </div>
            </div>
            <div className="add_to_cart_btn">
              <span>
                Add to cart - $50
              </span>
            </div>
            <div className="short_message">30 days gurantee- Fast Delivery</div>
          </div>
        </div>
      </div>
  )
}

export default MainProductSection