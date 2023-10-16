import sdk from '@stackblitz/sdk';
import { getVueApp } from './templates';

const useCodeSandbox = (language, code, service, extPages, dependencies, component, extFiles) => {
    const getSandboxParameters = (sourceType) => {
        const { files, dependenciesDemo, sourceFileName } = getVueApp({ code, service, extPages, dependencies, component, extFiles }, sourceType);

        files['sandbox.config.json'] = {
            content: {
                infiniteLoopProtection: false
            }
        };

        return { files, dependenciesDemo, sourceFileName };
    };

    const sandboxParameters = getSandboxParameters({ language });

    fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(sandboxParameters)
    })
        .then((response) => response.json())
        .then((data) => window.open(`https://codesandbox.io/s/${data.sandbox_id}`, '_blank'));
};

const useStackBlitz = (language, code, service, extPages, dependencies, component, extFiles, embedded = false) => {
    const getStackBlitzParameters = (sourceType) => {
        const { files, dependenciesDemo, sourceFileName } = getVueApp({ code, service, extPages, dependencies, component, extFiles, embedded }, sourceType);

        return { files, dependenciesDemo, sourceFileName };
    };

    const stackBlitzParameters = getStackBlitzParameters({ language });

    let files = {};

    Object.entries(stackBlitzParameters.files).forEach(([k, v]) => (files[`${k}`] = typeof v.content === 'object' ? JSON.stringify(v.content, null, 2) : v.content));

    const primevueproject = {
        title: embedded ? 'PrimeVue Tailwind Demo' : 'PrimeVue Demo',
        template: 'node',
        description: embedded
            ? "This example demonstrates how to style components with Tailwind CSS using PrimeVue's unstyled property. As mentioned in the PrimeVue documentation, components can be styled or have HTML attributes added using a global or inline pass through approach. In this example, we utilize the global PT approach with Tailwind CSS."
            : '**\n PrimeVue is an open source UI library for Vue featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 400+ ready to use UI blocks to build spectacular applications in no time.',
        dependencies: stackBlitzParameters.dependencies,
        files
    };

    if (embedded) {
        sdk.embedProject('embed', primevueproject, {
            openFile: 'src/main.js',
            view: 'default',
            height: '800px'
        });
    } else {
        sdk.openProject(primevueproject, {
            newWindow: true,
            openFile: [stackBlitzParameters.sourceFileName]
        });
    }
};

export { useCodeSandbox, useStackBlitz };
