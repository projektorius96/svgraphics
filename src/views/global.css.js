/**
 * > **NOTE** : DEV_NOTE # ignore for now, this may come handy later on whenever we implement layer manager (grouped svg-containers) in tandem with z-index
 */
export default class {

    /**
     * 
     * @param {Object} thisArg - forwarded `this` keyword
     * @param {Object} options - forwarded `options` object
     * @returns true
     */
    constructor(thisArg, options){

        /**
         * @arbitrary
         * 
         * NOTE > We're accruing each letter's position in Latin's alphabet
         */
        const [S, V, G] = [19, 22, 7];

        thisArg.style.cssText = /* style */`
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            background: transparent;
            z-index: ${ [S, V, G].reduce( (prev, current) => (prev += current) )};
            fill: ${ options.fill };
        `;

        return true;

    }

}