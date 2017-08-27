# faas-leftpad
left-pad on [OpenFaaS](https://www.openfaas.com)

```
$ faas-cli -action build -f ./stack.yml
$ faas-cli -action deploy -f ./stack.yml
```

Test it (20 spaces is default):

```
$ curl --data "austin" http://localhost:8080/function/leftpad
'              austin'
```

Override the spaces via a Header:

```
$ curl --data "austin" http://localhost:8080/function/leftpad \
  -H "X-Padding: 80"
'                                                                          austin'
```
