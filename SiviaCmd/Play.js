

module.exports = class temp {
    static match(message) {
        if(message.content.startsWith(`${process.env.PREFIX} play `)){
            return (message.content.startsWith(`${process.env.PREFIX} play `))
        } else if(message.content.startsWith(`${process.env.MOBPREFIX}play `)){
            return (message.content.startsWith(`${process.env.MOBPREFIX}play `))
        } 
    }

    static action(message, lect) {
        let args = message.content.split(`${process.env.PREFIX} play `) // crée un array avec le contenu du msg séparé par un ' ' 
        lect.play(args[1], message)
        // reconversion du tableau en chaine de caractères
        //console.log(StrArgs)

    }
}