function sort(method){
    //读取待排序数据
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    //根据传入排序的方法调用不同的排序函数
    if(method=='bubble'){
        //调用bubblesort()冒泡排序函数获取排序结果，
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        //调用insertSort()插入排序函数获取排序结果，
        logs = insertSort(origin)
    }
    //获取显示冒泡排序的div
    showDiv = document.getElementById('Anim')
    //生成排序日志数组的遍历器对象
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
}