# Vue FocusTrap Directive

Focus Trap keeps focus within a certain DOM element while tabbing.

## Import

```javascript
import FocusTrap from 'primevue/focustrap';

app.directive('focustrap', FocusTrap);
```

## Basic

FocusTrap is enabled by attaching the directive with the v- prefix.

```vue
<div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
    <IconField>
        <InputIcon>
            <i class="pi pi-user" />
        </InputIcon>
        <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus fluid />
    </IconField>

    <IconField>
        <InputIcon>
            <i class="pi pi-envelope" />
        </InputIcon>
        <InputText id="email" v-model="email" type="email" placeholder="Email" fluid />
    </IconField>

    <div class="flex items-center gap-2">
        <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
    </div>

    <Button type="submit" label="Submit" class="mt-2" />
</div>
```

## Focustrap
