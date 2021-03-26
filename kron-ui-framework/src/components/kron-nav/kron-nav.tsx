import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'kron-nav',
  styleUrl: 'kron-nav.css',
  shadow: true,
})
export class KronNav {

  @State() nav: boolean = false;


  render() {
    return (
     <ul>
       <li>kontakt</li>
       <li>info</li>
       <li>hjelp</li>
     </ul>

    );
  }

}
