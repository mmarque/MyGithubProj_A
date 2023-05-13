const templates = document.createElement("template");
templates.innerHTML = `    
<header>
<div>
  <img id="img-logo" src="JohnnyPizzaNYC.jpeg">
  <div>
    <h1 class="header">Johnny's New York Pizza</h1>
  </div>
</div>
</header>
`;
document.body.appendChild(templates.content);
