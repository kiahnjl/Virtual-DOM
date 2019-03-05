
## Overview of the code

The representation of the DOM as a JavaScript Object will be:

```
{
  type: 0, // an enum value identify the node type
  text: '', // if node type is TEXT
  realNode: undefined, // the actual dom node, if already in the dom
  properties: {
    // usual DOM properties
  },
  children: [
    // Zero, one or more nested nodes
  ]
}
```

For example:

```
{
  type: Type.DIV,
  properties: {},
  children: [
    {
      type: Type.H1,
      properties: {},
      children: [
        {
          type: Type.TEXT,
          text: 'Hello world',
          properties: {},
          children: []
        }
      ]
    },
    {
      type: Type.UL,
      properties: {},
      children: [
        {
          type: Type.LI,
          properties: {},
          children: [
            {
              type: Type.TEXT,
              text: 'List item 1',
              properties: {},
              children: []
            }
          ]
        },
        {
          type: Type.LI,
          properties: {},
          children: [
            {
              type: Type.TEXT,
              text: 'List item 2',
              properties: {},
              children: []
            }
          ]
        },
        {
          type: Type.LI,
          properties: {},
          children: [
            {
              type: Type.TEXT,
              text: 'List item 3',
              properties: {},
              children: []
            }
          ]
        }
      ]
    }
  ]
}
```