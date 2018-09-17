/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        /* make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL is defined', function() {
             allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(allFeeds.length).not.toBe(0);
            })
        })/*loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('name is defined', function() {
            for (var i=0; i<=allFeeds; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        }) /*loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });

    describe('The Menu', function(){

        it('menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
        /* ensures the menu element is
         * hidden by default.
         */
         it('menu changes visibility when clicked', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
         }) /* ensures the menu changes
          * visibility when the menu icon is clicked. 
          */
    });
    
    describe ('Initial Entries', function(){
    
    beforeEach(function(done){
        loadFeed(0, done);
    });
        it ('loadFeed function called and completed', function() {
            let feedLength= $('.feed .entry').length
            expect(feedLength).toBeGreaterThan(0);
        })/* ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
     })
    
    describe('New Feed Selection', function(){
    beforeEach(function(done){
        loadFeed(0, function() {
         content1 = $('.feed').html();
        loadFeed(1, function(){
            done();
        });
        })
    });
        it('new feed loaded', function(){
             let content2 = $('.feed').html();
            expect(content1).not.toBe(content2);
        })
    })
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
}());
