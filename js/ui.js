class UI {
    constructor(){
        this.result = document.querySelector('#result')
    }
    // show any message in HTML
    printMessage(message, className){
        // create div tag
        const div = document.createElement('div')
        // append text message to the div tag
        div.appendChild(document.createTextNode(message))
        // append class Name to the tag
        div.className = className
        // show the message into the html
        document.querySelector('#message').appendChild(div)
        
        // remove message after 3second
        setTimeout(() => {
            this.removeMessage()
        }, 3000);
    }

    // remove message after showing into the html
    removeMessage(){
        const alert = document.querySelector('.alert')
        
        if(alert){
            alert.remove()
        }
    }

    // showing result into the html
    showNews(news){

        news.forEach(newsInfo => {
            this.result.innerHTML += `
                
            `
        });
    }
}