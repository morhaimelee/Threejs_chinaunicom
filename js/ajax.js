$.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/monitorEquipmentOperation", function (resp) {
    let videoSrc = resp.data[0].url
    $('#equip_code').html(resp.data[0].code)
    let arr_code = []
    let arr_url = []
    $.each(resp.data, function (i, value) {
        arr_code.push(value.code)
        arr_url.push(value.url)
    })
    console.log(arr_code)
    console.log(arr_url)
    sourceDom = `<source id="source" src='' type="application/x-mpegURL" />`
    $('#welcomeVideo').append(sourceDom)

    var myVideo = videojs('welcomeVideo', {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
    })

    myVideo.play()
    //更改src
    function changeVideo(vdoSrc) {
        if (/\.m3u8$/.test(vdoSrc)) { //判断视频源是否是m3u8的格式
            myVideo.src({
                src: vdoSrc,
                type: 'application/x-mpegURL' //在重新添加视频源的时候需要给新的type的值
            })
        } else {
            myVideo.src(vdoSrc)
        }

        myVideo.load();
        myVideo.play();
    }
    changeVideo(videoSrc)

    let index = 1

    setInterval(function () {
        if (i >= arr_url.length) {
            // clearInterval()
            return
        }
        videoSrc = arr_url[index]
        console.log(videoSrc)
        $('#equip_code').html(arr_code[index])
        changeVideo(videoSrc);
        index++
    }, 30000);

})