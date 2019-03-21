/*
 * Home page redirect function
 *
 * This function runs at the root of the site and redirects the user based on their geo location.
 * Their location is worked out from their IP address by CloudFlare, who send it to us in the CF-IPCountry header.
 *
 * Users from the USA are redirected to "Wagtail CMS" and everyone else is redireced to "Design + build products".
 *
 * The redirects are 302 (permanent) redirects for SEO purposes.
 */

exports.handler = function(event, context, callback) {
    let countryCode = event.headers['CF-IPCountry'] || 'GB';

    let landingPageRedirect = '/digital-products'
    if (countryCode === 'US') {
        landingPageRedirect = '/wagtail-cms'
    }

    callback(null, {
        statusCode: 302,
        headers: {
            Location: landingPageRedirect,
        }
    })
}
