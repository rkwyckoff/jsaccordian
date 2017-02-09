

//1) set up a process to click on section
//2a) when is clicked
//2) add a class to h1 section1, section 2, section 3
//3)when h1 section 1 is clicked , that page becomes active,
// color of h1 gets lighter and others
//slide out of way
//4)section 1 doesnotslide,section 2 and 3 slide up and down
//5)when


// 1. make it so a section opens on click
// 2. make it so the other sections close too



  function openSection (event) {

    var target = $(event.target).parent(".section");
    $(".section").removeClass("open");
    target.addClass("open");
    console.log("i'm working" );
}
$(".section").click(openSection);
 //function closeSection (event) {
//(event.target.closeSection)
//   var target = $(event.target);
//   target.removeClass("open");
//if (!target) {
//   console.log("i'm working" );
// }
// $(".section").click(closeSection);
//
// function changeScreen (event) {
//   (event).target.closeSection; event.target

//function changeScreen (event) {
  //(event).target.openSection;






//$(".section2").addClass("close");
//$(".section3").addClass("close");

  // $(".section1").removeClass("open").addClass("close");
  // $(".section2").removeClass("open").addClass("close");
  // $(".section3").removeClass("open").addClass("close");
  // target.removeClass("close").addClass( "open" );
  //  $(".section1").addClass("open");
  //  $(".section2").addClass("close");
  //  $(".section3").addClass("close");
  $(".section1").removeClass("open");
  //  $(".section2").addClass("close");
  //  $(".section3").addClass("close");
// }
//








//   if(event) {
//     $( "section1" ).addClass(function() {
//       return "section1New";
//     });
//     if(event) {
//       $( "section1" ).addClass(function() {
//         return "section1New";
//       });
//
// $( "ul li" ).addClass(function( index ) {
//   return "item-" + index;
// });
//
// $( "li:last" ).removeClass(function() {
//   return $( this ).prev().attr( "class" );
// });
// function open () {

// }
//
// $(".section1").addclass(open)
// $(".section2").addclass(close)
// $(".section3").addclass(close)




//   var alphabetBox = document.querySelector(".alphabet");
// alphabetBox.addEventListener('click', section1Click);
