(function(d,t) {
        var BASE_URL="https://chat.bevatel.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.socialAppSDK.run({
            websiteToken: 'tAeWH6i8Pq6NbxJ3MwPWrNnh',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
  
   $('.inner-percentage').counterUp({
    delay: 10,
      time: 1500
    });
  
  (function(d,t) {
        var BASE_URL="https://chat.bevatel.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.socialAppSDK.run({
            websiteToken: 'tAeWH6i8Pq6NbxJ3MwPWrNnh',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
  
//$(document).ready(function() { 
  //setTimeout(function() {
    //$('body').css('overflowY', 'auto');
    //},
      //4300);
  //setTimeout(function() {
    //$('body.inner-page').css('overflowY', 'auto');
    //},
      //2900);
   //setTimeout(function() {
    //$('body.for-ar').css('overflowY', 'auto');
    //},
      //100);
//});
  $('.nav-trigger').on('click', function(e) {
    $('body').toggleClass("no-scroll");
    $('.afaqy-logo').toggleClass("stock");
    $('.fullscreen-nav').toggleClass("active");
     $('.social-wrapper').toggleClass("hide");

    $('.nav-trigger').toggleClass("active");//you can list several class names 
    e.preventDefault();
  });
  
  //***** Dashbard Side Box ****//
 
  window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tb-categ-wrap').forEach(item => {
    item.querySelector('.side-nav-link.for-tb-cat').addEventListener('click', () => {
        if (item.classList.contains('active')) {
           item.classList.remove('active')
        } else {
           document.querySelectorAll('.tb-categ-wrap').forEach((el) => {
              el.classList.remove('active')
           })
           item.classList.add('active')
        }
    })
  })
});
  
   $('.nav-link.side-nav.for-search').on('click', function(e) {
    $('body').addClass("no-scroll");//you can list several class names 
    e.preventDefault();
  });
  $('.nav-icon.close').on('click', function(e) {
    $('body').removeClass("no-scroll");//you can list several class names 
    e.preventDefault();
  });
  
  
  //$(document).scroll(function () {
  
  // parallaxing
  //var $movebg = $(window).scrollTop() * -0.2;
  //$('.header.inner-banner').css('background-positionY', (1 * $movebg) + 'px'); 
//});
  
  //AKM Dashboard Search
  
  //(function() {
// create a new Library instance and store it in a variable called "projectsG:
//var projectsGrid = new FsLibrary('.collection-list')
// define our filter group(s)
//var myFilters = [
//{
//filterWrapper: ".filters-wrapper",
//filterType: "exclusive"
//}
 //]
// run filter on our instance
//projectsGrid.filter({
//filterArray: myFilters, // the filter group name we defined
//animation: {
//enable: true,
//duration: 200,
//easing: 'ease-in-out',
//effects: 'fade translate (0px, 20px)'
//}
//})
//})();
