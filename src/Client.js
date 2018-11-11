const ladybug = require("ladybug-fetch");
const Eightball = require("./8ball.js");

/**
 * Represents a client for interacting with API
 * @constructor
 * @param {Object} options - Options for the client
 * @param {String} options.token - The token to connect to API
 */
class Client {
  constructor(options = {}) {
    if(!options.token || typeof options.token !== "string") throw new Error("Token is missing or is not a string");

    /**
     * The token for this client
     * @type {String}
     * @readonly
     * @private
     */
    Object.defineProperty(this, "token", {
      value: options.token,
      hidden: true,
      writable: false
    });

    /**
     * Base URL used by requests
     * @type {String}
     * @readonly
     */
    this.url = "https://bananapi.ml/api";
  }
  
  /**
   * Stay awake
   * @param {String} text - The text to use
   * @returns {Promise<Buffer>}
   */
  stayawake(text) {
    return this._get("/stayawake", { text });
  }
  
  /**
   * Say something to hurt
   * @param {String} text - The text to use
   * @returns {Promise<Buffer>}
   */
  hurt(text) {
    return this._get("/hurt", { text });
  }
  
  /**
   * Tweet something as trump
   * @param {String} text - The text to tweet
   * @returns {Promise<Buffer>}
   */
  trumptweet(text) {
    return this._get("/trumptweet", { text });
  }

  /**
   * Humans are good
   * @param {String} text - Why humans are good
   * @returns {Buffer}
   */
  humansgood(text) {
    return this._get("/humansgood", { text });
  }

  /**
   * You've met that one person with autism
   * @param {String} text - What the person have that made him have autism?
   * @returns {Buffer}
   */
  autism(text) {
    return this._get("/autism", { text });
  }

  /**
   * Oof headache
   * @param {String} text - Explain what gives headache
   * @returns {Buffer}
   */
  headache(text) {
    return this._get("/headache", { text });
  }

  /**
   * Make.your((text) => JavaScript());
   * @param {String} text - The text to JavaScriptify
   * @returns {Promise<String>}
   */
  jsify(text) {
    return this._get("/jsify", { text }).then((body) => body.js);
  }

  /**
   * Excuse me sir this seat is exclusive for disabled people
   * but i'm writing documentation! ok sorry to bother you sir
   * @param {String} text - The Text that makes you disabled
   * @returns {Promise<Buffer>}
   */
  disabled(text) {
    return this._get("/disabled", { text });
  }

  /**
   * Creates an MD5 hash
   * @param {String} text - Text to hash
   * @returns {Promise<String>}
   */
  hash(text) {
    return this._get("/hash", { text }).then((body) => body.hash);
  }

  /**
   * Alias for {@link Client#hash} because md5 makes more sense on what hash it is.
   * @param {String} text - Text to hash
   * @returns {Promise<String>}
   */
  md5(...args) {
    return this.hash(...args);
  }

  /**
   * Can't sleep?
   * @param {String} text - The text that makes you sleep
   * @returns {Promise<Buffer>}
   */
  sleeptight(text) {
    return this._get("/sleeptight", { text });
  }

  /**
   * Legends have API wrappers
   * @param {String} text - What does legends have?
   * @returns {Promise<Buffer>}
   */
  legends(text) {
    return this._get("/legends", { text });
  }

  /**
   * Abandon something
   * @param {String} text - Text that makes you abandon
   * @returns {Promise<Buffer>}
   */
  abandon(text) {
    return this._get("/abandon", { text });
  }

  /**
   * Presidential Alert
   * @param {String} text - What to alert
   * @returns {Promise<Buffer>}
   */
  alert(text) {
    return this._get("/alert", { text });
  }
  
   /**
   * S P I T O N H I M
   * @param {String} firstImage - First image to spit
   * @param2 {String} secondImage - Second image to spit
   * @returns {Promise<Buffer>}
   */
  spit(firstImage, secondImage) {
    return this._get("/spit", { firstImage, secondImage });
  }

   /**
   * [passes note] ur weeb
   * @param {String} text - What to note
   * @returns {Promise<Buffer>}
   */
  note(text) {
    return this._get("/note", { text });
  }
  
   /**
   * I found it! The scroll of truth! ur weeb! NYEH!
   * @param {String} text - What to make the scroll of truth say
   * @returns {Promise<Buffer>}
   */
  scroll(text) {
    return this._get("/scroll", { text });
  }


   /**
   * Oh no, hes retarded!
   * @param {String} image - What to make retarded
   * @returns {Promise<Buffer>}
   */
  retarded(image) {
    return this._get("/retarded", { image });
  }
    
    
  /**
   * Pings the API for response time
   * @returns {Promise<Number>}
   */
  ping() {
    const date = Date.now();
    return ladybug("https://bananapi.ml/ping")
      .then(() => Date.now() - date);
  }

  /**
   * txet ruoy sesrever
   * @param {String} text - Text to esrever
   * @returns {Promise<String>}
   */
  reverse(text) {
    return this._get("/reverse", { text }).then((body) => body.text);
  } 

  /**
   * Asks 8ball a question
   * @param {String} question - The question to ask 8ball
   * @returns {Promise<Eightball>}
   */
  eightball(question) {
    return this._get("/8ball", { question }).then((body) => new Eightball(body));
  }

  /**
   * Does a get request, used internally by the wrapper
   * Not recommended to be used directly.
   * @param {String} endpoint - Endpoint to get
   * @param {Object} query - Querystring to pass to the request.
   * @returns {Promise<any>}
   * @private
   */
  _get(endpoint, query = {}) {
    return ladybug(this.url + endpoint)
      .query(query)
      .set("Authorization", this.token)
      .then((res) => res.body);
  }
}

module.exports = Client;
