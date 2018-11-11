/**
 * Various utility functions. Split this up if it gets big.
 *
 * @author mtownsend
 * @since Oct 2017
 */

/**
 * Flattens a bunch of strings into one
 * @param {string[]} params - The strings to flatten
 * @returns {string} The flat string, space-separated
 */
export function concat(...params) {
  return params.join(' ');
}

export function isInError(field, errors) {
    if (errors) {
        var error = errors.find((error) => error.param === field) != null;
        return error && error != null;
    }
    return false;
}

export function errorFor(field, errors) {
    if (errors) {
        const error = errors.find((error) => error.param === field)
        if (error)
            return error.msg;
    }
    return undefined;
}

export function labelFor(field, defaultMessage, errors) {
    return errorFor(field, errors) || defaultMessage;
}