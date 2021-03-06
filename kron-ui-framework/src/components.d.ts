/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KronArticle {
        "appearance": string;
    }
    interface KronBox {
        "appearance": string;
    }
    interface KronButton {
        "appearance": string;
    }
    interface KronFigure {
        "alt": string;
        "appearance": string;
        "appearanceFig": string;
        "appearanceImage": string;
        "img": string;
        "text": string;
    }
    interface KronForm {
        "appearance": string;
        "image": boolean;
    }
    interface KronHeadline {
        "appereance": string;
        "backgroundpicture": string;
    }
    interface KronMenu {
        "appearance": string;
        "menu": string;
    }
    interface KronNavbar {
        "appearance": string;
        "contactlogo": string;
        "navlogo": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLKronArticleElement extends Components.KronArticle, HTMLStencilElement {
    }
    var HTMLKronArticleElement: {
        prototype: HTMLKronArticleElement;
        new (): HTMLKronArticleElement;
    };
    interface HTMLKronBoxElement extends Components.KronBox, HTMLStencilElement {
    }
    var HTMLKronBoxElement: {
        prototype: HTMLKronBoxElement;
        new (): HTMLKronBoxElement;
    };
    interface HTMLKronButtonElement extends Components.KronButton, HTMLStencilElement {
    }
    var HTMLKronButtonElement: {
        prototype: HTMLKronButtonElement;
        new (): HTMLKronButtonElement;
    };
    interface HTMLKronFigureElement extends Components.KronFigure, HTMLStencilElement {
    }
    var HTMLKronFigureElement: {
        prototype: HTMLKronFigureElement;
        new (): HTMLKronFigureElement;
    };
    interface HTMLKronFormElement extends Components.KronForm, HTMLStencilElement {
    }
    var HTMLKronFormElement: {
        prototype: HTMLKronFormElement;
        new (): HTMLKronFormElement;
    };
    interface HTMLKronHeadlineElement extends Components.KronHeadline, HTMLStencilElement {
    }
    var HTMLKronHeadlineElement: {
        prototype: HTMLKronHeadlineElement;
        new (): HTMLKronHeadlineElement;
    };
    interface HTMLKronMenuElement extends Components.KronMenu, HTMLStencilElement {
    }
    var HTMLKronMenuElement: {
        prototype: HTMLKronMenuElement;
        new (): HTMLKronMenuElement;
    };
    interface HTMLKronNavbarElement extends Components.KronNavbar, HTMLStencilElement {
    }
    var HTMLKronNavbarElement: {
        prototype: HTMLKronNavbarElement;
        new (): HTMLKronNavbarElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "kron-article": HTMLKronArticleElement;
        "kron-box": HTMLKronBoxElement;
        "kron-button": HTMLKronButtonElement;
        "kron-figure": HTMLKronFigureElement;
        "kron-form": HTMLKronFormElement;
        "kron-headline": HTMLKronHeadlineElement;
        "kron-menu": HTMLKronMenuElement;
        "kron-navbar": HTMLKronNavbarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KronArticle {
        "appearance"?: string;
    }
    interface KronBox {
        "appearance"?: string;
    }
    interface KronButton {
        "appearance"?: string;
    }
    interface KronFigure {
        "alt"?: string;
        "appearance"?: string;
        "appearanceFig"?: string;
        "appearanceImage"?: string;
        "img"?: string;
        "text"?: string;
    }
    interface KronForm {
        "appearance"?: string;
        "image"?: boolean;
    }
    interface KronHeadline {
        "appereance"?: string;
        "backgroundpicture"?: string;
    }
    interface KronMenu {
        "appearance"?: string;
        "menu"?: string;
    }
    interface KronNavbar {
        "appearance"?: string;
        "contactlogo"?: string;
        "navlogo"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "kron-article": KronArticle;
        "kron-box": KronBox;
        "kron-button": KronButton;
        "kron-figure": KronFigure;
        "kron-form": KronForm;
        "kron-headline": KronHeadline;
        "kron-menu": KronMenu;
        "kron-navbar": KronNavbar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kron-article": LocalJSX.KronArticle & JSXBase.HTMLAttributes<HTMLKronArticleElement>;
            "kron-box": LocalJSX.KronBox & JSXBase.HTMLAttributes<HTMLKronBoxElement>;
            "kron-button": LocalJSX.KronButton & JSXBase.HTMLAttributes<HTMLKronButtonElement>;
            "kron-figure": LocalJSX.KronFigure & JSXBase.HTMLAttributes<HTMLKronFigureElement>;
            "kron-form": LocalJSX.KronForm & JSXBase.HTMLAttributes<HTMLKronFormElement>;
            "kron-headline": LocalJSX.KronHeadline & JSXBase.HTMLAttributes<HTMLKronHeadlineElement>;
            "kron-menu": LocalJSX.KronMenu & JSXBase.HTMLAttributes<HTMLKronMenuElement>;
            "kron-navbar": LocalJSX.KronNavbar & JSXBase.HTMLAttributes<HTMLKronNavbarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
