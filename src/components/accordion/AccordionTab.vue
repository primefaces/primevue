<script>
export default {
    props: {
        header: null,
        active: Boolean,
        disabled: Boolean
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    },
    data() {
        return {
            d_active: this.active
        }
    },
    render() {
        return null;
    }
}
</script>