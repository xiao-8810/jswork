//冒泡排序
function bubbleSort(str){
    //把字符串切分成数组
    let arr = str.split(',')
    //声明排序步骤记录数组sortlog数组的数据用于动画演示
    let sortLog = []
    //比较轮数，数组有多少个数字，就比较数组长度-1轮
    for (let i =0;i<arr.length -1; i++){
        for (let j = 0; j<arr.length -i -1; j++){
            //比较前的数组状态和定位指针保存到sortLog中，为保持演示效果，加多两行。
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            //比较相邻的两个元素，如果左边的大，那么就把大的交换到右边
            if (arr[j] >arr[j + 1]){
                //使用解构赋值的方法，把两个元素交换位置
                [arr[j], arr[j + 1]] = [arr[j + 1],arr[j]]
                //把比较之后的数组状态和定位指针保存到sortLog中
                sortLog.push([arr.concat(), [j, j + 1]])
            }
        }
    }
    sortLog.push([arr.concat(), [-1, -1]])
    return sortLog
}
function showLog(logValuse, showElement){
    let str = ''
//解构赋值的方式，从排序日志遍历器去取出一条结果，赋值给row和pos变量
     let{
        done,
        value: [row, pos]
} = logValuse.next()
//比对一下row和pos的值是否与排序时保持一致
//console.log(row)
//console.log(pos)
//遍历row数组，构建显示当前排序状态的html代码
for (const key in row) {
    //根据定位指针数据把进行比较的数字编程红色
    let color  = pos.indexOf(Number(key)) > -1 ? 'color:red;': ''
    //设置字体大小等HTML代码
    str += '<span style="font-size:' + row[key] * 20 + 'px;' +
           color +  '">' +row[key] + '</span>'
}
showElement.innerHTML = str

if (pos[0] != -1)
    setTimeout("showLog(logValues,showDiv)", 500)   
}
function inserSort(str){
    //请自行完成插入排序用于动画演示的代码，以完成挑战任务

}