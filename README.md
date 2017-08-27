# faas-leftpad
left-pad on OpenFaaS

```
$ faas-cli -action build -f ./leftpad.yml
$ faas-cli -action deploy -f ./leftpad.yml
```

Test it:

```
$ curl --data "austin" http://localhost:8080/function/leftpad
'              austin'
```
