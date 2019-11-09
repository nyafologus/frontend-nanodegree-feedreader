/* feedreader.js */

/* This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements.
 * It needs to be ensured that tests     won't run until the DOM is ready.
 */

$(() => {
	/* This is the first test suite - a test suite contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in the application.
   */
	describe("RSS Feeds", () => {
		/* This first test makes sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
		it("are defined and not empty", () => {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/* Tests that loops through each feed in the
     * allFeeds object and ensures it has a URL
     * defined and that the URL is not empty.
     */
		it("have their URLs defined and not empty", () => {
			allFeeds.forEach((feed) => {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});

		/* Tests that loops through each feed in the 
     * allFeeds object and ensures it has a name
     * defined and that the name is not empty.
     */
		it("have their names defined and not empty", () => {
			allFeeds.forEach((feed) => {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
	});

	/* Test suite for "The menu" */
	describe("The menu", () => {
		/* Ensures the menu element is hidden by default.
     * By analyzing the HTML and the CSS to determine
     * how the hiding/showing of the the menu element
     * is performed, the test makes sure that the
     * 'menu-hidden' class has indeed been added.
     */
		it("is hidden by default", () => {
			expect($("body").hasClass("menu-hidden")).toBe(true);
		});

		/* Ensures the menu changes visibility when the
     * menu icon is clicked. This test should have
     * two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
		it("changes visibility when it is clicked", () => {
			$(".menu-icon-link").click();
			expect($("body").hasClass("menu-hidden")).toBe(false);
			$(".menu-icon-link").click();
			expect($("body").hasClass("menu-hidden")).toBe(true);
		});
	});

	/* Test suite for "Initial Entries" */
	describe("Initial Entries", () => {
		/* Ensures that there is at least a single .entry element
     * within the .feed container when the loadFeed function is
     * called and completes its work. Since loadFeed()
     * is asynchronous, this test requires the use of
     * Jasmine's beforeEach and its asynchronous done() function.
     */
		beforeEach((done) => {
			loadFeed(0, () => {
				done();
			});
		});

		it("ensure that Feed is not empty initially", () => {
			/* Uses the parent descendant selector to grab the entry elements */
			expect($(".feed .entry").length).toBeGreaterThan(0);
		});
	});

	/* Test suite for changes in "New Feed Selection" */
	describe("New Feed Selection", () => {
		/* This is to ensure that the content actually changes
     * when a new feed is loaded by the loadFeed function.
     * Took into consideration that loadFeed() is asynchronous.
     */
		let feedSelection1;
		let feedSelection2;

		beforeEach((done) => {
			$(".feed").empty();
			loadFeed(0, () => {
				feedSelection1 = $(".feed").html();
				loadFeed(1, () => {
					feedSelection2 = $(".feed").html();
					done();
				});
			});
		});

		it("should be different from the previous selection of feeds", () => {
			/* console.log(feedSelection1);  */
			/* console.log(feedSelection2);  */
			expect(feedSelection1).not.toBe(feedSelection2);
		});
	});
});
