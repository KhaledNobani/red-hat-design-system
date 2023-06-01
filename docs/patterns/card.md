---
title: Card
layout: layout-basic.njk
tags:
  - pattern
---

{% import 'component/components.njk' as components %}

<script src="/elements/card/demo/rh-card.js" type="module"></script>
<style>
  rh-card {
    display: grid;
    max-width: 360px;
  }
</style>

{% call components.section("Overview") -%}
<p>A card formats content in a small, contained space. It can be used to display a preview of information or provide secondary content in relation to the content it's near. Several cards can be used together to group related information.
    </p>
{%- endcall %}

{% call components.section("Sample component") -%}
<rh-card>
  <h2>
          Headline, sm
      </h2>
  <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a
          sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam aliquam felis orci, eget cursus mi
          lacinia quis. Vivamus at felis sem.
      </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>
{%- endcall %}

{% call components.section("Sample component - Slotted Title") -%}
<rh-card>
  <h2 slot="header">
          Headline, sm
      </h2>
  <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a
          sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam aliquam felis orci, eget cursus mi
          lacinia quis. Vivamus at felis sem.
      </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>
{%- endcall %}

{% call components.section("Sample component - alternative color scheme") -%}
<rh-card class="alt">
  <h2>
                Headline, sm
            </h2>
  <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a
                sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam aliquam felis orci, eget cursus mi
                lacinia quis. Vivamus at felis sem.
            </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>
<style>
  rh-card.alt,
  rh-context-provider[color-palette^="light"] rh-card.alt {
    --rh-card-background-color: #f0f0f0;
  }

  rh-context-provider[color-palette^="dark"] rh-card.alt {
    --rh-card-background-color: #3c3f42;
  }
</style>
{%- endcall %}

{% call components.section("Sample component - title bar") -%}
<rh-card class="bar">
  <h2 slot="header">
        Headline, sm
    </h2>
  <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a
        sollicitudin mauris tincidunt. Pellentesque vel dapibus risus. Nullam aliquam felis orci, eget cursus mi
        lacinia quis. Vivamus at felis sem.
    </p>
  <rh-cta priority="primary" slot="footer">
    <a href="#">Call to action</a>
  </rh-cta>
