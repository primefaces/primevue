# Accessibility

PrimeVue has WCAG 2.1 AA level compliance, refer to the accessibility documentation of each component for detailed information.

## Colors

Colors on a web page should aim a contrast ratio of at least 4.5:1 and consider a selection of colors that do not cause vibration. Good Contrast Color contrast between the background and the foreground content should be sufficient enough to ensure readability. Example below displays two cases with good and bad samples. GOOD BAD Vibration Color vibration is leads to an illusion of motion due to choosing colors that have low visibility against each other. Color combinations need to be picked with caution to avoid vibration. VIBRATE Dark Mode Highly saturated colors should be avoided when used within a dark design scheme as they cause eye strain. Instead desaturated colors should be preferred. Indigo 500 Indigo 200

## Form Controls

Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be used with space key as well to trigger.

```vue
<button @click="onButtonClick(event)">Click</button>

<div class="fancy-button" @click="onButtonClick(event)">Click</div>

<div class="fancy-button" @click="onClick(event)" @keydown="onKeyDown(event)" tabindex="0">Click</div>

<label for="myinput">Username:</label>
<input id="myinput" type="text" name="username" />
```

## Introduction

According to the World Health Organization, 15% of the world population has a disability to some degree. As a result, accessibility features in any context such as a ramp for wheelchair users or a multimedia with captions are crucial to ensure content can be consumed by anyone. Types of disabilities are diverse so you need to know your audience well and how they interact with the content created. There four main categories; Visual Impairments Blindness, low-level vision or color blindness are the common types of visual impairments. Screen magnifiers and the color blind mode are usually built-in features of the browsers whereas for people who rely on screen readers, page developers are required to make sure content is readable by the readers. Popular readers are NVDA , JAWS and ChromeVox . Hearing Impairments Deafness or hearing loss refers to the inability to hear sounds totally or partially. People with hearing impairments use assistive devices however it may not be enough when interacting with a web page. Common implementation is providing textual alternatives, transcripts and captions for content with audio. Mobility Impairments People with mobility impairments have disabilities related to movement due to loss of a limb, paralysis or other varying reasons. Assistive technologies like a head pointer is a device to interact with a screen whereas keyboard or a trackpad remain as solutions for people who are not able to utilize a mouse. Cognitive Impairments Cognitive impairments have a wider range that includes people with learning disabilities, depression and dyslexia. A well designed content also leads to better user experience for people without disabilities so designing for cognitive impairments result in better design for any user.

## Semantic HTML

HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular div elements with classes are used. Consider the following example that do not mean too much for readers.

```vue
<div class="header">
    <div class="header-text">Header</div>
</div>

<div class="nav"></div>

<div class="main">
    <div class="content">
    </div>

    <div class="sidebar">
    </div>
</div>

<div class="footer">
</div>

<header>
    <h1>Header</h1>
</header>

<nav></nav>

<main>
    <article></article>

    <aside></aside>
</main>

<footer>
</footer>
```

## WAI ARIA

ARIA refers to "Accessible Rich Internet Applications" is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components such as a datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeVue. These types of components must provide keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized. ARIA consists of roles, properties and attributes. Roles define what the element is mainly used for e.g. checkbox , dialog , tablist whereas States and Properties define the metadata of the element like aria-checked , aria-disabled . Consider the following case of a native checkbox. It has built-in keyboard and screen reader support.

```vue
<input type="checkbox" value="Prime" name="ui" checked />
```

## WCAG

Correct page structure with the aid of assistive technologies are the core ingridients for an accessible web content. HTML is based on an accessible foundation, form controls can be used by keyboard by default and semantic HTML is easier to be processed by a screen reader. WCAG refers to Web Content Accessibility Guideline , a standard managed by the WAI (Web Accessibility Initiative) of W3C (World Wide Web Consortium). WCAG consists of recommendations for making the web content more accessible. PrimeVue components aim high level of WCAG compliancy in the near future. Various countries around the globe have governmental policies regarding web accessibility as well. Most well known of these are Section 508 in the US and Web Accessibility Directive of the European Union.
