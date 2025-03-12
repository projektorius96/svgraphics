globalThis.ArgsList = Array;
EventTarget.prototype.on = EventTarget.prototype.addEventListener;
EventTarget.prototype.rm = EventTarget.prototype.removeEventListener;

export function getNamespace(import_meta_url) {

    return (
        new URL(import_meta_url).pathname.split('/').at(-2)
    );

}

export function setCoords(self, svg_namespace) {
    let svgRect = self.children?.namedItem(svg_namespace).viewBox.baseVal;
        svgRect.x = 0;
        svgRect.y = 0;
        svgRect.width = Math.ceil(window.innerWidth);
        svgRect.height = Math.ceil(window.innerHeight);

    return true;
}