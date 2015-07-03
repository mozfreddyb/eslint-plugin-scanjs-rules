TODO
====
* after porting from scanjs to eslint:
* * add location= rule
* * get assign-inner-thml rule from no-unsafe-innerhtml plugin
* tests for each rule!
* look at existing eslint rules. they can also identify things like window['setTimeout'](), which is pretty neat.       
* remove rules that are in an upstream rule. this saves us maintenance work. hopefully.
