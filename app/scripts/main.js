console.log('\'Allo \'Allo!');

/**
*Checks for mobile device, featurephones/smartphones
**/
window.mobilecheck = function () {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }

/**
*On -load- actions
**/
$(window).load(function ( ) {
  console.log("load");

  var loaded = false;
  var backstretchFirst = false;
  var backstretchOn = false;

  /**
  *Load_unLoad interface function, depending on resolution
  **/
  function Load_unLoad(){
    if($(window).width() >= 1200) {
      //console.log("(window).width() >= 1200");
      if (!loaded){
        //console.log("!loaded");
        loaded = true;

        setTimeout(function() {
          $("#loading").fadeOut(1500);
        }, 350);

        setTimeout(function() {


        $("#sectionsBackground").removeClass("bottomRightOut");

        $("#formacionBTNContainer").removeClass("bottomRightOut");
        $("#experienciaBTNContainer").removeClass("bottomRightOut");
        $("#skillsBTNContainer").removeClass("bottomRightOut");
        $("#masInfoBTNContainer").removeClass("bottomRightOut");

        $("header").removeClass("topOut");
        $("#intro").removeClass("rightOut");
        $("#contact").removeClass("leftOut");
        $("footer").removeClass("leftOut");
        }, 350);
        setTimeout(function() {
          $("#hideAllBTNContainer").removeClass("sizeCero");
        }, 1000);
      }
    }
    else
    {
      //console.log("(window).width() < 1200");
      if (loaded){
        //console.log("loaded");
        loaded = false;

        $("#loading").fadeIn();

        $("#sectionsBackground").addClass("bottomRightOut");

        $("#formacionBTNContainer").addClass("bottomRightOut");
        $("#experienciaBTNContainer").addClass("bottomRightOut");
        $("#skillsBTNContainer").addClass("bottomRightOut");
        $("#masInfoBTNContainer").addClass("bottomRightOut");

        $("header").addClass("topOut");
        $("#intro").addClass("rightOut");
        $("#contact").addClass("leftOut");
        $("footer").addClass("leftOut");

        $("#hideAllBTNContainer").addClass("sizeCero");
      }
    }
  }

  /**
  *Backgrounds function, load/pause/resume depending on resolution
  **/
  function Backgrounds (){
    if($(window).width() >= 1200) {
      if (!backstretchFirst){
        backstretchFirst = true;
        backstretchOn = true;
        //console.log("(#backgrounds).backstretch");
        $("#backgrounds").backstretch([
          "images/backgrounds/background8.jpg",
          "images/backgrounds/background7.jpg",
          "images/backgrounds/background6.jpg",
          "images/backgrounds/background5.jpg",
          "images/backgrounds/background4.jpg",
          "images/backgrounds/background3.jpg",
          "images/backgrounds/background2.jpg",
          "images/backgrounds/background1.jpg"
        ], {
          fade: 755,
          duration: 4500
        });
      }
      if (!backstretchOn){
        //console.log("backstretch(resume)");
        backstretchOn = true;
        $("#backgrounds").backstretch("resume");
      }
    }
    else
    {
      if (backstretchOn){
        //console.log("backstretch(pause)");
        backstretchOn = false;
        $("#backgrounds").backstretch("pause");
      }
    }
  }


  /**
  *Calls for Load() and Backgrounds() functions
  **/
  if(!mobilecheck()) {
      Backgrounds();
      Load_unLoad();
    }

  /**
  *Everytime the window is resized, load/pause/resume backgrouns and Load/unLoad interface depending on device and resolution
  **/
  $(window).resize(function() {
    if(!mobilecheck()){
      Load_unLoad();
      Backgrounds();
    }
  });

});


/*====================================================================================================================================================*/
/*====================================================================================================================================================*/
/*====================================================================================================================================================*/
/*====================================================================================================================================================*/
/*====================================================================================================================================================*/
/*====================================================================================================================================================*/
/*====================================================================================================================================================*/
/*====================================================================================================================================================*/


