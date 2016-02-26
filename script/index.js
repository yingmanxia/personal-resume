$(document).ready(function() {
	var $tabs = $("#tabs-ul li");
	var $wrapper=$(".wrapper");
	$tabs.click(function () {
        var $this= $(this);
        var $n = $this.index();
        // console.log($n);
        var topNum="-"+$n * 460+"px";
        // console.log(topNum);
        $wrapper.animate({top:topNum},400);
        $this.addClass('current');
    	$tabs.not($this).removeClass('current');
    });
});
