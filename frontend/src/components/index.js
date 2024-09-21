// An index file to exports all the components from here

import Header from "./Header/Header.jsx"
 /* - Header of the page
    - Header or the navbar will accept the info- of the user logged in and display it
    - Moreover it will contain  the search box
 */


import Carousel from "./Carousel-items-category/carousel-category.jsx"
/*
    - Carousel will contain the categories of items
    - Carousel slides are clickable- which will redirect user to items of that category

*/


import SearchBox from "./SearchBox/SerachBox.jsx"
// the search box- remember as soon as the searchbox activates - it will show the ongoing search results

export { SearchBox, Header, Carousel }