$(function () {

    const worksSlider = $('[data-slider="slick"]');

    let filter = $("[data-filter]");
    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter')

        if(cat == 'all') {
            $("[data-cat]").removeClass('hide');
        }
        else {

            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });

        }

    });


    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal')

        $(modalId).addClass('show');

        $("body").addClass("no-scroll");

        worksSlider.slick('setPosition');

    });

    modalClose.on("click", function (event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal')

        modalParent.removeClass('show');
        $("body").removeClass("no-scroll");

    });

    $(".modal").on("click", function (event) {

        $(this).removeClass('show');
        $("body").removeClass("no-scroll");

    });

    $(".modal__dialog").on("click", function (event) {

        event.stopPropagation();

    });

    /*SLIDER: https://kenwheeler.github.io/slick/*/

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    // $(".slickPrev").on("click", function (event) {
    //     event.preventDefault();
    //
    //     let curSlider =
    //         $(this).parents(".modal").find('[data-slider="slick"]');
    //
    //     curSlider.slick("slickPrev");
    // });
    //
    // $(".slickNext").on("click", function (event) {
    //     event.preventDefault();
    //
    //     let curSlider =
    //         $(this).parents(".modal").find('[data-slider="slick"]');
    //
    //     curSlider.slick("slickNext");
    // });

    $(".arrow_left_photo").on("click", function (event) {
        event.preventDefault();

        let curSlider =
            $(this).parents(".modal").find('[data-slider="slick"]');

        curSlider.slick("slickNext");
    });

    $(".arrow_right_photo").on("click", function (event) {
        event.preventDefault();

        let curSlider =
            $(this).parents(".modal").find('[data-slider="slick"]');

        curSlider.slick("slickNext");
    });

    let modal_work = $(".modal-work__previews")
    modal_work.on("mouseover", function (event) {
        event.preventDefault();

        $(".arrow_left_photo").css("display", "block");
        $(".arrow_right_photo").css("display", "block");
    })

    modal_work.on("mouseout", function (event) {
        event.preventDefault();

        $(".arrow_left_photo").css("display", "none");
        $(".arrow_right_photo").css("display", "none");
    })

});