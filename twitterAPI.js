const Twitter = () => {
    $.ajax({
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=azelthedemon&count=20',
        method: 'GET'
    }).then(result => {
        console.log(result)
    })
};

exports.Twitter = Twitter