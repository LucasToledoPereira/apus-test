# Button

It renders a responsive button

<br />

## How to use

```javascript
import { Button } from "@apus/ui";

const MyComponent = () => {
  return (
    <>
      <Button text="Voltar" click={() => router.back()} icon='/images/icons/back.png'/>
    </>
  );
};
```

<br />

## Properties for Breadcrumb.Item

| Property | Type               | Description                          | Required | Default |
| -------- | ------------------ | ------------------------------------ | -------- | ------- |
| text | String | Label to be shown | true     | none    |
| click | Function | OnClick callback function | false     | none    |
| active | boolean | Flag to change button style when active | false     | false    |
| icon | string | Icon image path | false     | none    |
| disabled | boolean | Flag to change button to disabled | false     | false    |



<br />


## Style Variables

| Variable                                | Description                | Default                          |
| --------------------------------------- | -------------------------- | -------------------------------- |
| --ui-button-height            | Height               | 34px               |
| --ui-button-width            | Width               | 135px               |
| --ui-primary-color            | Background Color            | #1764E3           |
| --ui-primary-color-contrast              | Font Color         | #FFFFFF                              |
| --ui-primary-color-hint              | Background Color When Active or hover        | #00336B                              |
