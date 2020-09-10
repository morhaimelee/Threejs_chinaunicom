$.get("https://restapi.amap.com/v3/weather/weatherInfo?parameters",
    { key: 'cb82b3c6818b5af038da1c650c55c9c7', city: 520100, extensions: 'base' },
    function (resp) {
        console.log(resp)
        // $('#weather').html(resp.lives[0].weather)
        // $('#temperature').html(resp.lives[0].temperature + "℃")
    });

