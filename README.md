# faas-leftpad
left-pad on OpenFaaS

```
$ faas-cli -action build -f ./stack.yml
$ faas-cli -action deploy -f ./stack.yml
```

Test it:

```
$ curl --data "austin" http://localhost:8080/function/leftpad
'              austin'
```
