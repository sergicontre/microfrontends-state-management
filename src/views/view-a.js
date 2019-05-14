// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
import  'wired-card';
import 'wired-input';
import 'wired-button';
import 'wired-listbox';
import "wired-icon-button";


// Extend the LitElement base class
class ViewA extends LitElement {

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
        <h4>Micro Frontend 1</h4>
        <wired-input id="inputValue" placeholder="Enter value"></wired-input>
        <wired-button id="btn">Submit</wired-button>
        <p> Input a value or select one in listbox</p>
        <section>
          <wired-listbox id="combo" horizontal>
            <wired-item value="one">0</wired-item>
            <wired-item value="two">25</wired-item>
            <wired-item value="three">50</wired-item>
            <wired-item value="four">75</wired-item>
          </wired-listbox>
          <wired-icon-button id="iconBtn" class="red" disabled>cached</wired-icon-button>
        </section>
      </wired-card>
    `;
  }

  firstUpdated(changedProperties) {
    const inputValue = this.shadowRoot.getElementById('inputValue');
    const button = this.shadowRoot.getElementById('btn');
    const combo = this.shadowRoot.getElementById('combo');
    const iconBtn = this.shadowRoot.getElementById('iconBtn');

    combo.addEventListener('selected', () => {
      inputValue.value = combo.value.text;
    });

    button.addEventListener('click', () => {
      //Publish to channel
      PubSub.publish('value-channel',inputValue.value);
    });

    iconBtn.addEventListener('click', () => {
      //Publish to channel
      PubSub.publish('spinner-channel',inputValue.value);
    });

    //Subscribe to channel
    PubSub.subscribe('favorite-channel').on((value) => {
      iconBtn.disabled = !value  
    });

    //Subscribe to channel
    PubSub.subscribe('broadcast-channel').on((value) => {
      iconBtn.disabled = value  
    });

  }

}
// Register the new element with the browser.
customElements.define('view-a', ViewA);