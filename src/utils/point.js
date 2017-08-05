// @ts-check

import * as Math from './math'

/**
 * A Point data model that contains a horizontal and vertical value.
 *
 * @typedef {{x: number, y: number}} Point
 */

/**
 * Creates a new Point object.
 *
 * @param {number} x The point's x value
 * @param {number} y The point's y value
 */
export function create(x, y) {
  return {x, y}
}

/**
 * Adds two points and returns a new point.
 *
 * @param {Point} a A point to add to.
 * @param {Point} b A point to add to `a`.
 */
export function add(a, b) {
  return {x: Math.add(a.x, b.x), y: Math.add(a.y, b.y)}
}