/**
*On -ready- actions
**/
$(document).ready(function() {
  console.log("ready");

  console.log("mobilecheck = "+mobilecheck());

  var readyed = false;
  var mCustomScrollbar_ON = false;
  var enterSection = false, skills = false, experiencia = false, formacion = false, masInfo = false;
  var hidden = false;

/*==========================================================================*/
  function hide_all() {
    console.log("hide_all");
    console.log("enterSection = "+enterSection, "skills = "+skills, "experiencia = "+experiencia, "formacion = "+formacion, "masInfo = "+masInfo);

      if (!hidden)
      {
        $("header").addClass("topOut");
        $("#contact").addClass("leftOut");
        $("#sectionsBackground").addClass("bottomRightOut");
        $("#formacionBTNContainer, #experienciaBTNContainer, #skillsBTNContainer, #masInfoBTNContainer").addClass("bottomRightOut");
        $("#intro, #skills, #experiencia, #portfolio, #formacion, #masInfo").addClass("rightOut");

        setTimeout(function() {
            $("#hideAllBTNContainer").addClass("hideAllBTNContainer_positionBottomRight");
            $("#hideAllBTNContainer").toggleClass("icon-resize-full");
            $("#hideAllBTNContainer").toggleClass("icon-resize-small");
          }, 250);
        $("#pattern").addClass("opacity01");

        hidden = true;
      }
      else
      {
        $("header").removeClass("topOut");
        $("#contact").removeClass("leftOut");
        $("#sectionsBackground").removeClass("bottomRightOut");
        $("#formacionBTNContainer, #experienciaBTNContainer, #skillsBTNContainer, #masInfoBTNContainer").removeClass("bottomRightOut");

        if (enterSection)
          {
            if (skills)
            {
              show_skills();
            }
            else if (experiencia)
            {
              show_experiencia();
            }
            else if (formacion)
            {
              show_formacion();
            }
            else if (masInfo)
            {
              show_masInfo();
            }
          }
        else
          {
            $("#intro").removeClass("rightOut");
          }

        setTimeout(function() {
            $("#hideAllBTNContainer").removeClass("hideAllBTNContainer_positionBottomRight");
            $("#hideAllBTNContainer").toggleClass("icon-resize-full");
            $("#hideAllBTNContainer").toggleClass("icon-resize-small")
          }, 150);
        $("#pattern").removeClass("opacity01");

        hidden = false;
      }
    }
/*==========================================================================*/
  function show_formacion() {
      $("#portfolio").addClass("rightOut");
      setTimeout(function() {
          $("#masInfo, #skills, #experiencia, #intro").addClass("rightOut");
        }, 200);
      $("#experienciaBTN, #skillsBTN, #masInfoBTN").removeClass("sectionIN");
      $("#formacion").removeClass("rightOut");
      $("#formacionBTN").addClass("sectionIN");
            $("#formacion").mCustomScrollbar("update");
      skills = false, experiencia = false, masInfo = false;
      enterSection  = true, formacion  = true;
    }
/*==========================================================================*/
  function show_experiencia() {
      $("#masInfo, #skills, #formacion, #intro").addClass("rightOut");
      $("#formacionBTN, #skillsBTN, #masInfoBTN").removeClass("sectionIN");
      $("#experiencia, #portfolio").removeClass("rightOut");
      $("#experienciaBTN").addClass("sectionIN");
      $("#portfolioInner").mCustomScrollbar("update");
      skills = false, formacion = false, masInfo = false;
      enterSection  = true, experiencia  = true;
    }
/*==========================================================================*/
  function show_skills() {
      $("#portfolio").addClass("rightOut");
      setTimeout(function() {
          $("#masInfo, #formacion, #experiencia, #intro").addClass("rightOut");
        }, 200);
      $("#formacionBTN, #experienciaBTN, #masInfoBTN").removeClass("sectionIN");
      $("#skills").removeClass("rightOut");
      $("#skillsBTN").addClass("sectionIN");
      $("#skills").mCustomScrollbar("update");
      experiencia = false, formacion = false, masInfo = false;
      enterSection  = true, skills  = true;
    }
/*==========================================================================*/
  function show_masInfo() {
      $("#portfolio").addClass("rightOut");
      setTimeout(function() {
          $("#skills, #formacion, #experiencia, #intro").addClass("rightOut");
        }, 200);
      $("#formacionBTN, #experienciaBTN, #skillsBTN").removeClass("sectionIN");
      $("#masInfo").removeClass("rightOut");
      $("#masInfoBTN").addClass("sectionIN");
      skills = false, experiencia = false, formacion = false;
      enterSection  = true, masInfo  = true;
    }
/*==========================================================================*/
  function hide_Sections(){
    if (enterSection){
      $("#intro").removeClass("rightOut");
      $("#portfolio").addClass("rightOut");
      setTimeout(function() {
          $("#masInfo, #skills, #formacion, #experiencia").addClass("rightOut");
        }, 200);
      $("#formacionBTN, #experienciaBTN, #skillsBTN, #masInfoBTN").removeClass("sectionIN");
      enterSection = false, skills = false, experiencia = false, formacion = false, masInfo = false;
    }
  }
/*==========================================================================*/
  // Disable opening and closing animations, change title type
  $(".fancybox").fancybox({
    afterLoad: function() {
      this.title = this.title;},
      openEffect  : 'fade',
      closeEffect : 'fade'
  });
  $(".fancybox.iframe").fancybox({
    afterLoad: function() {
      this.title = this.title;},
      scrolling : 'auto',
      preload   : true
  });
/*==========================================================================*/

  function Ready(){
    if( ($(window).width() >= 1200)) {
      console.log("Ready");
      readyed = true;


      //console.log("(window).width = "+$(window).width());

      $("#hideAllBTNContainer").on( "click", hide_all );
    /*==========================================================================*/
      $("#formacionBTN").on( "click", show_formacion );

      $("#experienciaBTN").on( "click", show_experiencia );

      $("#skillsBTN").on( "click", show_skills );
      if (!mCustomScrollbar_ON){
        $("#portfolioInner").mCustomScrollbar({
              horizontalScroll:true
            });
        $("#skills").mCustomScrollbar();
                $("#formacion").mCustomScrollbar();
      }
      else
      {
                $("#formacion").mCustomScrollbar("update");
        $("#portfolioInner").mCustomScrollbar("update");
        $("#skills").mCustomScrollbar("update");
      }
      mCustomScrollbar_ON = true;

      $("#masInfoBTN").on( "click", show_masInfo );
    /*==========================================================================*/
      $("#backgrounds, #sectionsBackground").on( "click", hide_Sections );
    }
    else
    {
      console.log("unReady");
      readyed = false;

      //console.log("(window).width = "+$(window).width());

      $("#hideAllBTNContainer").off( "click", hide_all );
    /*==========================================================================*/
      $("#formacionBTN").off( "click", show_formacion );

      $("#experienciaBTN").off( "click", show_experiencia );

      $("#skillsBTN").off( "click", show_skills );

      if (mCustomScrollbar_ON){
                $("#formacion").mCustomScrollbar("destroy");
        $("#portfolioInner").mCustomScrollbar("destroy");
        $("#skills").mCustomScrollbar("destroy");
      }
      mCustomScrollbar_ON = false;

      $("#masInfoBTN").off( "click", show_masInfo );
    /*==========================================================================*/
      $("#backgrounds, #sectionsBackground").off( "click", hide_Sections );
    }
  }

  /**
  *Calls for Ready() function
  **/
  if(!mobilecheck()) {
    Ready();
  }

  /**
  *Everytime the window is resized, calls for Ready() function
  **/
  $(window).resize(function() {
    if(!mobilecheck()){
      Ready();
    }
  });
});