/**
 * Interface for requesting data from objects that
 * might be null. I don't want to implement monads, okay?
 *
 * @param object {Object} The object, or maybe null
 * @returns {{get: function}} Object with a single 'get' function.
 *          Get returns the value for a key, or undefined if the
 *          object is null, or does not contain the key.
 *
 * @author mtownsend
 * @since Nov 2017
 */
export default object => ({
  get: key => !object ? undefined : object[key]
});