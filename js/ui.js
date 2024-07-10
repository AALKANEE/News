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
        
    }
    removeMessage(){
        
    }
}