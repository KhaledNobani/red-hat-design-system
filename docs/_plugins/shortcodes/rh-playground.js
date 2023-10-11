import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import 'playground-elements';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';

class RhPlayground extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: block;

      --_max-height: 785px;
    }

    ::slotted(pre) {
      max-height:  var(--_max-height);
      margin: 0 !important;
    }

    [hidden],
    div.showing {
      display: none !important;
    }

    div {
      max-height: var(--_max-height);
      overflow-y: scroll;
    }

    rh-button {
      position: absolute;
      inset-block-end: 5px;
      inset-inline-end: 5px;
      display: block;
    }

    rh-spinner {
      opacity: 0;
      transition: opacity 0.5s ease;
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: 50%;
      transform: translateY(-50%) translateX(-50%);
    }

    .loading rh-spinner {
      opacity: 1;
    }

    .loading ::slotted(pre) {
      opacity: .3;
    }

    playground-project {
      display: block;
      border: var(--rh-border-width-md, 2px) solid var(--rh-color-border-subtle-on-light, #c7c7c7);
      border-radius: var(--rh-border-radius-default, 3px);
      overflow: hidden;
    }

    playground-preview {
      resize: vertical;
      overflow: hidden;
    }
  `;

  static properties = {
    loading: { type: Boolean, state: true },
    showing: { type: Boolean, state: true },
    tagName: { attribute: 'tag-name' },
  };

  constructor() {
    super();
    /** Is the demo code loading? */
    this.loading = false;
    /** Is the demo displayed? */
    this.showing = false;
    this.project; // ?: PlaygroundProject | null;
    this.tabBar; // ?: PlaygroundTabBar | null;
    this.fileEditor; // ?: PlaygroundFileEditor | null;
    this.preview; // ?: PlaygroundPreview | null;
  }

  render() {
    const { showing, loading } = this;
    return html`
      <div id="snippet" class="${classMap({ showing, loading })}">
        <slot></slot>
        <rh-spinner>Loading demo...</rh-spinner>
      </div>
      <rh-button ?hidden="${showing}" @click="${this.load}">Load Demo</rh-button>
      <playground-project ?hidden="${!showing}">
        <playground-tab-bar @click="${this.onChange}"></playground-tab-bar>
        <playground-file-editor @click="${this.onChange}" @keydown="${this.onChange}"></playground-file-editor>
        <playground-preview></playground-preview>
      </playground-project>
    `;
  }

  firstUpdated() {
    this.project = this.shadowRoot?.querySelector('playground-project');
    this.tabBar = this.shadowRoot?.querySelector('playground-tab-bar');
    this.fileEditor = this.shadowRoot?.querySelector('playground-file-editor');
    this.preview = this.shadowRoot?.querySelector('playground-preview');
    if (this.project && this.tabBar && this.fileEditor && this.preview) {
      this.tabBar.project = this.project;
      this.fileEditor.project = this.project;
      this.preview.project = this.project;
    }
  }

  onChange(event) {
    if (event.target === this.tabBar) {
      // @ts-expect-error: need a better way to handle this, but works for now
      this.switch((event.target)._activeFileName);
    } else {
      this.switch((event.target).filename);
    }
  }

  switch(filename) {
    if (filename && this.preview && this.fileEditor) {
      this.preview.htmlFile = filename;
      this.fileEditor.filename = filename;
    }
  }

  async load() {
    this.loading = true;
    this.switch('demo/index.html');
    const { configure } = await import(`/assets/playgrounds/${this.tagName}-playground.js`);
    configure(this.project);
    await import('playground-elements');
    this.show();
  }

  show() {
    this.loading = false;
    this.showing = true;
  }
}

customElements.define('rh-playground', RhPlayground);
