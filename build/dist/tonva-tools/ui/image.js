import * as React from 'react';
import classNames from 'classnames';
import { nav } from './nav';
export function Image(props) {
    var className = props.className, style = props.style, src = props.src, altImage = props.altImage;
    if (!src) {
        return React.createElement("div", { className: classNames(className, 'image-none'), style: style },
            React.createElement("i", { className: "fa fa-file-o" }));
    }
    if (src.startsWith(':') === true) {
        src = nav.resUrl + src.substr(1);
    }
    return React.createElement("img", { src: src, className: className, style: style, onError: function (evt) { return evt.currentTarget.src = altImage; } });
}
//# sourceMappingURL=image.js.map