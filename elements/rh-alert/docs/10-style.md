There are two alert variants available for use.

{% example palette="light",
           width=538,
           alt="Alert component blueprint",
           src="../alert-blueprint.svg" %}

## Inline

The required elements of an Inline alert are a thin top bar or thin border, 
icon, title, close button, and a container background. Supporting text and 
buttons may or may not be included below the title to add clarity or optional 
actions.

{% example palette="light",
           width=510,
           alt="Alert component, inline",
           src="../alert-style-inline.svg" %}

## Inline, alternate

The alternate Inline alert style includes a border instead of a line which can 
be used to express more urgency or better grab the attention of a user.

{% example palette="light",
           width=538,
           alt="Alert component, inline alternate",
           src="../alert-style-inline-alt.svg" %}

## Toast

The required elements of a Toast alert are a thin top bar, icon, title, close 
button, and a white container with a subtle drop shadow. Supporting text and 
buttons may or may not be included below the title to add clarity or optional 
actions.

{% example palette="light",
           width=538,
           alt="Alert component, toast",
           src="../alert-style-toast.svg" %}

## Responsive design

{% alert title="Helpful tip" %}
The maximum width of a Toast alert on large screens is **six grid columns**.
{% endalert %}

### Large screens

![Alert component responsive design, large screens][img-large-screens] {.margin-top--0.margin-bottom--7}

### Small screens

On small screens, both alert variants will span the full column of the layout. 
Toast alerts will continue to stack on top of each other, so be mindful of how 
much vertical space the group will occupy if multiple Toast alerts need to be 
displayed.

![Alert component sample][img-small-screens]{style="--inline-img-max-width:360px;"}

## Spacing

Both Alert variants use [PatternFly 4 spacers][spacers] to define spacing values 
between elements.

### Inline

{% example palette="light",
           alt="Alert component spacing, inline",
           src="../alert-spacing-inline.svg" %}

### Toast

{% example palette="light",
           width=538,
           alt="Alert component spacing, toast",
           src="../alert-spacing-toast.svg" %}

### Toast (in layout)

{% example palette="light",
           width=1000,
           alt="Alert component spacing in layout, toast",
           src="../alert-spacing-toast-layout.svg" %}

[spacers]: https://www.patternfly.org/v4/guidelines/spacers
[img-large-screens]: {{ '../alert-responsive-large-screens.svg' | url }}
[img-small-screens]: {{ '../alert-responsive-small-screens.svg' | url }}