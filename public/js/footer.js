const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <h2 class="logo">Vest</h2>
    <div class="footer-ul-container">
      <ul class="category">
        <li class="category-title">men</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshits</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
        <li><a href="#" class="footer-link">necklaces</a></li>
      </ul>
      <ul class="category">
        <li class="category-title">women</li>
        <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshits</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
        <li><a href="#" class="footer-link">necklaces</a></li>
      </ul>
    </div>
    
  </div>
  <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique atque corrupti dolorum ipsa consequuntur dolores voluptatibus, recusandae enim eum ducimus et ut deserunt blanditiis inventore laboriosam sequi labore fuga quo numquam error sit. Id aperiam amet veritatis provident ad quidem officiis nesciunt eos quibusdam quas fuga ullam et, perspiciatis a.</p>
    <p class="info">support emails - help@vest.com,
      customersupport@vest.com
    </p>
    <p class-"info">telephone - 08084444422, 09087493735</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & privacy</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
      </div>
    </div>
    <p class="footer-credit">Vest, Best apparels Online Store</p>
    `;


}

createFooter();