</rh-card>
<style>
  rh-card.bar::part(header) {
    background-color: var(--_background-color, #f0f0f0);
    text-transform: uppercase;
    font-weight: var(--rh-font-weight-heading-regular, 300);
    font-size: var(--rh-font-size-body-text-md, 1rem);
  }
</style>
{%- endcall %}

{% call components.section("Title bar component") -%}
<rh-card class="bar">
  <h2 slot="header">Card title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta href="#" slot="footer">Footer</rh-cta>
</rh-card>
<style>
  .bar::part(header) {
    background-color: var(--_header-background-color);
    text-transform: uppercase;
    font-weight: var(--rh-font-weight-heading-regular, 300);
    font-size: var(--rh-font-size-body-text-md, 1rem);
  }
</style>
{%- endcall %}

{% call components.section("Image title bar component") -%}
<rh-card class="bar full">
  <img src="/assets/card/kitten-900x300.jpeg" slot="header">Card title</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>
<rh-cta href="#" slot="footer">Footer</rh-cta>
</rh-card>
<style>
.bar::part(header) {
  background-color: var(--_header-background-color);
  text-transform: uppercase;
  font-weight: var(--rh-font-weight-heading-regular, 300);
  font-size: var(--rh-font-size-body-text-md, 1rem);
}
.full::part(header) {
  padding-inline: 0;
}
</style>
{%- endcall %}

{% repoStatus %}

{% call components.section("Demo") -%}

<p>View a live version of this component and see how it can be customized.</p>

<rh-cta>
<a href="https://redhat.com/elements/card/">View the Red Hat Design System component</a>
</rh-cta>

{%- endcall %}

{% call components.section("Style") -%}
<p>A card can be used in light and dark themes.</p>

<h4>Theme</h4>

<rh-context-provider color-palette="light">
<rh-card>
  <h2 slot="header">Card title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta href="#" slot="footer">Footer</rh-cta>
</rh-card>
</rh-context-provider>

<rh-context-provider color-palette="dark">
<rh-card>
  <h2 slot="header">Card title</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.</p>
  <rh-cta href="#" slot="footer">Footer</rh-cta>
</rh-card>
</rh-context-provider>

{%- endcall %}

{% call components.section("Usage") -%}

<p>A disclosure is used for storing <em>supplementary</em> content in a contained space, like extra search results. It enables a user to collapse or expand information as needed on the current page.</p>

<p>A disclosure is great for hiding extra information that’s not a crucial part of the user experience, it’s also beneficial because it reduces page scrolling. Consider whether a disclosure should be used. If content is crucial or requires more focus to read, don’t use a disclosure.</p>

{% call components.example(palette = 'light') %}
<div class="centered" style="--example-img-max-width: 872px;">
<img src="{{ '/assets/disclosure/disclosure-usage-1.svg' | url }}" alt="A disclosure in a dark theme">
</div>
{%- endcall %}

<h4>Usage vs. Accordion</h4>

<p>A disclosure only has one section panel. If more than one panel is needed, use an accordion instead. A disclosure is used to store supplementary content that might not be a crucial part of the user experience whereas accordions are used to organize more important information.<p>

  <p>A disclosure features slightly different styles than accordions. A disclosure has the caret icon positioned on the left before the section text label whereas accordions have the caret icon placed on the right after the section text label.</p>

  <div class="multi-column--min-400-wide margin-top--4 margin-bottom--4">
    {% call components.example(palette = 'light') %}
    <div class="centered" style="--example-img-max-width: 340px;">
      <img src="{{ '/assets/disclosure/disclosure-usage-2.svg' | url }}" alt="Example of a disclosure">
    </div>
    {%- endcall %}

    {% call components.example(palette = 'light') %}
    <div class="centered" style="--example-img-max-width: 340px;">
      <img src="{{ '/assets/disclosure/disclosure-usage-3.svg' | url }}" alt="Example of an accordion">
    </div>
    {%- endcall %}
  </div>

  <h4>Label formatting</h4>

  <p>Section text labels should be written concisely and be representative of the content within. Be mindful of lengthy character counts and how they’ll impact the appearance of a disclosure, especially on smaller screens or if they’re translated.</p>

  <h4>Content area</h4>

  <p>When the panel is expanded, it contains a content area under the caret icon and section text label. It may contain the same elements that can also be used in other sections of a page, like text, cards, images, etc. To maintain optimal readability, text shouldn’t exceed eight grid columns.</p>

  <h4>Jump links</h4>

  <p>On small screens, vertical <a href="../jump-links">Jump links</a> can be wrapped in a disclosure and act as persistent navigation.</p>

  {% call components.example(palette = 'light') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-usage-4.svg' | url }}" alt="Example of Jump links wrapped in a disclosure" style="--example-img-max-width: 872px;">
  </div>
  {%- endcall %}

  {%- endcall %}

  {% call components.section("Best practices") -%}

  <p>A disclosure consists of one panel only. If more than one panel is needed, use an accordion instead.</p>

  {% call components.example(palette = 'wrong') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-bestpractice-1.svg' | url }}" alt="Inline alert in the top right corner of a page" style="--example-img-max-width: 872px;">
    <img class="margin-top--3" src="{{ '/assets/disclosure/disclosure-bestpractice-1.svg' | url }}" alt="Inline alert in the top right corner of a page" style="--example-img-max-width: 872px;">
  </div>
  {%- endcall %}

  <p>Text inside the panel shouldn’t exceed eight grid columns to maintain optimal readability.</p>
  {% call components.example(palette = 'wrong') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-bestpractice-2.svg' | url }}" alt="Inline alert in the top right corner of a page" style="--inline-img-max-width: 872px;">
  </div>
  {%- endcall %}

  <p>Don’t wrap other complex components inside of a disclosure unless absolutely necessary, like jump links.</p>
  {% call components.example(palette = 'wrong') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-bestpractice-3.svg' | url }}" alt="Inline alert in the top right corner of a page" style="--inline-img-max-width: 872px;">
  </div>
  {%- endcall %}
  {%- endcall %}

  {% call components.section("Behavior") -%}
  <h4>States</h4>
  <p>A disclosure can be collapsed and expanded to hide or reveal information when toggled. By default, it loads with its panel collapsed (this can be customized), allowing users to get a quick preview of the content inside.</p>

  <h4>Collapsing and expanding</h4>

  <p>The disclosure panel can be collapsed or expanded by clicking on or tapping the caret icon, the  section text label, or anywhere inside the container. When the panel is collapsed, the caret icon points to the right toward the text. When the panel expands, the caret icon rotates 90º and points down, revealing the content inside.</p>

  {% call components.example(palette = 'light') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-behavior-1.svg' | url }}" alt="Disclosure with the expand/collapse panel highlighted" style="--inline-img-max-width: 872px;">
  </div>
  {%- endcall %}

  <h4>Tab order</h4>

  <p>When the Tab key is pressed, the focus indicator highlights the collapsed disclosure. When a user expands the panel by pressing the <i>Enter</i> or <i>Space</i> keys, any interactive elements inside are added to the tab order before the focus indicator moves away to the next section of content.</p>

  {% call components.example(palette = 'light') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-behavior-2.svg' | url }}" alt="Disclosure showing links with the focus style" style="--inline-img-max-width: 872px;">
  </div>
  {%- endcall %}

  {%- endcall %}

  {% call components.section("Responsive design") -%}

  <p>A disclosure works well when used on both large and small screens.</p>

  <h4>Breakpoints</h4>

  <p>Disclosures can be used on smaller screens, but the limited screen space makes content taller which might make users scroll more, so be careful about how much content is included.</p>

  <h4>Desktop</h4>

  <div class="margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/disclosure/disclosure-responsive-1.svg' | url }}" alt="Example of a disclosure on desktop">
  </div>

  <h4>Tablet</h4>

  <div class="margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/disclosure/disclosure-responsive-2.svg' | url }}" alt="Example of a disclosure on tablet" style="--inline-img-max-width: 768px;">
  </div>

  <h4>Mobile</h4>

  <div class="margin-top--4 margin-bottom--4">
    <img src="{{ '/assets/disclosure/disclosure-responsive-3.svg' | url }}" alt="Example of a disclosure on mobile" style="--inline-img-max-width: 360px;">
  </div>

  {%- endcall %}

  {% call components.section("Interaction states") -%}

  <p>The interaction states in the collapsed state are the same as the expanded state.</p>

  <rh-accordion>
    <rh-accordion-header>
      <h2>Officia eu id pariatur enim exercitation ipsum laboris irure reprehenderit</h2>
    </rh-accordion-header>
    <rh-accordion-panel>
      <p>Amet dolor deserunt consectetur enim. Amet irure esse est minim sint eu aliquip officia nulla dolore proident. Voluptate dolore nisi aute ut amet quis elit. Id voluptate et ipsum commodo aute do. Eu excepteur sunt ex nostrud sit cillum eu excepteur aliqua fugiat. Tempor ad exercitation amet ad tempor esse.</p>
      <p>Aliqua aliqua do fugiat incididunt voluptate eiusmod. Pariatur laborum aliquip cupidatat esse amet. Velit fugiat irure amet enim proident labore qui eu excepteur. Sit tempor officia ex nisi dolor. Culpa exercitation ad aliquip duis mollit ipsum.</p>
    </rh-accordion-panel>
  </rh-accordion>
  {%- endcall %}

  <hr class="margin-top--10 margin-bottom--10">

  {% call components.section("Spacing") -%}
  <p>A disclosure uses <a href="https://www.patternfly.org/v4/guidelines/spacers">PatternFly 4 spacers</a> to define spacing values between elements.</p>

  {% call components.example(palette = 'light') %}
  <div class="centered">
    <img src="{{ '/assets/disclosure/disclosure-spacing-1.svg' | url }}" alt="Disclosure showing with spacing blocks" style="--inline-img-max-width: 872px;">
  </div>
  {%- endcall %}
  {%- endcall %}

  {% include 'feedback.html' %}