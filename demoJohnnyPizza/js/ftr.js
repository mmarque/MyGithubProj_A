const template = document.createElement("template");
template.innerHTML = `    
    <footer>
      <p class="copyright">
        &copy Copyright 2023 &reg All Rights Reserved.
      </p>
      
      <ul class="ftrlist">
        <li><a href="Index.html">Home</a></li>
        <li><a href="Menu.html">Menu</a></li>
        <li><a href="ContactUs.html">Contact Us</a></li>
        <li><a href="About.html">About Us</a></li>
      </ul>
      </div>
      
      </footer>
`;
document.body.appendChild(template.content);
