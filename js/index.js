function initializeTimer(){if(!localStorage.getItem("ever-timer")){var e={hours:0,minutes:27,seconds:0};e=3600*e.hours+60*e.minutes+e.seconds,localStorage.setItem("time",e),localStorage.setItem("ever-timer",!0)}timerSettings()}function timerSettings(){var e=localStorage.getItem("time"),t=document.querySelector(".timer-different"),i=parseInt(e/3600,10),s=parseInt((e-3600*i)/60,10),o=parseInt(e%60,10);s=s<10?"0"+s:""+s,o=o<10?"0"+o:""+o,i=i<10?"0"+i:""+i;var n=document.getElementsByClassName("hours"),r=document.getElementsByClassName("minutes"),l=document.getElementsByClassName("seconds");--e<0?localStorage.removeItem("ever-timer"):(t?(o=o.split(""),s=s.split(""),diFilling(n,i=i.split("")),diFilling(r,s),diFilling(l,o)):(filling(n,i),filling(r,s),filling(l,o)),localStorage.setItem("time",e),setTimeout(timerSettings,1e3))}function filling(e,t){for(var i=0;i<e.length;i++)e[i].innerHTML=t}function diFilling(e,t){for(var i=0;i<e.length;i++)e[i].innerHTML=t[i%2]}$(document).ready((function(){$(".boxes > div").click((function(){$(this).parent().hasClass("boxesfirsttry")?($(".boxes").removeClass("boxesfirsttry"),$(this).addClass("openbox"),$(this).find(".try").hide(),$(this).find(".opentry").show(),setTimeout((function(){$(".sweet-overlay").show(),$(".sweet-alert").show()}),500)):$(this).parent().hasClass("boxeslasttry")&&($(this).hasClass("openbox")||($(this).find(".try").hide(),$(this).find(".opentry").show(),$(this).find(".boxtext").css("display","block"),setTimeout((function(){$(".new-comebacker-overlay").is(":visible")&&$(".new-comebacker-overlay").hide(),$(".new-comebacker-overlay .boxes-is-open").show(),$(".new-comebacker-overlay .boxes-not-open").hide(),$(".spin-result-wrapper").show(),setTimeout((function(){$("#boxesContainer").slideUp(250),setTimeout((function(){$(".order_block").slideDown(250)}),500)}),500)}),500)))})),$("#update").click((function(){$(".sweet-overlay").hide(),$(".sweet-alert").hide(),$(".boxes").addClass("boxeslasttry")}));document.querySelector(".close-popup");$(".close-popup, .popup-button").click((function(e){e.preventDefault(),$(".spin-result-wrapper").fadeOut();$("#terra-wrapper").offset().top}))})),initializeTimer();