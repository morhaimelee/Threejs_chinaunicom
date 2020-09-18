//人员通行
$('#equipment_warning').on('click', function () {
    $('.nav_list').removeClass('selected')
    $('#equipment_warning').addClass('selected')
    // $('#people_moni').hide() //隐藏安防按钮
    // $('#smoke').hide() //隐藏烟感按钮
    // $('#fire_waterP').hide() //隐藏消防水压
    // $('#line_temp').hide() //隐藏线缆温度
    // $('.videoIcon').hide()
    // $('.smokeIcon').hide()
    // $('.videoLayer').hide()
    // $('.smokeLayer').hide()
    // $('.rightBox').show()
    // $('.rightBox2').hide()
    // $('#gate').show() //闸机
    $('.all_of_page').hide()
    $('#first_page').show()

})
//综合安防
$('#personnel_management').on('click', function () {
    $('.nav_list').removeClass('selected')
    $('#personnel_management').addClass('selected')

    // $('.gateIcon').hide()
    // $('.gateLayer').hide()
    // $('.rightBox').hide()
    // $('.rightBox2').show()
    // $('#gate').hide() //闸机按钮
    // $('#people_moni').show() //安防监控按钮
    // $('#smoke').show() //显示烟感按钮
    // $('#fire_waterP').show() //显示消防水压
    // $('#line_temp').show() //显示线缆温度

    // $('#back_all').css('top', '486px')
    $('.all_of_page').hide()
    $('#second_page').show()
})
//公共资源
$('#public_resource').on('click', function () {
    $('.nav_list').removeClass('selected')
    $('#public_resource').addClass('selected')
    $('.all_of_page').hide()
    $('#thrid_page').show()
})

//环境管理
$('#environmental_management').on('click', function () {
    $('.nav_list').removeClass('selected')
    $('#environmental_management').addClass('selected')
    $('.all_of_page').hide()
    $('#fourth_page').show()
})
//加载模型
var dracoLoader = new THREE.DRACOLoader();
// draco文件路径
dracoLoader.setDecoderPath('./js/Draco/')
dracoLoader.setDecoderConfig({ type: 'js' })
dracoLoader.preload()

