# Breadcrumb

It renders a responsive breadcrumb

<br />

## How to use

```javascript
import { Breadcrumb } from "@apus/ui";

const MyComponent = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item text='Pesquisa' click={() => router.replace('/')}/>
        <Breadcrumb.Item text='Escola' active/>
      </Breadcrumb>
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
| active | boolean | Flag to change item style when active | false     | false    |

<br />


## Style Variables

| Variable                                | Description                | Default                          |
| --------------------------------------- | -------------------------- | -------------------------------- |
| --ui-breadcrumb-height             | Height               | 34px               |
| --ui-primary-color            | Background Color Active            | #1764E3           |
| --ui-primary-color-contrast              | Font Color When Active         | #FFFFFF                              |
