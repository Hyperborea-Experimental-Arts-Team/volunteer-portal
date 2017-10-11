/**
 * Various utility functions. Split this up if it gets big.
 *
 * @author mtownsend
 * @since Oct 2017
 */

'use strict';

/**
 * Flattens a bunch of strings into one
 * @param {string[]} params - The strings to flatten
 * @returns {string} The flat string, space-separated
 */
export function concat(...params) {
  return params.join(' ');
}