<template>
  <DocSectionText v-bind="$attrs">
      <p>The accept callback of a ConfirmDialog can be asynchronous as well. If the accept callback returns a Promise, then the ConfirmDialog will wait for the Promise to resolve before closing the dialog.</p>
      <p>While the promise is resolving, the Dialog is locked.</p>
  </DocSectionText>
  <ConfirmDialog group="async"></ConfirmDialog>
  <div class="card flex flex-wrap gap-2 justify-center">
      <Button @click="confirm1()" label="Delete"></Button>
  </div>
  <DocSectionCode :code="code" />
</template>

<script>
export default {
  data() {
      return {
          code: {
              basic: `
<ConfirmDialog group="async"></ConfirmDialog>
<Button @click="confirm1()" label="Delete"></Button>
`,
              options: `
<template>
  <Toast />
    <ConfirmDialog group="async"></ConfirmDialog>
  <div class="card flex flex-wrap gap-2 justify-center">
      <Button @click="confirm1()" label="Delete"></Button>
  </div>
</template>

<script>
export default {
  methods: {
      confirm1() {
          this.$confirm.require({
              group: 'async',
              message: 'Are you sure you want to proceed?',
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle',
              rejectProps: {
                  label: 'Cancel',
                  severity: 'secondary',
                  outlined: true
              },
              acceptProps: {
                  label: 'Delete'
              },
              accept: () => {
                  this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
              },
              reject: () => {
                  this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
              }
          });
      }
  }
};
<\/script>
`,
              composition: `
<template>
  <Toast />
  <ConfirmDialog group="async"></ConfirmDialog>
  <div class="card flex flex-wrap gap-2 justify-center">
      <Button @click="confirm1()" label="Delete"></Button>
  </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
  confirm.require({
      group: 'async',
      message: 'Are you sure you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      rejectProps: {
          label: 'Cancel',
          severity: 'secondary',
          outlined: true
      },
      acceptProps: {
          label: 'Delete'
      },
      accept: async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have deleted', life: 3000 });
      },
      reject: () => {
          toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      }
  });
};
<\/script>
`
          }
      };
  },
  methods: {
      confirm1() {
          this.$confirm.require({
              group: 'async',
              message: 'Are you sure you want to proceed?',
              header: 'Confirmation',
              icon: 'pi pi-exclamation-triangle',
              rejectProps: {
                  label: 'Cancel',
                  severity: 'secondary',
                  outlined: true
              },
              acceptProps: {
                  label: 'Delete'
              },
              accept: async () => {
                  await new Promise(resolve => setTimeout(resolve, 2000));
                  this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have deleted', life: 3000 });
              },
              reject: () => {
                  this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
              }
          });
      },
  }
};
</script>
