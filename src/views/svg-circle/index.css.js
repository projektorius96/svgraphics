export function setStyles({options}) {

    /**
     * @arbitrary
     * 
     * NOTE > each letters position in Latin's alphabet
     */
    const [S, V, G] = [19, 22, 7];

    this.style.display = 'block';
    this.style.zIndex = Number(S+V+G);
    this.style.position = 'relative';
        this.style.top = 0;
        this.style.left = 0;
    
    if (options){
        this.style.fill = options.fill;
    }

    return true;

}