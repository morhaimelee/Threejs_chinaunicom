//首屏监控切换
// $.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/monitorEquipmentOperation", function (resp) {
//     let videoSrc = resp.data[0].url
//     $('#equip_code').html(resp.data[0].code)
//     let arr_code = []
//     let arr_url = []
//     $.each(resp.data, function (i, value) {
//         arr_code.push(value.code)
//         arr_url.push(value.url)
//     })
//     sourceDom = `<source id="source" src='' type="application/x-mpegURL" />`
//     $('#welcomeVideo').append(sourceDom)

//     // var video = document.getElementById('welcomeVideo');
//     // var hls = new Hls();

//     // function play() {
//     //     hls.loadSource(arr_url[index]);
//     //     hls.attachMedia(video);
//     //     hls.on(Hls.Events.MANIFEST_PARSED, function() {
//     //         video.play();
//     //     });
//     // }
//     var myVideo = videojs('welcomeVideo', {
//         bigPlayButton: true,
//         textTrackDisplay: false,
//         posterImage: false,
//         errorDisplay: false,
//     })

//     myVideo.play()
//     //更改src
//     function changeVideo(vdoSrc) {
//         if (/\.m3u8$/.test(vdoSrc)) { //判断视频源是否是m3u8的格式
//             myVideo.src({
//                 src: vdoSrc,
//                 type: 'application/x-mpegURL' //在重新添加视频源的时候需要给新的type的值
//             })
//         } else {
//             myVideo.src(vdoSrc)
//         }

//         myVideo.load();
//         myVideo.play();
//     }
//     changeVideo(videoSrc)

//     let index = 1

//     setInterval(function () {
//         if (i >= arr_url.length) {
//             clearInterval()
//             return
//         }

//         videoSrc = arr_url[index]
//         $('#equip_code').html(arr_code[index])
//         changeVideo(videoSrc);
//         index++
//     }, 30000);

// })
// 设备在线情况
$.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/equipmentOperationStatus", function (resp) {
    // console.log(resp)
    $('#equip_num').html(resp.data.monitorStatus.totalNum)
    $('#onlineNum').html(resp.data.monitorStatus.onlineNum)
    $('#offlineNum').html(resp.data.monitorStatus.offlineNum)
    $('#repairNum').html(resp.data.monitorStatus.repairNum)
})
// 越界告警、安防
$.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/eventOutofBoundsAlarm", function (resp) {
    console.log(resp)
    $('#securityAlarm_totle').html(resp.data.securityAlarm.totalNum)
    $('#securityAlarm_unHandlerNum').html(resp.data.securityAlarm.unHandlerNum)
    $('#securityAlarm_handlerNum').html(resp.data.securityAlarm.handlerNum)
    //cross_box
    let auto_warn = resp.data
    console.log(auto_warn)
    var html = template("cross_temp", auto_warn);
    document.getElementById('cross_box').innerHTML = html
})

//人员状况、访客进入管理
$.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/personnelStatus", function (resp) {
    // console.log(resp)
    // console.log(resp.data)
    // var data_real = resp.data

    // var html = template("tmpl", resp);
    // document.getElementById('try_template').innerHTML = html

})
//车辆进出记录
$.get("http://zhly.zhiyanginfo.top:9000/smart-bldg/big/screen/carInAndOutRecords", function (resp) {
    // console.log(resp)

})