//定义年历生成函数
function calendar(y){
    //获取指定年份1月1日的星期数值
    var w = new Data(y, 0).getDay();

    var html = '<div class="box">';

    //拼接每个月份的表格
    for (var m=1;m<=12;++m){
        html +='<table>';
        html +='<tr class ="title"><th colspan="7">' +  '年' + m + '月</th></tr>';

        //获取月份m共有多少天
        var max = new Data(y,m,0).getDay();

        html += '<tr>';//开始<tr>标签
        for (var d = 1; d <= max; ++d){
            if(w && d == 1){//如果该月的第1天不是星期日，则填充空白
                html +='<td colspan"' +w+'"></tb>';
            }
            html += '<tb>' +d +'</tb>';
            if (w == 6 && d != max){//如果星期六不是该月的最后一天，则换行
                html += '</tr><tr>';
            }else if(d==max){//gaiyue 
                html += '</tr>';
            }
            w = (w + 1 >6)? 0 : w + 1;
        }
        html +='</table>';
    }
    html +='</div>';
    return html;
}