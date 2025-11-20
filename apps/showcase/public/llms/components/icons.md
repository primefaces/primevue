# icons



## Basic

PrimeIcons use the pi pi-&#123;icon&#125; syntax such as pi pi-check . A standalone icon can be displayed using an element such as i or span

```vue
<i class="pi pi-check"></i>
<i class="pi pi-times"></i>
<span class="pi pi-search"></span>
<span class="pi pi-user"></span>
```

## Color

Icon color is defined with the color property which is inherited from parent by default.

```vue
<i class="pi pi-check" style="color: slateblue"></i>
<i class="pi pi-times" style="color: green"></i>
<i class="pi pi-search" style="color: 'var(--p-primary-color)'"></i>
<i class="pi pi-user" style="color: #708090"></i>
```

## Constants

Constants API is available to reference icons easily when used programmatically.

## Download

PrimeIcons is available at npm, run the following command to download it to your project.

```vue
npm install primeicons
```

## Figma

PrimeIcons library is now available on Figma Community . By adding them as a library, you can easily use these icons in your designs.

## List

Here is the full list of PrimeIcons. More icons will be added periodically and you may also request new icons at the issue tracker.

## Size

Size of an icon is controlled with the font-size property of the element.

```vue
<i class="pi pi-check" style="font-size: 1rem"></i>
<i class="pi pi-times" style="font-size: 1.5rem"></i>
<i class="pi pi-search" style="font-size: 2rem"></i>
<i class="pi pi-user" style="font-size: 2.5rem"></i>
```

## Spin

Special pi-spin class applies infinite rotation to an icon.

```vue
<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
<i class="pi pi-spin pi-cog" style="font-size: 2rem"></i>
```

