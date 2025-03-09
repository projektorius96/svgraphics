export default function ({options}) {

    /**
     * @arbitrary
     * 
     * NOTE > each letters position in Latin's alphabet
     */
    const [S, V, G] = [19, 22, 7];
    this.style.cssText = /* style */`
        display: block;
        position: relative;
            top: 0;
            left: 0;
        z-index: ${Number(S+V+G)};
        fill: ${options.fill};
    `;

    return true;

}