## TypeScript: 
Does type checking 
It is a programming language.
Its kind of wrapper to JS.
Why do we need it? To reduce errors.

1. Create project -    npm init -y (because today we are not creating react project)
2. Install typescript  -    npm i typescript -g   
    (Installed it globally)
    On mac - sudo/npm i typescript -g   

    To check if it installed :  tsc -v

3.  Create “tsconfig.json” file, inside it write:
        {
            "include": ["src"],
            "exclude": ["node_modules"],
            "compilerOptions": {
                "module": "commonjs",
                "outDir": "build",
                "target": "es2017",
                "declaration": true,
                "sourceMap": true
            }
        }

4.  Write script inside package.json 
        {
            "build": "tsc --watch"
        }
5. Create src folder, and inside that, create index.ts file or whatever ts files you want to create
6. Run command -      npm run build
(Build folder will be created)

### Compiled Language and Transpiled Language

Compiled Language:
-----------------
    System understands ---> 00110101  1010  10101
    So any code we write is converted to 0101100011
    So this conversion is done by compiler
    Code---->Compiler---->0101101101010

Transpiled Language:    (How to remember? ---- transpiled=translate)
-------------------
    Code(lang-1) --> Transpiler--> Code(Lang-2)--->Compiler---->01001001011
    (TypeScript)                   (JavaScript)


## Browser can only understand JavaScript. It does NOT understand TypeScript.
So transpiler converts Typescript to Javascript.

TypeScript is only requireed in development phase.
In production phase, Javascript is required.

## Static Language and Dynamic Language

Static Language:
---------------

    Static - fixed
    Fixes the type

    Other languages like c etc
        int a = 10
        String s ="abc"

        i.e we predefine the type of  whatever we want to put 
        i.e int or string etc
        eg C, Java, C++

Dynamic Language:
-----------------

    let a = 10
    a = "abc"

    i.e we DO NOT predefine the type of  whatever we want 
     eg JS, python, php

## TS is a transpiled and static language.  
    TS is a wrapper to our JS

## Need of TS:

As of now we were only creating small apps.

    In js:

    console.log("2" + "2") 
    o/p------------22

    console.log(2 + "2") 
    o/p------------22

    console.log(5 - "2") 
    o/p------------3

    console.log(null + 1) 
    o/p------------1

    This kind of confusion is a lot in JS. 

    
    1. Beacuse loose behaviour of JS
    2. You will know the error only when you run the code, not while writing the code. We will have to wait till we run the code.


### Refer the ts files for the notes

When we write in ts files, you will see same js files in build folder.


### How to Link html file to js file (when not working with react app)

Write your code in ts file, but to html, link the js file
In html file, after </body>, write
<script src="./build/index.js"></script>


 