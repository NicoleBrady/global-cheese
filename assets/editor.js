/*============================================================================
  Shopify Theme Editor functions
==============================================================================*/
window.addEventListener("DOMContentLoaded", function() {
  if (Shopify.designMode) {
    $(document)
      .on("shopify:section:load", function(event) {
        var section = $(event.target);
        var type = section
          .attr("class")
          .replace("shopify-section", "")
          .trim();
        var id = event.originalEvent.detail.sectionId;
        var sectionId = ".section--" + id;

        theme.homeSectionMargin();
        if ($("body").data("anim-load")) {
          sr.reveal(sectionId + " .section__title", { distance: "5px" });
          sr.reveal(sectionId + " .section__title-desc", {
            distance: 0,
            delay: 300
          });
          sr.reveal(sectionId + " .section__link", { distance: 0 });
        }

        switch (type) {
          case "js-section__home-collection":
            // theme.layoutSlider(".js-layout-slider-" + id);
            $(".js-layout-slider-" + id).each(function() {
              theme.layoutSliderInit(this);
            });
            theme.masonryLayout();
            theme.productCollSwatch();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .product-top", {
                interval: theme.intervalValue
              });
            }
            break;

          case "js-section__home-events":
            var thisEvents = $(".js-events-" + id);
            var thisSectionId = thisEvents.data("section-id");
            var thisApiKey = thisEvents.data("api-key");
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-event__item", {
                interval: theme.intervalValue
              });
            }
            //check if onboarding content exists
            if ($(section).find(".js-events-onboarding").length) {
              $(".js-layout-slider-" + id).each(function() {
                theme.layoutSliderInit(this);
              });
            } else {
              theme.eventFeed(
                thisApiKey,
                "#eventTemplate" + thisSectionId,
                "#eventContainer" + thisSectionId,
                thisSectionId
              );
            }
            break;

          case "js-section__home-slider":
            //reset each youtube video object (weird YT re-init bug)
            section.find(".js-home-carousel-video-data").each(function() {
              var playerId = $(this).attr("data-player-id");
              window[playerId] = "undefined";
            });
            // theme.homeMainCarousel();
            section.find(".js-home-carousel").each(function() {
              theme.homeMainCarouselInit(this);
            });
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-carousel", { distance: 0 });
            }
            break;

          case "js-section__home-testimonials":
            section.find(".js-home-testimonials-carousel").each(function() {
              theme.testimonialsCarouselInit(this);
            });
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-testimonials", { distance: 0 });
            }
            break;

          case "js-section__home-image-grid":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-image-grid__item", {
              interval: theme.intervalValue
              });
            }
            break;

          case "js-section__home-logo-list":
            // theme.logoCarousel();
            section.find(".js-home-logo-list-carousel").each(function() {
              theme.logoCarouselInit(this);
            });
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-logo-list__items", { distance: 0 });
            }
            break;

          case "js-section__home-video":
            section.find('.js-home-video-stage').each(function() {
              theme.homeVideoGalleryInit(this);
            });
            // theme.homeVideoGallery();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-video__stage, .home-video__items", {
                distance: 0
              });
            }
            break;

          case "js-section__home-blog":
            theme.masonryLayout();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .blog", {
                delay: 500,
                interval: theme.intervalValue
              });
            }
            break;

          case "js-section__home-intro":
            theme.magnificVideo();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-intro", { distance: 0 });
              sr.reveal(
                sectionId +
                  " .home-intro__media," +
                  sectionId +
                  " .home-intro__text," +
                  sectionId +
                  " .home-intro__video," +
                  sectionId +
                  " .home-intro__link-wrap"
              );
            }
            break;

          case "js-section__home-promo":
            theme.magnificVideo();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-promo__box");
            }
            break;

          case "js-section__home-custom":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-custom__item", {
                interval: theme.intervalValue
              });
            }
            break;

          case "js-section__home-html":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-html", { distance: 0 });
            }
            break;

          case "js-section__rich-text":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-rich-text__content", { distance: 0 });
            }
            break;

          case "js-section__home-map":
            section.find(('.js-map')).each(function() {
              theme.homeMapsInitiate(this);
            });
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-map__items");
            }
            break;

          case "js-section__home-delivery":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-delivery", { distance: 0 });
              sr.reveal(sectionId + " .home-delivery__content", {
                distance: theme.intervalStyle
              });
            }
            break;

          case "js-section__home-inline":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-inline__item", {
                interval: theme.intervalValue
              });
            }
            break;

          case "js-section__home-collection-list":
            $(".js-layout-slider-" + id).each(function() {
              theme.layoutSliderInit(this);
            });
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .collection-list__item", {
                interval: theme.intervalValue
              });
            }
            break;

          // Strange bug with google pay not being
          // initialised when the Buy Now button is on
          // FINDINGS: Google Maps interfere with google
          // pay in editor for some reason, so loading
          // google maps via intersection observer helps
          case "js-section__home-product":
            //check if onboarding
            if (
              $(this)
                .find(".section")
                .attr("data-section-onboarding") != "true"
            ) {
              theme.productSelect(id, "featured", false);
            }
            theme.selectWrapper();
            theme.runAjaxCart();
            // theme.homeProductMediaInit();

            //slider images smooth loading
            $(".js-product-slider").hide();
            $(".js-product-slider-spinner").show();
            $(".js-product-slider").imagesLoaded(function() {
              $(".js-product-slider").show();
              $(".js-product-slider-spinner").hide();
              section
                .find(".js-product-slider")
                .not(".slick-initialized")
                .each(function() {
                  theme.homeFeaturedProductInit(this);
                });
            });
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .product-featured__details", { distance: 0 });
              sr.reveal(sectionId + " .product-featured__photo-wrapper", {
                distance: 0,
                delay: 500
              });
            }
            break;

          case "js-section__product-single":
            theme.selectWrapper();
            theme.accordion();
            theme.runAjaxCart();

            theme.productSelect("1", "single", true);
            theme.selectWrapper();
            theme.productMediaInit();

            //slider images smooth loading
            $(".js-product-slider").imagesLoaded(function() {
              theme.thumbsCarousel();
            });

            //move cart box for classic layout
            $(".js-cart-replace").appendAround();

            if ($("body").data("anim-load")) {
              sr.reveal(".product-single__title-text", { distance: "20px" });
              sr.reveal(
                ".product-single__title-desc, .breadcrumb, .product-single__photos, .product-single__content, .product-single--minimal .product-single__content-text",
                { distance: 0, delay: 500 }
              );
            }
            break;

          case "js-section__product-testimonials":
            $(".js-home-testimonials-carousel").each(function() {
              theme.testimonialsCarouselInit(this);
            });
            // theme.testimonialsCarousel();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-testimonials", { distance: 0 });
            }
            break;

            case "js-section__product-custom":
            if ($("body").data("anim-load")) {
              sr.reveal(".home-custom__item", { interval: theme.intervalValue });
              sr.reveal(".home-image-grid__item", {
                interval: theme.intervalValue
              });
            }
            break;

          case "js-section__product-related":
            theme.productRecommendations();
            break;

          case "js-section__blog":
            theme.masonryLayout();
            theme.layoutSlider(".js-layout-slider-" + id);
            theme.productCollSwatch();

            if ($("body").data("anim-load")) {
              sr.reveal(".blog", { delay: 500, interval: theme.intervalValue });
              sr.reveal(".blog-page__tags, .blog-pagination", {
                distance: 0,
                delay: 500
              });
              sr.reveal(".blog-page .section__title", { distance: "20px" });
              sr.reveal(".product-top", { interval: theme.intervalValue });
            }
            break;

          case "js-section__article":
            theme.masonryLayout();
            theme.layoutSlider(".js-layout-slider-" + id);
            theme.productCollSwatch();

            if ($("body").data("anim-load")) {
              sr.reveal(".article .section__title", { distance: "20px" });
              sr.reveal(".article__date", { distance: "-10px", delay: 500 });
              sr.reveal(".article__featured-media, .article__content", {
                distance: 0,
                delay: 200
              });
              sr.reveal(".article__meta, .article-paginate", { distance: 0 });
              sr.reveal(".product-top", { interval: theme.intervalValue });
            }
            break;

          case "shopify-section-header js-section__header":
            theme.headerNav();
            theme.triggerActive();
            theme.localizeToggle();
            $(body).removeClass('header-down').removeClass('header-up');
            document.documentElement.style.setProperty('--header-height', document.getElementsByClassName('js-header')[0].offsetHeight + 'px');
            if ($('.js-header').hasClass('js-header-sticky')) {
              stickybits(".js-section__header", { useStickyClasses: true });
            }
            theme.headerScrollUp();

            break;

          case "js-section__newsletter":
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .newsletter", { distance: 0 });
            }
            break;

          case "js-section__footer":
            theme.footerTweet();
            theme.localizeToggle();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .newsletter", { distance: 0 });
            }
            break;

          case "js-section__collection":
            theme.selectWrapper();
            theme.masonryLayout();
            theme.collectionSort();
            theme.collectionTagFilter();
            theme.productCollSwatch();

            if ($("body").data("anim-load")) {
              sr.reveal(".collection__header-info__title", { distance: "20px" });
              sr.reveal(".collection .product-top", {
                interval: theme.intervalValue,
                delay: 500
              });
              sr.reveal(
                ".collection__header-media, .collection__header-info__text, .collection-main__sort, .collection-empty, .collection-pagination",
                { distance: 0, delay: 500 }
              );
            }
            break;

          case "js-section__list-collections":
            if ($("body").data("anim-load")) {
              sr.reveal(".list-collections .section__title", { distance: "20px" });
              sr.reveal(".list-collections .collection-list__item", {
                interval: theme.intervalValue,
                delay: 500
              });
            }
            break;

          case "js-section__mobile-draw":
            theme.triggerActive();
            theme.localizeToggle();
            break;

          case "js-section__promo-pop":
            if ($("body").data("anim-load")) {
              sr.reveal(".promo-pop .section__title", { distance: 0 });
            }
            break;

          case "js-section__faq-page":
            theme.accordion();
            theme.scrollToDiv();
            if ($("body").data("anim-load")) {
              sr.reveal(".page .section__title", { distance: "20px" });
              sr.reveal(".faq__cta", { distance: 0, delay: 500 });
              sr.reveal(".faq__search", { distance: 0, delay: 700 });
              sr.reveal(".faq__accordion", { distance: 0, delay: 900 });
              sr.reveal(".page__contact-form", { distance: 0, delay: 200 });
              sr.reveal(".faq__category__title", { distance: 0 });
            }
            break;

          case "js-section__page-custom":
            if ($("body").data("anim-load")) {
              sr.reveal(".home-custom__item", { interval: theme.intervalValue });
              sr.reveal(".home-image-grid__item", {
                interval: theme.intervalValue
              });
            }
            break;

          case "js-section__page-contact":
            $(".js-map-replace").appendAround();
            theme.homeMaps();
            if ($("body").data("anim-load")) {
              sr.reveal(sectionId + " .home-map__items");
              sr.reveal(".page__contact-form", { distance: 0, delay: 200 });
            }
            break;
        }
      })
      .on("shopify:section:reorder", function(event) {
        theme.homeSectionMargin();
      })
      .on("shopify:section:select", function(event) {
        var section = $(event.target);
        var type = section
          .attr("class")
          .replace("shopify-section", "")
          .trim();
        var id = event.originalEvent.detail.sectionId;

        switch (type) {
          case "js-section__mobile-draw":
            //record current top offset
            theme.currentOffset = $(document).scrollTop();
            theme.mfpOpen("menu-draw");
            break;

          case "js-section__age-checker":
            var ageEnabled = $(section)
              .find(".js-age-draw")
              .data("age-check-enabled");
            if (ageEnabled) {
              theme.mfpOpen("age");
            } else {
              $.magnificPopup.close();
            }
            //record current top offset
            theme.currentOffset = $(document).scrollTop();
            break;

          case "js-section__promo-pop":
            var promoEnabled = $(section)
              .find(".js-promo-pop")
              .data("promo-enabled");
            if (promoEnabled) {
              theme.promoPop("open");
            } else {
              theme.promoPop("close");
            }
            //record current top offset
            theme.currentOffset = $(document).scrollTop();
            break;

          case "js-section__home-slider":
            var currSlideshowSection = $('[data-section-id="' + id + '"]').find(
              ".js-home-carousel"
            );
            // currSlideshowSection.each(function() {
            //   theme.homeMainCarouselInit(this);
            // });
            //pause carousel autoplay
            currSlideshowSection.slick("slickPause");
            break;

          case "js-section__home-testimonials":
            var currTestimonialsSection = $('[data-section-id="' + id + '"]').find(
              ".js-home-testimonials-carousel"
            );
            // currTestimonialsSection.each(function() {
            //   theme.testimonialsCarouselInit(this);
            // });
            //pause carousel autoplay
            currTestimonialsSection.slick("slickPause");
            break;

          case "js-section__product-testimonials":
            var currProdTestimonialsSection = $(
              '[data-section-id="' + id + '"]'
            ).find(".js-home-testimonials-carousel");
            // currProdTestimonialsSection.each(function() {
            //   theme.testimonialsCarouselInit(this);
            // });
            //pause carousel autoplay
            currProdTestimonialsSection.slick("slickPause");
            break;
        }
      })
      .on("shopify:section:deselect", function(event) {
        var section = $(event.target);
        var type = section
          .attr("class")
          .replace("shopify-section", "")
          .trim();
        var id = event.originalEvent.detail.sectionId;

        switch (type) {
          case "js-section__mobile-draw":
            //jump back to to previous offset
            $(document).scrollTop(theme.currentOffset);
            $.magnificPopup.close();
            break;

          case "js-section__age-checker":
            //jump back to to previous offset
            $(document).scrollTop(theme.currentOffset);
            $.magnificPopup.close();
            break;

          case "js-section__promo-pop":
            theme.promoPop("close");
            //jump back to to previous offset
            $(document).scrollTop(theme.currentOffset);
            break;

          case "js-section__home-slider":
            var currSlideshowSection = $('[data-section-id="' + id + '"]').find(
              ".js-home-carousel"
            );
            //play carousel autoplay
            if (currSlideshowSection.data("autoplay")) {
              currSlideshowSection.slick("slickPlay");
            }
            break;

          case "js-section__home-testimonials":
            var currTestimonialsSection = $('[data-section-id="' + id + '"]').find(
              ".js-home-testimonials-carousel"
            );
            //play carousel autoplay
            if (currTestimonialsSection.data("autoplay")) {
              currTestimonialsSection.slick("slickPlay");
            }
            break;

          case "js-section__product-testimonials":
            var currProdTestimonialsSection = $(
              '[data-section-id="' + id + '"]'
            ).find(".js-home-testimonials-carousel");
            //play carousel autoplay
            if (currProdTestimonialsSection.data("autoplay")) {
              currProdTestimonialsSection.slick("slickPlay");
            }
            break;
        }
      })
      .on("shopify:block:select", function(event) {
        var id = event.originalEvent.detail.sectionId;
        var slide = $(event.target);
        var type = slide
          .parents(".shopify-section")
          .attr("class")
          .replace("shopify-section", "")
          .trim();

        switch (type) {
          case "js-section__home-slider":
            var currSlideshowSlide = $(slide)
              .find(".home-carousel__item")
              .attr("data-slide-id");
            var currSlideshowSlider = $('[data-section-id="' + id + '"]').find(
              ".js-home-carousel"
            );
            //go to slide
            currSlideshowSlider.slick("slickGoTo", currSlideshowSlide);
            break;

          case "js-section__home-testimonials":
            var currTestimonialsSlide = $(slide)
              .find(".home-testimonials__item")
              .attr("data-slide-id");
            var currTestimonialsSlider = $('[data-section-id="' + id + '"]').find(
              ".js-home-testimonials-carousel"
            );
            //go to slide
            currTestimonialsSlider.slick("slickGoTo", currTestimonialsSlide);
            break;

          case "js-section__product-testimonials":
            var currProdTestimonialsSlide = $(slide)
              .find(".home-testimonials__item")
              .attr("data-slide-id");
            var currProdTestimonialsSlider = $(
              '[data-section-id="' + id + '"]'
            ).find(".js-home-testimonials-carousel");
            //go to slide
            currProdTestimonialsSlider.slick(
              "slickGoTo",
              currProdTestimonialsSlide
            );
            break;
        }
      });
  }
});
