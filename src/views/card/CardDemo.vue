<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Card</h1>
                <p>Card is a flexible container component.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <Card style="width: 25em; margin-bottom: 2em">
                <template slot="title">
                    Simple Card
                </template>
                <template slot="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </template>
            </Card>

            <Card style="width: 25em">
                <template slot="header">
                    <img alt="user header" src="demo/images/usercard.png">
                </template>
                <template slot="title">
                    Advanced Card
                </template>
                <template slot="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </template>
                <template slot="footer">
                    <Button icon="pi pi-check" label="Save" class="p-button-raised" />
                    <Button icon="pi pi-times" label="Cancel" class="p-button-raised p-button-secondary" style="margin-left: .5em" />
                </template>
            </Card>
        </div>
    </div>
</template>