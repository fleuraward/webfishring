const currentHost = location.host;

let hostValue;
let defaultWidgetContent;
let widgetContent;

const isLocalhost = 
  (currentHost === "localhost" || currentHost.startsWith("localhost:") || currentHost.startsWith("127.0.0.1"))  
if (isLocalhost) {
  hostValue = "localhost-display-value";  
  defaultWidgetContent = `this is a placeholder for testing purposes, so you can see what it looks like!<br><br><br>
<div class="webfish-body">
            <img class="webfish-fishimg" src="https://layercake.nekoweb.org/webring/webfishing/fish/axolotl.png">
            <p> Woah nice catch, June! You caught an axolotl! Can I ax-olotl you a question? (...I tried, ok?) </p>

            <p>Let's see what other webfishers have caught...</p>
  <div class="webfish-links">
  <a href="#">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/prev.png">
  </a>
  
  <a href="#">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/worm.png">
  </a>

  <a href="#">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/next.png">
  </a>
  </div>
  </div>`;
  widgetContent = defaultWidgetContent;
} else {
  hostValue = currentHost;
  defaultWidgetContent = `
<div class="webfish-body">
<p> Uh oh! Your fishing rod doesn't have any bait on it. Please press the worm to join the webfishring so you can hopefully catch something!</p>
  
  <a href="https://layercake.nekoweb.org/projects/webfishring">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/worm.png">
  </a>
</div>
`;
  widgetContent = `
<div class="webfish-body">
            <img class="webfish-fishimg" src="https://layercake.nekoweb.org/webring/webfishing/fish/{current.imagefish}">
            <p> Woah nice catch, {current.name}! You caught {current.fish}! {current.fishline} </p>

            <p>Let's see what other webfishers have caught...</p>
  <div class="webfish-links">
  <a href="https://{prev.host}">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/prev.png">
  </a>
  
  <a href="https://layercake.nekoweb.org/projects/webfishring">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/worm.png">
  </a>

  <a href="https://{next.host}">
  <img class="webfish-link-img" src="https://layercake.nekoweb.org/webring/webfishing/next.png">
  </a>
  </div>
  </div>`;
}

export default {
  match: 'host',
  value: hostValue,
  defaultWidget: defaultWidgetContent,
  widget: widgetContent,
  style: `
    :webring {
      font-family: ms ui gothic;
      font-size:1.2rem;
     width: 300px;
     max-width: 300px;
     margin-top: 25px;
     height:fit-content;

     .webfish-body {
    background: #ffedd5;
    color: #5b755a !important;
    border-radius: 10px;
     padding: 10px;
     height:fit-content;
}
      
    .webfish-fishimg {
    width: 100px;
    height:auto;
    display:block;
    margin:0 auto;
    margin-bottom: 10px;
    }

    
    .webfish-body::before {
    content: "Catch!";
    position:relative;
    top:-20px;
    color: #ffedd5;
    background: #5b755a;
    padding: 10px 15px;
    border-radius: 20px;
    left:0;
    }

    .webfish-body p {
    text-align:center;
    margin: 1em 0;
    }

    .webfish-body p:first-of-type {
    margin-top:0;
    }

    .webfish-links {
    display:flex;
    justify-content:space-between;
    }

    .webfish-margin-top { margin-top: 1em }

    .webfish-link-img {
    height: 30px;
    width:auto;
    display: block;
    margin:0 auto;
    }
        
    };
  `
};