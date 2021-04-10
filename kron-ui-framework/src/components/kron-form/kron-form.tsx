import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kron-form',
  styleUrl: 'kron-form.css',
  shadow: true,
})
export class KronForm {
@Prop() information: string;


render() {
    return (
      <form>
        <fieldset>
          <p>{this.information}</p>
          <slot/>
        </fieldset>
      </form>
    );
  }
}
