/******
 * Main Javascript for Nevergivapp module
 * 
*/

//Search Bar

const searchInput = document.getElementById('search-video');

searchInput.addEventListener('input', (event) => {
    event.preventDefault();
    inputText = document.getElementById('search-video').value;
    setTimeout(() => { 
        if (inputText) {
            document.getElementById("nvg-home").style.display = "none";
            document.getElementById("search-result").style.display = "block";            
        } else {
            document.getElementById("nvg-home").style.display = "block";
            document.getElementById("search-result").style.display = "none";
        } 
    }, 500); 


  console.log(inputText)
 
});


// Search bar infinity scroll 

$('#search-result .divided .items')
  .visibility({
    once: true,
    // update size when new content loads
    observeChanges: true,
    // load content on bottom edge visible
    onBottomVisible: function() {
      // loads a max of 5 times
      window.loadFakeContent();
    }
  });


  

// Starting tab section with js

$('#nvg-home .menu .item')
  .tab({
    cache: true,
    // faking API request
    apiSettings: {
      loadingDuration : 1000,
      mockResponse    : function(settings) {
        var response = {
            first  : 'Home',
          second : 'My Videos',
          third  : 'Playlists'
        };
        return response[settings.urlData.tab];
      }
    },
    context : 'parent',
    auto    : true,
    path    : '/'
  });


// For Drop Menu 
$('.alignright.dropdown')
    .dropdown({
        transition: 'drop'
  });


// For Modal 
  $('.upload-btn .modal')
  .modal({
    inverted: true
  })
  .modal('attach events', '.upload-btn .button', 'show');



