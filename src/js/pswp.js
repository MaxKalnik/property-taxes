'use strict';

var items = [
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/property-taxes-northeast/images/nothereast_map@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/property-taxes-northeast/images/nothereast_map@2x.png 2x',
                w: 1130,
                h: 595
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/property-south-atlantic/images/south_atlantic_map@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/property-south-atlantic/images/south_atlantic_map@2x.png 2x',
                w: 1130,
                h: 595
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/property-south-central/images/south_central_map@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/property-south-central/images/south_central_map@2x.png 2x',
                w: 1130,
                h: 595
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/property-midwest/images/midwest_map@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/property-midwest/images/midwest_map@2x.png 2x',
                w: 1130,
                h: 595
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/property-mountain-west/images/mountain_west_map@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/property-mountain-west/images/mountain_west_map@2x.png 2x',
                w: 1130,
                h: 595
            }
        ],
        [
            {
                src: 'https://static0.rewardexpert.com/shared/staging/property-pacific-west/images/pacific_west_map@2x.png',
                srcset: 'https://static0.rewardexpert.com/shared/staging/property-pacific-west/images/pacific_west_map@2x.png 2x',
                w: 1130,
                h: 595
            }
        ]
    ];

var openPhotoSwipe = function(items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = items;

    var options = {

        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
