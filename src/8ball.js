
/**
 * Represents an 8ball response
 */
class Eightball {
  constructor(body = {}) {

    /**
     * 8ball's response
     * @readonly
     * @type {String}
     */
    this.response = body.response;

    /**
     * 8ball's Response type
     * @type {String}
     * @readonly
     */
    this.type = body.type;

    /**
     * The original asked question
     * @readonly
     * @type {String}
     */
    this.question = body.question;
  }

  /**
   * Wether the response is positive
   * @returns {Boolean}
   */
  get isPositive() {
    return this.type === "positive";
  }

  /**
   * Wether the response is negative
   * @returns {Boolean}
   */
  get isNegative() {
    return this.type === "negative";
  }

  /**
   * Wether the response is neutral
   * @returns {Boolean}
   */
  get isNeutral() {
    return this.type === "neutral";
  }
}

module.exports = Eightball;
