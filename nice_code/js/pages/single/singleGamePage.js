define("js/pages/single/singleGamePage.js", (dataAndEvents, deepDataAndEvents, obj) => {
  /**
   * @param {?} dataAndEvents
   * @param {Function} init
   * @return {undefined}
   */
  function animate(dataAndEvents, init) {
    if (!(dataAndEvents instanceof init)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  Object.defineProperty(obj, "__esModule", {
    value : true
  });
  const make = (() => {
    /**
     * @param {Function} object
     * @param {Array} d
     * @return {undefined}
     */
    function defineProperty(object, d) {
      /** @type {number} */
      let i = 0;
      for (;i < d.length;i++) {
        const desc = d[i];
        desc.enumerable = desc.enumerable || false;
        /** @type {boolean} */
        desc.configurable = true;
        if ("value" in desc) {
          /** @type {boolean} */
          desc.writable = true;
        }
        Object.defineProperty(object, desc.key, desc);
      }
    }
    return (x, current, a) => (current && defineProperty(x.prototype, current), a && defineProperty(x, a), x);
  })();
  const value = (() => {
    /**
     * @param {?} theGame
     * @return {undefined}
     */
    function init(theGame) {
      animate(this, init);
      this.game = theGame;
      this.model = this.game.gameModel;
      this.full2D = this.game.full2D;
      this.UI = this.game.UI;
      this.viewer = this.game.viewer;
      /** @type {string} */
      this.name = "game";
    }
    return make(init, [{
      key : "show",
      /**
       * @return {undefined}
       */
      value() {
        const items = this.model.is_from_wn;
        const mCid = this.model.firstBlood;
        if (!items) {
          if (!this.game.guider) {
            if (mCid) {
              this.viewer.lookers.showLookers({
                avaImg : false,
                icon : true,
                wording : true
              });
            } else {
              this.viewer.open();
            }
          }
        }
        this.UI.showScore();
        /** @type {number} */
        this.UI.scoreText.obj.position.y = 21;
        /** @type {number} */
        this.UI.scoreText.obj.position.x = -13;
        this.UI.scoreText.changeStyle({
          textAlign : "left"
        });
      }
    }, {
      key : "hide",
      /**
       * @return {undefined}
       */
      value() {
        this.viewer.close();
        this.UI.hideScore();
      }
    }, {
      key : "hideLookersShare",
      /**
       * @return {undefined}
       */
      value() {
        if (this.model.firstBlood) {
          this.model.setFirstBlood(false);
          this.viewer.open();
        }
      }
    }]), init;
  })();
  obj.default = value;
});
