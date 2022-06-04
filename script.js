const input = document.querySelector('#user')
const submit = document.querySelector('#submit')

submit.addEventListener('click', function (e) {
    e.preventDefault()
    const valor = input.value
    const requesturl = 'https://api.github.com/users/'
    const concatenado = requesturl.concat(valor)
    const request = new XMLHttpRequest()
    request.open('GET', concatenado);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        const github = request.response;
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let mes = ''
        let dataMes = github.created_at
        dataMes = dataMes.slice(5, -2)
        dataMes = dataMes.slice(0, -11)
        if (Number(dataMes) == 01) {
            mes = monthNames[0]
        } else if (Number(dataMes) === 02) {
            mes = monthNames[1]
        } else if (Number(dataMes) === 03) {
            mes = monthNames[2]
        } else if (Number(dataMes) === 04) {
            mes = monthNames[3]
        } else if (Number(dataMes) === 05) {
            mes = monthNames[4]
        } else if (Number(dataMes) === 06) {
            mes = monthNames[5]
        } else if (Number(dataMes) === 07) {
            mes = monthNames[6]
        } else if (Number(dataMes) === 08) {
            mes = monthNames[7]
        } else if (Number(dataMes) === 09) {
            mes = monthNames[8]
        } else if (Number(dataMes) === 10) {
            mes = monthNames[9]
        } else if (Number(dataMes) === 11) {
            mes = monthNames[10]
        } else if (Number(dataMes) === 12) {
            mes = monthNames[11]
        }
        let DataAno = github.created_at
        DataAno = DataAno.slice(0, -16)
        let DataDia = github.created_at
        DataDia = DataDia.slice(8, -10)
        $('#user-txt').html(github.name)
        $('#link').html('@' + github.login)
        $('#link').attr('href', github.html_url)
        $('#day').html(DataDia)
        $('#month').html(mes)
        $('#year').html(DataAno)
        $('#avatar_js').attr('src', github.avatar_url)
        // $('#js_bio').html(github.bio)
        $('#js_following').html(github.following)
        $('#js_followers').html(github.followers)
        $('#js_repo').html(github.public_repos)
        if (github.blog === '') {
            $('#js_blog').html('No blog')
            $('#js_blog').attr('href', '#')
        } else {
            $('#js_blog').html(github.blog)
        }
        if (github.twitter_username === null) {
            $('#js_twitter').html('Not Available')
        } else {
            $('#js_twitter').html(github.twitter_username)
        }
        if (github.location === null) {
            $('#js_location').html('Not Available')
        } else {
            $('#js_location').html(github.location)
        }
        if (github.company === null) {
            $('#js_github').html('Not Available')
        } else {
            $('#js_github').html(github.company)
        }
    }

})