<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Ripple</h1>
                <p>Ripple directive adds ripple effect to the host element.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card-container flex">
                <div class="card primary-box p-ripple" v-ripple>Default</div>
                <div class="card styled-box-green p-ripple" v-ripple>Green</div>
                <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>
                <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>
            </div>
        </div>

        <RippleDoc />
    </div>
</template>

<script>
import RippleDoc from './RippleDoc';

export default {
	components: {
		'RippleDoc': RippleDoc
	}
}
</script>

<style lang="scss" scoped>
::v-deep(.card-container) {
    .card {
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        user-select: none;
        padding: 0;

        &.primary-box {
            background-color: var(--primary-color);
            padding: 0;
            color: var(--primary-color-text);
        }

        &.styled-box-green {
            .p-ink {
                background: rgba(#4baf50, 0.3);
            }
        }

        &.styled-box-orange {
            .p-ink {
                background: rgba(#ffc106, 0.3);
            }
        }

        &.styled-box-purple {
            .p-ink {
                background: rgba(#9c27b0, 0.3);
            }
        }

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>
