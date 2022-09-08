# Create Daily Share Issue Action

automatic create daily share issue for cuixiaorui/daily-share

## Inputs

## `token`

**Required** github token.

## Example usage

uses: cuixiaorui/create-daily-share-issue-action@main

with:
token: 'github token'

```js
jobs:
  create_daily_share_issue:
    runs-on: ubuntu-latest
    name: create daily share issue
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: create daily share issue action step
        uses: cuixiaorui/create-daily-share-issue-action@main
        env:
          TOKEN: ${{ secrets.TOKEN }}
        with:
          token: ${{env.TOKEN}}
```
