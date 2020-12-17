ns-flip replaceable template to create a cli easily using oclif.

# Why

The combination of the power of [oclif](https://oclif.io/) with the simple updates of [ns-flip](https://ns-flip.nostack.net/) is amazing.  You create a cli instantly and when necessary you can update the template without affecting your custom changes.

# How
Follow the steps below.  Or here's a video:

[![Create Setup Sequence With ns-flip 1.6 Templating010394](http://img.youtube.com/vi/L_pKk148_O4/0.jpg)](http://www.youtube.com/watch?v=L_pKk148_O4)

## (1) Create a Starter CLI
Run
```
npx easy-oclif-cli $CODE_DIR
```
where `$CODE_DIR` is the path to your desired directory for your cli.

That will have an interactive portion.  You will be requested by oclif to answer a number of questions about what cli you want to create. You should choose the default 'TypeScript', and we suggest choosing `npm` rather than the default `yarn`.

You can run the starter cli if you like.
```
cd $CODE_DIR
npm install
npm link
```
Call the name of your cli (or whatever you put for the command bin name when you created it in Oclif.)

## (2) Update the Commands
Call 
```
npx ns-flip settings $CODE_DIR
```
and follow the prompts.

Then call `generate` to update your code from the new settings:
```
npx ns-flip generate $CODE_DIR
```

## (3) Change the Custom Code
Of course, you still have to create your code.  You should be able to do just about anything in possible in Node using Typescript.  But, follow the [safe custom code practices of ns-flip](https://ns-flip.nostack.net/Safe-Custom-Code) to be able to reapply the template in the future without losing anything.

Basically:
* For any command `command`, find it at `src/commands/command.ts`, and modify the code inside of the designated `run` area.
* Add any files or directories you like in the `src/custom` directory, and import them into the command file in the designated `customImports` section.
* You will have to modify the test code also at `test/commands/command.test.ts`.  You can also add anything you want into `test/custom`.
* Before you update your template, make sure to check your code for safety by calling:
    ``` 
    npx ns-flip check $CODE_DIR
    ```
## (4) Updating Your Template
Take a minute and set up alerts about releases to this template.
1. Go to the [GitHub repo](https://github.com/YizYah/easy-oclif-cli) and click the arrow by the `Watch` button on the upper right.

<img src="images/2.jpg" alt="Watch Button" title="Watch" width="200">

2. Choose "Custom", and then select "Releases".

<img src="images/3.jpg" alt="Watch Releases" title="Releases" width="200">

To reapply the template with a newly released version, just the first command again.  Make sure to use he same path for the legacy `$CODE_DIR`.
```
npx ns-flip settings $CODE_DIR
```
All of the settings and custom changes in the `$CODE_DIR` cli will be retained if you followed the [safe custom code practices of ns-flip](https://ns-flip.nostack.net/Safe-Custom-Code).

# Alternatives
The classic generator for creating an oclif cli is [oclif](https://www.npmjs.com/package/oclif). Both that package and this one use the same core packages, including `@oclif/command` and `@oclif/config`. It offers more alternatives (e.g. yarn and js). So if you want to use js rather than ts (although they discourage the practice), you can do so with that package.  On the debit side, you can't update your template and regenerate your code without replacing your legacy changes.


  The classic node package for CLI creation is [Commander](https://www.npmjs.com/package/commander).

Commander is not a generator--its a package you can include when you build a cli from scratch.  You can find some [Yeoman generators](https://yeoman.io/generators/) based on it--none seem to have taken off. If someone wants to build one please let us know.

But the best alternatives to `easy-oflif-cli` have not been created yet.  [Let us know](https://spectrum.chat/ns-flip?tab=posts) what you'd like to see--it's not easy to create ns-flip templates! :smiley:

# Help
Post on the [ns-flip Community](https://spectrum.chat/ns-flip?tab=posts).

# See Also
* [ns-flip documentation](https://ns-flip.nostack.net/Home)
* [oclif documentation](https://oclif.io/docs/commands)
