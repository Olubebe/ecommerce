const createNav = () => {
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
    <div class="nav">
    <h2 class="brand-logo">Vest</h2>
    <div class="nav-items">
      <div class="search">
        <input type="text" class="search-box" placeholder="search brand, product">
        <button class="search-button">search</button>
      </div>
      <a href="#"><img src="img/user.png" alt=""></a>
      <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
  </div>
  <ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Women</a></li>
    <li class="link-item"><a href="#" class="link">Men</a></li>
    <li class="link-item"><a href="#" class="link">Kids</a></li>
    <li class="link-item"><a href="#" class="link">Accessories</a></li>
  </ul>
    `;
}

createNav()