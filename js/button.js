//人员通行
$('#equipment_warning').on('click', function () {
    $('.nav_list').removeClass('selected')
    $('#people_pass').addClass('selected')
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
    $('#first_page').hide()

})
