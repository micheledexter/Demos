let httpReq;

function getJoke() {
    httpReq = new XMLHttpRequest();
    if (!httpReq) {
        console.log("Oops! Try again!");
    }
    httpReq.onreadystatechange = handleStateChangeCNJoke;
    httpReq.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true);
    httpReq.send();

    function handleStateChangeCNJoke() {
        if(httpReq.readyState === XMLHttpRequest.DONE) {
            if (httpReq.status === 200) {
                document.getElementById('current-joke').innerText = httpReq.response["value"].joke;
            } else {
                console.log('request failed');
            }
        }
    }
}

async function getJoke2() {
    const response = await fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]');
    console.log(response);

    const resBody = await response.json();
    document.getElementById('current-joke').innerText = resBody.value.joke;
}

function getJoke3() {
    fetch('http://api.icndb.com/jokes/random?limitTo=[nerdy]').then(res => {
        res.json().then(resBody => {
            document.getElementById('current-joke').innerText = resBody.value.joke;
        })
    }).catch((err) => {
        console.log(err);
    });
}