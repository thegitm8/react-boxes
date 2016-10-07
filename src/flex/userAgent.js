/**
 * react-boxes userAgent helper
 *
 */

module.exports = function getUserAgent() {

	try{

		return navigator.userAgent

	} catch (err) {

		return 'all'
		
	}
}