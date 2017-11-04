/**
 * Actions related to table views
 *
 * @author mtownsend
 * @since Nov 2017
 **/

export const TOGGLE_ROW = 'TOGGLE_ROW';

export function toggleRow(table, key) {
  return { type: TOGGLE_ROW, table, key }
}