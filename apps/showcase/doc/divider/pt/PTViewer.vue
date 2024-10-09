<template>
    <DocPTViewer :docs="docs">
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores debitis praesentium aliquam.</p>

            <Divider align="left" type="solid">
                <b>Left</b>
            </Divider>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium.</p>

            <Divider align="center" type="dotted">
                <b>Center</b>
            </Divider>

            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum saepe eveniet ut et voluptates.</p>

            <Divider align="right" type="dashed">
                <b>Right</b>
            </Divider>
        </div>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    data: getPTOptions('Divider'),
                    key: 'Divider'
                }
            ]
        };
    }
};
</script>
