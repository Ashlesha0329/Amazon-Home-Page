$(function() 
{
  $('#nav-search-select').change(function() 
  {
    var selectedText = $(this).find('option:selected').text();
    $('#nav-search').find('.nav-search-label').html(selectedText);
  });
});

var slideIndex = 0;

showSlides();
function showSlides()
{
    var i;
    var slides = document.getElementsByClassName("item");
    for(i = 0; i< slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}