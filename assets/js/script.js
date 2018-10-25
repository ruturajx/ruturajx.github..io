function checkPassword() {
    var myPassword = "androidoreo";
    var password = document.getElementById("pswd").value;
    if (password == myPassword) {
        $(".password-stuff").fadeOut(500);
        $(".main-stuff").fadeIn(500);
    } else {
        alert("Password is incorrect. Please try again.");
        document.getElementById("pswd").value = "";
    }
}

function checkCollapse() {
    var currentValue = document.getElementById("my-collapse-btn").innerHTML;
    var closeValue = "CLOSE DETAILS";
    var showValue = "SHOW DETAILS";
    if (currentValue == showValue) {
        document.getElementById("my-collapse-btn").innerHTML = closeValue;
    } else {
        document.getElementById("my-collapse-btn").innerHTML = showValue;
    }
}

function checkPrototype() {
    var currentValue = document.getElementById("my-prototype-collapse-btn").innerHTML;
    var closeValue = "CLOSE PROTOTYPE";
    var showValue = "SHOW PROTOTYPE";
    if (currentValue == showValue) {
        document.getElementById("my-prototype-collapse-btn").innerHTML = closeValue;
    } else {
        document.getElementById("my-prototype-collapse-btn").innerHTML = showValue;
    }
}

function checkSketchCollapse() {
    var currentValue = document.getElementById("my-sketch-collapse-btn").innerHTML;
    var closeValue = "CLOSE DETAILS";
    var showValue = "SHOW DETAILS";
    if (currentValue == showValue) {
        document.getElementById("my-sketch-collapse-btn").innerHTML = closeValue;
    } else {
        document.getElementById("my-sketch-collapse-btn").innerHTML = showValue;
    }
}


$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#process-header').fadeIn(700);
            $('#back-to-top').fadeIn(700);
        } else {
            $('#process-header').fadeOut(700);
            $('#back-to-top').fadeOut(700);
        }
    });
});


$('#back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
});

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                    ;
                });
            }
        }
    });


// Cache selectors
var lastId,
    topMenu = $("#process-header"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});


// Modal image script

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}