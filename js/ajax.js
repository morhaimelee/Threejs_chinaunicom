$.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/monitorEquipmentOperation", function (resp) {
    console.log(resp)
    // $('#source').attr('src', resp.data[0].url)
    let videoSrc = resp.data[0].url
    $('#equip_code').html(resp.data[0].code)
    sourceDom = `<source id="source" src='' type="application/x-mpegURL" />`
    $('#welcomeVideo').append(sourceDom)

    // document.getElementById("source").src = videoSrc;
    // document.getElementById("welcomeVideo").play();
    //videojs
    var myVideo = videojs('welcomeVideo', {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
    })

    myVideo.play()

    var changeVideo = function (vdoSrc) {
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
    changeVideo(videoSrc);
    // var src = 'http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8';
    // document.querySelector('.qiehuan').addEventListener('click', function () {
    //     changeVideo(videoSrc);
    // })


})