### Getting started

Some useful tips to help you get started:

1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

5. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####My Optimization Steps 

1. Minified HTML
2. Inlined critical classes referenced in the HTML to make it render before css is loaded
3. Changed pizzeria.jpg to pizzeria.png and rescaled it
4. Made all JS files load asynchronously since they are not critical to application functionality
5. Minified css
6. Made CSS and external fonts subresources so they do not block rendering
7. After page and all resources are loaded CSS and external fonts are made 'stylesheet's, since the files are already cached browser uses them to re-render the page

I got 90+ score both on mobile and desktop versions

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

1. I tried to reuse code which performs lookups and moved document.body.scrollTop to a variable outside the loop
2. I created offsets array with offsetWidth's of the pizza elements to be resized, moved function sizeSwitcher outside of the loop

FPS is now 60+ and resize takes less than a millisecond
