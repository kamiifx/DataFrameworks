/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KronBox {
        "displaymode": string;
    }
    interface KronNavbar {
        "kronlayout": string;
        "ultag": string;
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
    interface HTMLKronBoxElement extends Components.KronBox, HTMLStencilElement {
    }
    var HTMLKronBoxElement: {
        prototype: HTMLKronBoxElement;
        new (): HTMLKronBoxElement;
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
        "kron-box": HTMLKronBoxElement;
        "kron-navbar": HTMLKronNavbarElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface KronBox {
        "displaymode"?: string;
    }
    interface KronNavbar {
        "kronlayout"?: string;
        "ultag"?: string;
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
        "kron-box": KronBox;
        "kron-navbar": KronNavbar;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "kron-box": LocalJSX.KronBox & JSXBase.HTMLAttributes<HTMLKronBoxElement>;
            "kron-navbar": LocalJSX.KronNavbar & JSXBase.HTMLAttributes<HTMLKronNavbarElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