function hidden_all_floor(except) {
    for (let i = 1; i <= 9; i++) {
        hiddenObject(i + 'floor')
    }
    showObject(except)
}
function hidden_all_model(except) {
    for (let i = 1; i <= 9; i++) {
        model_all_model['model_all_floor' + i].forEach(function (e) {
            e.visible = false
        })
    }

    for (let i = 1; i <= 9; i++) {
        hiddenObject(i + 'other')
        // if (except + 'other') {
        showObject(except + 'other')
        // }
    }

    model_all_model['model_all_floor' + except].forEach(function (e) {
        e.visible = true
    })

}
let floor_tag = 'f0'
function hidden_all_Icon() {
    if (!$('.' + floor_tag).is(':hidden')) {
        $('.Icon').hide()
        $('.' + floor_tag).show() //保留单层Icon
        //以左侧Icon状态来获取
    } else {
        $('.Icon').hide()
    }
    if ($('.' + floor_tag).is(':hidden')) {
        if ($('#video_list').hasClass('video_list_in')) {
            $('.videoIcon').each(function (i, v) {
                if (v.classList.contains(floor_tag)) {
                    v.style.display = 'block'
                }
            })
        } else if ($('#waterTank_list').hasClass('waterTank_list_in')) {
            $('.waterIcon').each(function (i, v) {
                if (v.classList.contains(floor_tag)) {
                    v.style.display = 'block'
                }
            })
        } else if ($('#smoke_list').hasClass('smoke_list_in')) {
            $('.smokeIcon').each(function (i, v) {
                if (v.classList.contains(floor_tag)) {
                    v.style.display = 'block'
                }
            })
        } else if ($('#gate_list').hasClass('gate_list_in')) {
            $('.gateIcon').each(function (i, v) {
                if (v.classList.contains(floor_tag)) {
                    v.style.display = 'block'
                }
            })
        } else if ($('#AOCN_list').hasClass('AOCN_list_in')) {
            $('.AOCNIcon').each(function (i, v) {
                if (v.classList.contains(floor_tag)) {
                    v.style.display = 'block'
                }
            })
        } else if ($('#meter_list').hasClass('meter_list_in')) {
            $('.meterIcon').each(function (i, v) {
                if (v.classList.contains(floor_tag)) {
                    v.style.display = 'block'
                }
            })
        }

    }
    //隐藏layer
    $('.Layer').hide()
}
//跳转楼层按钮
$('#f1').on('click', function () {
    hidden_all_floor('1floor')
    hidden_all_model(1)
    floor_tag = 'f1'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 4.95,
        y: 2.04,
        z: 4.84,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 0.612,
        y: -6.49,
        z: -1.17
    })

})
$('#f2').on('click', function () {
    hidden_all_floor('2floor')
    hidden_all_model(2)
    floor_tag = 'f2'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 2.61,
        y: 5.92,
        z: 5.46,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.38,
        y: -6.49,
        z: -0.63
    })
})
$('#f3').on('click', function () {
    hidden_all_floor('3floor')
    hidden_all_model(3)
    floor_tag = 'f3'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 1.58,
        y: 6.84,
        z: 4.29,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.55,
        y: -6.49,
        z: 0.27
    })
})
$('#f4').on('click', function () {
    hidden_all_floor('4floor')
    hidden_all_model(4)
    floor_tag = 'f4'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 2.15,
        y: 5.81,
        z: 6.57,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.35,
        y: -6.49,
        z: -2.62
    })
})
$('#f5').on('click', function () {
    hidden_all_floor('5floor')
    hidden_all_model(5)
    floor_tag = 'f5'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 2.08,
        y: 4.50,
        z: 8.11,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.35,
        y: -6.49,
        z: -2.62
    })
})
$('#f6').on('click', function () {
    hidden_all_floor('6floor')
    hidden_all_model(6)
    floor_tag = 'f6'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 2.13,
        y: 6.44,
        z: 6.01,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.36,
        y: -6.49,
        z: -2.66
    })
})
$('#f7').on('click', function () {
    hidden_all_floor('7floor')
    hidden_all_model(7)
    floor_tag = 'f7'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 1.75,
        y: 7.94,
        z: 5.61,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.59,
        y: -6.49,
        z: -2.19
    })
})
$('#f8').on('click', function () {
    hidden_all_floor('8floor')
    hidden_all_model(8)
    floor_tag = 'f8'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 1.80,
        y: 9.22,
        z: 4.77,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.52,
        y: -6.49,
        z: -2.388
    })
})
$('#f9').on('click', function () {
    hidden_all_floor('9floor')
    hidden_all_model(9)
    floor_tag = 'f9'
    hidden_all_Icon()
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 1.75,
        y: 9.94,
        z: 3.20,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 2, {
        x: 1.61,
        y: -6.49,
        z: -2.09
    })
})
//左侧icon点击事件
function icon_clk(list, list_in, icon) { //传参均为字符串
    $('#' + list).on('click', function () {
        if (floor_tag != 'f0') {
            if ($('#' + list).hasClass(list_in)) {
                $('.' + icon).hide()
                $('#' + list).removeClass(list_in)
                $('.Layer').hide()//layer弹窗关闭
            } else {
                $('#' + list).addClass(list_in)
                $('.' + icon).each(function (i, v) {
                    if (v.classList.contains(floor_tag)) {
                        v.style.display = 'block'
                    }
                })
            }
        }
        if (floor_tag == 'f0') {
            if ($('#' + list).hasClass(list_in)) {
                $('.' + icon).hide()
                $('.Layer').hide()//layer弹窗关闭
                $('#' + list).removeClass(list_in)
            } else {
                $('.' + icon).show()
                $('#' + list).addClass(list_in)
            }
        }
    })
}
//安防监控按钮
icon_clk('video_list', 'video_list_in', 'videoIcon')
//水箱按钮
icon_clk('waterTank_list', 'waterTank_list_in', 'waterIcon')
//烟感按钮
icon_clk('smoke_list', 'smoke_list_in', 'smokeIcon')
//闸机按钮
icon_clk('gate_list', 'gate_list_in', 'gateIcon')
//空开按钮
icon_clk('AOCN_list', 'AOCN_list_in', 'AOCNIcon')
//水电按钮
icon_clk('meter_list', 'meter_list_in', 'meterIcon')
