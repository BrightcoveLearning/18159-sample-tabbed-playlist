videojs.registerPlugin('tabbedPlaylist', function() {
    // Get a reference to the player when it is ready
    var myPlayer = this,
        // Define an array of playlist Ids
        playlistIds = ["4450721964001", "2805100167001", "2764931905001","1754200320001"],
        // Get the playlist array length
        playlistIdsLength = playlistIds.length,
        // Get a reference to the playlist tabs
        tabs = document.getElementsByClassName("button"),
        currentTab,
        currentTabName,
        playlistNames = [];

    // Load the first playlist tab into the player
    processTab(0);

    function processTab(index) {
      // Reset the tabs so that none of them are selected/highlighted
      resetTabs();
      // Highlight the selected tab in the navigation
      document.getElementById("tab" + index).setAttribute("style", "background:#08c;color: #00FFFF; border-bottom: 1px solid #00FFFF;");
      // Load the selected tab's playlist into the player
      loadPlaylist(playlistIds[index]);
    };

    function loadPlaylist(currentId) {
      // Get the playlist object for the currently selected tab
      myPlayer.catalog.getPlaylist(currentId, function(error, playlist) {
        // Load the playlist into the player
        myPlayer.catalog.load(playlist);
        // Load the first video in the playlist into the player
        myPlayer.playlist.currentItem (0);
      });
    };

    function resetTabs() {
      // Turn highlighting off for all of the tabs
      var i,
        iMax = tabs.length;
      for (i = 0; i < iMax; i++) {
        tabs[i].setAttribute("style", "background: #0000cc;color: #fff;")
      }
    }

});
