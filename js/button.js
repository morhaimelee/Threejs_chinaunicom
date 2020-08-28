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

    model_all_model['model_all_floor' + except].forEach(function (e) {
        e.visible = true
    })
    //隐藏所有ICON DOM
    
    if (!$('.f' + except).is(':hidden')) {
        $('.Icon').hide()
        $('.f' + except).show() //保留单层Icon
        //以左侧Icon状态来获取
    }else {
        $('.Icon').hide()
    }
    
}
//跳转楼层按钮
$('#f1').on('click', function () {
    hidden_all_floor('1floor')
    hidden_all_model(1)
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
    tween_camera = TweenMax.to(camera.position, 2, {
        x: 2.76,
        y: 4.51,
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
$('#f4').on('click', function () {
    hidden_all_floor('4floor')
    hidden_all_model(4)
    model_all_model['model_all_floor' + 4].forEach(function (e) {
        e.visible = true
    })
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