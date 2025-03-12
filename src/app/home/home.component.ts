import { Component } from "@angular/core";


@Component({
    selector: 'app-home',
    imports: [],
    template: `<body>
    <h1>Willkommen bei Rapify</h1>
    <p>Die ultimative Satire-Plattform über die deutsche Rap-Szene</p>
    
    <div class="button-container">
        <a href="/ki-text" class="nav-button">AI Lyrics Generator</a>
        <a href="/quiz" class="nav-button">Quiz</a>
        <a href="/success" class="nav-button">Erfolgsgeschichten</a>
        <a href="/shop" class="nav-button">Shop</a>
        <a href="/license-gen" class="nav-button">Lizenzgenerator</a>
    </div>
</body>`,
    styles: `        body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #111;
        color: #fff;
        margin: 0;
        padding: 50px;
    }
    h1 {
        font-size: 3rem;
    }
    .button-container {
        margin-top: 30px;
    }
    .nav-button {
        display: block;
        width: 200px;
        margin: 10px auto;
        padding: 15px;
        background-color: #ff5722;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        border-radius: 8px;
        transition: background 0.3s;
    }
    .nav-button:hover {
        background-color: #e64a19;
    }`
})
export default class HomeComponent{}