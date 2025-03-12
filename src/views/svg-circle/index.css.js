export default function ({options}) {

    /**
     * @arbitrary
     * 
     * NOTE > We're accruing each letter's position in Latin's alphabet
     */
    const [S, V, G] = [19, 22, 7];
    this.style.cssText = /* style */`
        display: block;
        position: relative;
            top: 0;
            left: 0;
        z-index: ${ [S, V, G].reduce( (prev, current) => (prev += current) )};
        fill: ${options.fill};
    `;

    return true;

}