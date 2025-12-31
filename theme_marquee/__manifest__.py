{
    'name': 'Marquee Theme',
    'summary': 'Marquee Theme',
    'category': 'Theme',
    'version': '18.0.1.0',
    'author': 'Denglee',
    'depends': [
        'website',
        'theme_default',
    ],
    'data': [
        'views/homepage.xml',

    ],

'live_test_url': 'https://marquetext.netlify.app/',
    'price': 3.99,
    'currency': 'USD',

    'assets': {
        'web._assets_primary_variables': [
            '/theme_marquee/static/src/scss/primary_variables.scss',
        ],
        'web.assets_frontend': [
            '/theme_marquee/static/src/scss/style.scss',
            '/theme_marquee/static/src/scss/marquee_35.scss',
            '/theme_marquee/static/src/js/home.js',
        ],
    },
    'images': [

        'static/description/theme_marquee_cover.gif',

        'static/description/theme_marquee_screenshot.gif',

    ],

    'license': 'LGPL-3',
    'application': True,
    'installable': True,
}
##############################################################################
