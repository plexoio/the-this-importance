/**
 * Remember:
 * $('p').click(function () {
    $(this).children('a').css('background-color','yellow'); // use of 'this' and all children 'a' & chaining
});
 */

$(document).ready(function () {
    // general effects

    $('button').mouseenter(function () {
        $(this).addClass('make-red').addClass('text-white');
    }).mouseleave(function () {
        $(this).removeClass('make-red').removeClass('text-white');
    });

    // hide buttons

    $('#button1').click(function () {
        $('#p-1').slideToggle();
    });

    $('#button2').click(function () {
        $('#p-2').slideToggle();
    });

    // click on paragraphs

    $('p').click(function () {
        $(this).slideToggle();
    });

    // single show and hide button

    $('#button3').click(function () {
        $(this).addClass('hideme');
    })

    $(document).on('click', '.hideme', function () {
        $('#p-2').slideToggle();
        $('#button3').addClass('hidemeagain');
    });

    $(document).on('click', '.hidemeagain', function () {
        $('#p-1').slideToggle();
    });

    // box styling


    // box styling
    $('.card1').hover(function () {
        let myBoxOne = $(this).attr('class').split(' '); // the element has 2 classes we need split return array
        let myClass = myBoxOne[1]; // access position [1] class, neutral

        if ($(this).css('background-color') == 'rgb(248, 248, 255)') {
            $('.' + myClass).css('background-color', 'pink');
        } else {
            $(this).css('background-color', 'rgb(248, 248, 255)');
        }
    });

    // $('.box1').hover(function () {
    //     let myBoxOne = $(this).attr('class').split(' ');
    //     $('.' + myBoxOne[1]).css('background-color', 'pink');
    // });

    // $('.box2').hover(function () {
    //     let myBoxTwo = $(this).attr('class').split(' ');
    //     $('.' + myBoxTwo[1]).css('background-color', 'green');
    // });
});


/**
 * $('.module-nav').on('click', function() {
    
    let allModulesCardsSelector = '.card';
    $(allModulesCardsSelector).removeClass('card-highlight'); // if exists remove
    
    var thisModuleCardsSelector = '.' + this.id + "-card"; // add to every 'this.id'
    
    $(thisModuleCardsSelector).addClass('card-highlight'); // add if existing (presedence important)

    console.log(allModulesCardsSelector);
});
 */