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
        console.log(newsInfo)
      this.result.innerHTML += `
                <div class="col-md-4 mb-4>
                    <div class="card">
                        <div class="card-body">
                            <h3 class ="card-title text-center">${newsInfo.title.split('-',1)}</h3>
                            <p class="card-text lead textto-info">news information: </p>
                            <span class="badge badge-primary">Source: ${newsInfo.source.name}</span>
                            <span class="badge badge-primary">Date & time: ${newsInfo.publishedAt.split('-',2)}</span>
                            </br>
                            <a href="${newsInfo.url}" target="_blank" class="btn btn-primary btn-block">More...</a>
                        </div>
                    </div>
                </div>
            `;
    });
  }
}
