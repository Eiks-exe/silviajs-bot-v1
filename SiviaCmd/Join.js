module.exports = class Join {
    static match(message) {
        return message.content == '<@!598581926898696203> join'
    }

    static action(message) {
        if (message.member.voice.channel) {
            message.member.voice.channel.join()
                .then(connection => {
                    message.delete()
                    message.reply('I have successfully connected to the channel!');

                })
                .catch(console.log);
        } else {
            message.reply('u should be connected to a channel sir');
        }
    }
}