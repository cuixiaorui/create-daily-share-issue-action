# Create Daily plan Issue

automatic create daily plan issue for cuixiaorui/study-every-day

## Inputs

## `token`

**Required** github token.

## Example usage

uses: cuixiaorui/create-daily-plan-issue@main

with:
token: 'github token'

```js
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Hello world action step
        uses: cuixiaorui/hello-world-javascript-action@main # Uses an action in the root directory
        id: hello
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```
