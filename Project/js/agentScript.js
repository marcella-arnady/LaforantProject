$(function(){
   
    let agentsNumber = 11;
    let agentWidth = $('.agent').width();
    let agentHeight = $('.agent').height();
    let totalWidth = agentsNumber * agentWidth;

    let curr = 0;

    $('#next').click(()=>{
        curr-=agentWidth;
        if(curr==-totalWidth) curr = 0;
        $('#slider').animate({
            left: curr
        }, 0, ()=>{
            
        });
        
    });
    
    $('#prev').click(()=>{
        curr+=agentWidth;
        if(curr==agentWidth) curr = agentWidth - totalWidth;
        $('#slider').animate({
            left: curr
        }, 0, ()=>{
            
        });
        
    });
})
