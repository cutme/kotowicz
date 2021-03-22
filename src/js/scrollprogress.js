document.addEventListener('DOMContentLoaded', function() {

    const body = document.querySelector("body");
    const progressBar = document.querySelector(".js-bar");

    function stretch() {
        const pixelScrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const totalHeightScrollable = body.scrollHeight;

        // convert pixels to percentage
        const pixelsToPercentage =
          (pixelScrolled / (totalHeightScrollable - viewportHeight)) * 100;

        // set the width of the fluid element.
        progressBar.style.width = Math.round(pixelsToPercentage) + "%";
      }

      // append a scroll event listener to the window object
      window.addEventListener('scroll', stretch);
	
}, false);