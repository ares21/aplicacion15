//JavaScript
 $(document).ready(function(e) {
    $('#principal').height($('#page1').height());
	document.addEventListener("deviceready",function(){
		
		audio=window .plugins .LowLatencyAudio;
		audio.prepoloadFX ('do','audio/DO.mp3',function(){},function(e){alert('Error'+e);});
		audio.prepoloadFX ('re','audio/RE.mp3',function(){},function(e){alert('Error'+e);});
		audio.prepoloadFX ('mi','audio/MI.mp3',function(){},function(e){alert('Error'+e);});
		audio.prepoloadFX ('fa','audio/FA.mp3',function(){},function(e){alert('Error'+e);});
		audio.prepoloadFX ('sol','audio/SOL.mp3',function(){},function(e){alert('Error'+e);});
		audio.prepoloadFX ('la','audio/LA.mp3',function(){},function(e){alert('Error'+e);});
		audio.prepoloadFX ('si','audio/SI.mp3',function(){},function(e){alert('Error'+e);});
	
	$('.nota').bind('touchstart',function(){
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
		
	}).bind('touchend',function(){
		$(this).removeClass('tocada');
	});
	
	},false);
});