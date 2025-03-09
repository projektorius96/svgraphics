export function getNamespace(import_meta_url) {

    return (
        new URL(import_meta_url).pathname.split('/').at(-2)
    );

}

export function setCoords(self, svg_namespace) {
    let svgRect = self.children?.namedItem(svg_namespace).viewBox.baseVal;
        svgRect.x = 0;
        svgRect.y = 0;
        svgRect.width = window.innerWidth;
        svgRect.height = window.innerHeight;

    return ({
        svgRect
    });
}