class UI {
  constructor() {
    this.result = document.querySelector("#result");
  }
  // show any message in HTML
  printMessage(message, className) {
    // create div tag
    const div = document.createElement("div");
    // append text message to the div tag
    div.appendChild(document.createTextNode(message));
    // append class Name to the tag
    div.className = className;
    // show the message into the html
    document.querySelector("#message").appendChild(div);

    // remove message after 3second
    setTimeout(() => {
      this.removeMessage();
    }, 3000);
  }

  // remove message after showing into the html
  removeMessage() {
    const alert = document.querySelector(".alert");

    if (alert) {
      alert.remove();
    }
  }

  // showing result into the html
  showNews(news) {
    news.forEach((newsInfo) => {
      this.result.innerHTML += `
                <div class="col-md-4 mb-4>
                    <div class="card">
                        <div class="card-body">
                            <h3 class ="card-title text-center">Card title</h3>
                            <p class="card-text lead textto-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <span class="badge text-bg-primary">Primary</span>
                            <span class="badge text-bg-primary">Primary</span>
                            <a href="#" target="_blank" class="btn btn-primary btn-block">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
    });
  }
}
