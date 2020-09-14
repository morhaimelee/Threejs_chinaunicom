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

function load1otherModel() {
    GLTFLoader_Floor1_other = new THREE.GLTFLoader();
    GLTFLoader_Floor1_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor1_other.load('./assets/inside_gltf/1floor/所有设施Draco.gltf', function (obj) {
        // model_other1 = obj.scene
        obj.scene.name = '1other'
        scene.add(obj.scene)
        // model_other1.visible = false
    })
}
function load2otherModel() {
    GLTFLoader_Floor2_other = new THREE.GLTFLoader();
    GLTFLoader_Floor2_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor2_other.load('./assets/inside_gltf/2floor/所有设施Draco.gltf', function (obj) {
        // model_other2 = obj.scene
        obj.scene.name = '2other'
        scene.add(obj.scene)
        // model_other2.visible = false
    })
}
function load3otherModel() {
    GLTFLoader_Floor3_other = new THREE.GLTFLoader();
    GLTFLoader_Floor3_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor3_other.load('./assets/inside_gltf/3floor/所有设施Draco.gltf', function (obj) {
        // model_other3 = obj.scene
        obj.scene.name = '3other'
        scene.add(obj.scene)
        // model_other3.visible = false
    })
}
function load4otherModel() {
    GLTFLoader_Floor4_other = new THREE.GLTFLoader();
    GLTFLoader_Floor4_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor4_other.load('./assets/inside_gltf/4floor/所有设施Draco.gltf', function (obj) {
        // model_other4 = obj.scene
        obj.scene.name = '4other'
        scene.add(obj.scene)
        // model_other3.visible = false
    })
}
function load5otherModel() {
    GLTFLoader_Floor5_other = new THREE.GLTFLoader();
    GLTFLoader_Floor5_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor5_other.load('./assets/inside_gltf/5floor/所有设施Draco.gltf', function (obj) {
        // model_other5 = obj.scene
        obj.scene.name = '5other'
        scene.add(obj.scene)
        // model_other5.visible = false
    })
}
function load6otherModel() {
    GLTFLoader_Floor6_other = new THREE.GLTFLoader();
    GLTFLoader_Floor6_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor6_other.load('./assets/inside_gltf/6floor/所有设施Draco.gltf', function (obj) {
        // model_other6 = obj.scene
        obj.scene.name = '6other'
        scene.add(obj.scene)
        // model_other6.visible = false
    })
}
function load7otherModel() {
    GLTFLoader_Floor7_other = new THREE.GLTFLoader();
    GLTFLoader_Floor7_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor7_other.load('./assets/inside_gltf/7floor/所有设施Draco.gltf', function (obj) {
        // model_other7 = obj.scene
        obj.scene.name = '7other'
        scene.add(obj.scene)
        // model_other7.visible = false
    })
}
function load8otherModel() {
    GLTFLoader_Floor8_other = new THREE.GLTFLoader();
    GLTFLoader_Floor8_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor8_other.load('./assets/inside_gltf/8floor/所有设施Draco.gltf', function (obj) {
        // model_other8 = obj.scene
        obj.scene.name = '8other'
        scene.add(obj.scene)
        // model_other8.visible = false
    })
}
function load9otherModel() {
    GLTFLoader_Floor9_other = new THREE.GLTFLoader();
    GLTFLoader_Floor9_other.setDRACOLoader(dracoLoader)
    GLTFLoader_Floor9_other.load('./assets/inside_gltf/9floor/所有设施Draco.gltf', function (obj) {
        model_other9 = obj.scene
        obj.scene.name = '9other'
        scene.add(obj.scene)
        // model_other9.visible = false
    })
}

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
        if (i + 'other') {
            hiddenObject(i + 'other')
        }
        if (except + 'other') {
            showObject(except + 'other')
        }
    }

    model_all_model['model_all_floor' + except].forEach(function (e) {
        e.visible = true
    })
    //隐藏所有ICON DOM

    if (!$('.f' + except).is(':hidden')) {
        $('.Icon').hide()
        $('.f' + except).show() //保留单层Icon
        //以左侧Icon状态来获取
    } else {
        $('.Icon').hide()
    }

}
//跳转楼层按钮
$('#f1').on('click', function () {
    hidden_all_floor('1floor')
    hidden_all_model(1)
    load1otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 4.95,
        y: 2.04,
        z: 4.84,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 0.612,
        y: -6.49,
        z: -1.17
    })

})
$('#f2').on('click', function () {
    hidden_all_floor('2floor')
    hidden_all_model(2)
    load2otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 2.61,
        y: 5.92,
        z: 5.46,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.38,
        y: -6.49,
        z: -0.63
    })
})
$('#f3').on('click', function () {
    hidden_all_floor('3floor')
    hidden_all_model(3)
    load3otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 1.58,
        y: 6.84,
        z: 4.29,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.55,
        y: -6.49,
        z: 0.27
    })
})
$('#f4').on('click', function () {
    hidden_all_floor('4floor')
    hidden_all_model(4)
    load4otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 2.15,
        y: 5.81,
        z: 6.57,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.35,
        y: -6.49,
        z: -2.62
    })
})
$('#f5').on('click', function () {
    hidden_all_floor('5floor')
    hidden_all_model(5)
    load5otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 2.08,
        y: 4.50,
        z: 8.11,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.35,
        y: -6.49,
        z: -2.62
    })
})
$('#f6').on('click', function () {
    hidden_all_floor('6floor')
    hidden_all_model(6)
    load6otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 2.13,
        y: 6.44,
        z: 6.01,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.36,
        y: -6.49,
        z: -2.66
    })
})
$('#f7').on('click', function () {
    hidden_all_floor('7floor')
    hidden_all_model(7)
    load7otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 1.75,
        y: 7.94,
        z: 5.61,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.59,
        y: -6.49,
        z: -2.19
    })
})
$('#f8').on('click', function () {
    hidden_all_floor('8floor')
    hidden_all_model(8)
    load8otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 1.80,
        y: 9.22,
        z: 4.77,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.52,
        y: -6.49,
        z: -2.388
    })
})
$('#f9').on('click', function () {
    hidden_all_floor('9floor')
    hidden_all_model(9)
    load9otherModel()
    tween_camera = TweenMax.to(camera.position, 5, {
        x: 1.75,
        y: 9.94,
        z: 3.20,
        ease: Expo.easeInOut, //Linear.easeNone  Cubic.easeIn
        //Power3.easeOut
    })
    tween_target = TweenMax.to(controls.target, 5, {
        x: 1.61,
        y: -6.49,
        z: -2.09
    })
})