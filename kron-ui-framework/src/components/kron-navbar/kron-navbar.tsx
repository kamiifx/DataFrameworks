import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'kron-navbar',
  styleUrl: 'kron-navbar.css',
  shadow: true,
})
export class KronNavbar {
  @Prop() appearance: string;
  @Prop() navlogo:string;
  @Prop() contactlogo:string


  render() {
    return (
      <div class={`nav ${this.appearance}`}>
       <h2 class="logotitle"> {this.navlogo} </h2>
        <div class="items">
          <slot>
          </slot>
       </div>
       <h3 class="contact"> {this.contactlogo} </h3>
      </div>

    );
  }

}
