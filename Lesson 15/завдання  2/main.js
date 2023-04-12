
$(function(){
    let s1 = $('.s1').text();
    let s2 = $('.s2').text();
    let is = $('#second i').text();
    let qh = $('q[title="hello"]').text();
    let ab = $('a[target="_blank"]').text();
    let se2 = $('.extra:eq(1)').text()
    alert(`${s1}${s2}${is}${qh}${ab}${se2}`);
})
