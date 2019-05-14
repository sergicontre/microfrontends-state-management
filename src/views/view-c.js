// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import  'wired-card';
import 'wired-checkbox';
import 'wired-spinner';

// Extend the LitElement base class
class ViewC extends LitElement {

  static get styles() {
    return css`
    :host {
      --wired-icon-bg-color: red;
      --wired-item-selected-bg: green;
    }`;
  } 

  render(){
    return html`
      <!-- template content -->
      <wired-card elevation="5">
        <h4>Micro Frontend 3</h4>
        <wired-checkbox id="cbox">Off all</wired-checkbox>
        <section>
            <wired-spinner id="sp"></wired-spinner>
        </section>
      </wired-card>
    `;
  }

  firstUpdated(changedProperties) {
    const checkbox = this.shadowRoot.getElementById('cbox');
    const sp = this.shadowRoot.getElementById('sp');

    checkbox.addEventListener('change', () => {
        //Publish to channel
        PubSub.publish('broadcast-channel',checkbox.checked);
        sp.spinning = false;
    });

    //Subscribe to channel
    PubSub.subscribe('spinner-channel').on((value) => {
        sp.spinning = !sp.spinning;  
    });
  }

}
// Register the new element with the browser.
customElements.define('view-c', ViewC);