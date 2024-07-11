// show any message in html
class UI{
    printMessage(message,className){
        // create div tag
        const div = document.createElement('div')
        //append text message to the div tag
        div.appendChild(document.createTextNode(message))
        // append class Name to the tag
        div.className=className
        //show the message in to the html
        document.querySelector('#message').appendChild(div)

        //remove message 3s
        setTimeout(() => {
            this.removeMessage()
        }, 3000);
        
    }
    // remove message after showing
    removeMessage(){
        const alert = document.querySelector('.alert')
        if(alert){
            alert.remove()
        }
    }

    //showing result into the html
    showNews(news){
        console.log(news)
    }
}