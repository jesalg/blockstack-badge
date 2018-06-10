
# BlockStack Badge

Embed your BlockStack profile badge on any site. 

![Example Badge](example.png)

## Embed Instructions

1) Add this JS script in the header of the page you want your BlockStack badge to be displayed:

```
<script src="https://rawgit.com/jesalg/blockstack-badge/master/dist/embed.js" type="text/javascript"></script>
```

2) Add this div wherever you want your badge to be displayed on that page and update the `data-profile` attribute with appropriate BlockStack ID:

```
<div class="bs-profile" data-profile="[BLOCKSTACK_ID]"></div>
```

## Developers

To run the demo app locally:

`npm run serve`

To release a new build:

`npm run build`