import { Component, Prop, h, Method} from '@stencil/core';

@Component({
  tag: 'kron-test-onclick',
  styleUrl: 'kron-test-onclick.css',
  shadow: true,
})
export class KronTestOnclick {

  @Prop() websitelink : string;


  linktopage(){

  }


  render() {
    return (
    <div> 
      <button onClick={this.linktopage}></button>
        <slot>


        </slot>
        </div>
    );
  }

}
