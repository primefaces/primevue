<script>
export default {
    name: 'accordiontab',
    props: {
        header: null,
        active: Boolean,
        disabled: Boolean
    },
    data() {
        return {
            d_active: this.active
        }
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    render() {
        return null;
    }
}
</script>