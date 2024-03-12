export default {
    css: ({ dt }) => `
.p-dock {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

.p-dock-list-container {
    display: flex;
    pointer-events: auto;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
}

.p-dock-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0 none;
}

.p-dock-item {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
    padding: 0.5rem;
    border-radius: 6px;
}

p-dock-item.p-focus {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-dock-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: 3rem;
    height: 3rem;
}

.p-dock-item-second-prev,
.p-dock-item-second-next {
    transform: scale(1.2);
}

.p-dock-item-prev,
.p-dock-item-next {
    transform: scale(1.4);
}

.p-dock-item-current {
    transform: scale(1.6);
    z-index: 1;
}

.p-dock-top {
    left: 0;
    top: 0;
    width: 100%;
}

.p-dock-top .p-dock-item {
    transform-origin: center top;
}

.p-dock-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
}

.p-dock-bottom .p-dock-item {
    transform-origin: center bottom;
}

.p-dock-right {
    right: 0;
    top: 0;
    height: 100%;
}

.p-dock-right .p-dock-item {
    transform-origin: center right;
}

.p-dock-right .p-dock-list {
    flex-direction: column;
}

.p-dock-left {
    left: 0;
    top: 0;
    height: 100%;
}

.p-dock-left .p-dock-item {
    transform-origin: center left;
}

.p-dock-left .p-dock-list {
    flex-direction: column;
}

.p-dock-top .p-dock-item-second-prev,
.p-dock-top .p-dock-item-second-next,
.p-dock-bottom .p-dock-item-second-prev,
.p-dock-bottom .p-dock-item-second-next {
    margin: 0 0.9rem;
}
.p-dock-top .p-dock-item-prev,
.p-dock-top .p-dock-item-next,
.p-dock-bottom .p-dock-item-prev,
.p-dock-bottom .p-dock-item-next {
    margin: 0 1.3rem;
}
.p-dock-top .p-dock-item-current,
.p-dock-bottom .p-dock-item-current {
    margin: 0 1.5rem;
}
.p-dock-left .p-dock-item-second-prev,
.p-dock-left .p-dock-item-second-next,
.p-dock-right .p-dock-item-second-prev,
.p-dock-right .p-dock-item-second-next {
    margin: 0.9rem 0;
}
.p-dock-left .p-dock-item-prev,
.p-dock-left .p-dock-item-next,
.p-dock-right .p-dock-item-prev,
.p-dock-right .p-dock-item-next {
    margin: 1.3rem 0;
}
.p-dock-left .p-dock-item-current,
.p-dock-right .p-dock-item-current {
    margin: 1.5rem 0;
}
.p-dock-mobile.p-dock-top .p-dock-list-container,
.p-dock-mobile.p-dock-bottom .p-dock-list-container {
    overflow-x: auto;
    width: 100%;
}
.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
    margin: 0 auto;
}
.p-dock-mobile.p-dock-left .p-dock-list-container,
.p-dock-mobile.p-dock-right .p-dock-list-container {
    overflow-y: auto;
    height: 100%;
}
.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
    margin: auto 0;
}
.p-dock-mobile .p-dock-list .p-dock-item {
    transform: none;
    margin: 0;
}
`
};
