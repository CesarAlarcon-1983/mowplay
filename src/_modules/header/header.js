'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__nav__close');

    menuOpen.on('click', function(){
        header.addClass('-open');
        body.addClass('-hideOverflow');
    });

    menuClose.on('click', function(){
        header.removeClass('-open');
        body.removeClass('-hideOverflow');
    });

    var searchIcon = $('.header__nav__search-icon');
    var searchbar = $('.header__searchbar');
    var searchInput = $('.header__search-input')
    var searchButton = $('.header__search-button')
    var closeSearchContainer = $('.material-icons');

    searchIcon.on('click', function() {
        if(!searchbar.hasClass('-visible')) {
            searchIcon.addClass('-hidden');
            searchbar.addClass('-visible');
            searchInput.addClass('-visible');
            searchButton.addClass('-visible');
            closeSearchContainer.addClass('-visible');
        }
    })

    closeSearchContainer.on('click', function() {
        searchIcon.removeClass('-hidden');
        searchbar.removeClass('-visible');
        searchInput.removeClass('-visible');
        searchButton.removeClass('-visible');
        closeSearchContainer.removeClass('-visible');
    })
};

module.exports = Header;
