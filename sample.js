//fetch('https://developers.facebook.com/docs/')
  //  .then(function(response) {
    //    return response.json();
   // })
   // .then(function(myJson) {
    //    console.log(JSON.stringify(myJson));
   // });

function api<faBook>(url: 'https://developers.facebook.com/docs/'): Promise<faBook> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json<faBook>()
        })
}
api<{ title: string; message: string }>('v1/posts/1')
    .then(({ title, message }) => {
        console.log(title, message)
    })
    .catch(error => {
    });